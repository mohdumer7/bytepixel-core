// @ts-nocheck
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Input } from "@/components/ui/input";
import { ScheduleMeeting } from 'react-schedule-meeting';
import { TagInput, Tag } from 'emblor';
import {Label} from "@/components/ui/label";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./styles.css"
import {useBookDemoMutation} from "@/redux/features/bookDemo/bookDemoApi";


export default function Demo() {
    const [bookDemo, { isLoading, isSuccess, error }] = useBookDemoMutation();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [StartTime, setStartTime] = useState<Date | null>(null);
    const [EndTime, setEndTime] = useState<Date | null>(null);
    const [Error, setError] = useState<string | null>(null);
    const [phoneNumber, setPhoneNumber] = useState<string | null>(null)

    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
        return {
            id,
            startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
            endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
        };
    });

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleBookDemo = async () => {
        setError(null);

        if (!Name || !Email || !phoneNumber || !StartTime || !EndTime) {
            setError('Please fill out all fields.');
            return;
        }
        if(phoneNumber?.length <10){
            setError('Please enter a valid 10 digit phone number.');
            return;
        }
        if(!isEmailValid(Email)) {
            setError('Please enter a valid email address.');
            return;
        }
        const data = {
            name:Name,
            startDateTime: StartTime.toISOString(),
            endDateTime: EndTime.toISOString(),
            phoneNumber,
            email:Email
        };
        if (!isLoading) {
            const resp = await bookDemo(data);
            console.log(resp)
            alert("demo booked!")
        }
    };

    const handleTimeslotClicked = (startTimeEventEmit:any) => {
        const startTime = new Date(startTimeEventEmit.startTime);
        setStartTime(startTime);
        setEndTime(new Date(startTime.getTime() + 30 * 60000)); // Assuming a 30-minute duration
    };

    return (
        <div className="w-full max-h-5/6 flex flex-col gap-4">
            <div>
                <Label htmlFor="text mt-2 text-white">Enter Your Name</Label>
                <Input
                    type="text"
                    placeholder="Enter Your Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <Label htmlFor="text mt-2 text-white">Enter Your Email</Label>
                <Input
                    type="text"
                    placeholder="Enter Your Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <Label htmlFor="text mt-2">Enter Your Phone Number</Label>
                <div>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={setPhoneNumber}/>
                </div>
            </div>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor="white"
                startTimeListStyle={"scroll-list"}
                backgroundColor="black"
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots}
                onStartTimeSelect={handleTimeslotClicked}
                scheduleStyles={{height: "30%"}}
            />

            {Error && <div className="text-red-500">{Error}</div>}

            <button
                onClick={handleBookDemo}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
            >
                Book Demo
            </button>
        </div>
    );
}
