import React, { useState } from 'react';
import { format } from 'date-fns';
import { Input } from "@/components/ui/input";
import { ScheduleMeeting } from 'react-schedule-meeting';
import { TagInput, Tag } from 'emblor';
import {Label} from "@/components/ui/label";

export default function CreateMeeting() {
    const [meetingName, setMeetingName] = useState("");
    const [meetingSummary, setMeetingSummary] = useState("");
    const [meetingStartTime, setMeetingStartTime] = useState<Date | null>(null);
    const [meetingEndTime, setMeetingEndTime] = useState<Date | null>(null);
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
    const [emailTags, setEmailTags] = useState<Tag[]>([]);
    const [error, setError] = useState<string | null>(null);

    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
        return {
            id,
            startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
            endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
        };
    });

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleCreateMeeting = async () => {
        setError(null);
        console.log({meetingName,meetingSummary,meetingEndTime,meetingStartTime,emailTags})
        if (!meetingName || !meetingSummary || !meetingStartTime || !meetingEndTime) {
            setError('Please fill out all fields.');
            return;
        }

        if (emailTags.length === 0 || emailTags.some(tag => !isEmailValid(tag.text))) {
            setError('Please add at least one valid email.');
            return;
        }

        const res = await fetch('/api/meeting/create-meeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                summary: meetingName,
                description: meetingSummary,
                startDateTime: meetingStartTime.toISOString(),
                endDateTime: meetingEndTime.toISOString(),
                attendees: emailTags.map(tag => ({ email: tag.text })),
            }),
        });

        const data = await res.json();
        if (data.error) {
            setError(data.error);
        } else {
            alert('Google Meet event created!');
            setMeetingName("");
            setMeetingSummary("");
            setMeetingStartTime(null);
            setMeetingEndTime(null);
            setEmailTags([]);
        }
    };

    const handleTimeslotClicked = (startTimeEventEmit) => {
        const startTime = new Date(startTimeEventEmit.startTime);
        setMeetingStartTime(startTime);
        setMeetingEndTime(new Date(startTime.getTime() + 30 * 60000)); // Assuming a 30-minute duration
    };

    return (
        <div className="w-full max-h-5/6 flex flex-col gap-4">
            <div>

            <Label htmlFor="text mt-2">Meeting Name</Label>
            <Input
                type="text"
                placeholder="Meeting Name"
                value={meetingName}
                onChange={(e) => setMeetingName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            </div>
            <div>
                <Label htmlFor="text mt-2">Meeting Description</Label>
                <Input
                    type="text"
                    placeholder="Meeting Description"
                    value={meetingSummary}
                    onChange={(e) => setMeetingSummary(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <ScheduleMeeting
                borderRadius={10}
                primaryColor="white"
                startTimeListStyle={"scroll-list"}
                backgroundColor="#262626"
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots}
                onStartTimeSelect={handleTimeslotClicked}
                scheduleMeetingStyles={{ height: "30%" }}
            />
            <Label htmlFor="text mt-2">Attendies</Label>
            <TagInput
                tags={emailTags}
                setTags={(newTags) => {
                    const validTags = newTags.filter(tag => isEmailValid(tag.text));
                    setEmailTags(validTags);
                }}
                placeholder="Add an email and press Enter"
                styleClasses={{ input: 'w-full sm:max-w-[350px]' }}
                activeTagIndex={activeTagIndex}
                setActiveTagIndex={setActiveTagIndex}
            />
            {error && <div className="text-red-500">{error}</div>}

            <button
                onClick={handleCreateMeeting}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
            >
                Create Meeting
            </button>
        </div>
    );
}
