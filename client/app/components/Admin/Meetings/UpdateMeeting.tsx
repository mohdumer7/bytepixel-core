import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Dialog } from '@headlessui/react';
import { format, parseISO } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';
import { Input } from "@/components/ui/input";
import { ScheduleMeeting } from 'react-schedule-meeting';
import { TagInput, Tag } from 'emblor';
import {Label} from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const localizer = momentLocalizer(moment);

function CopyIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    )
}

export default function CalendarView() {
    const [meetings, setMeetings] = useState([]);
    const [selectedMeeting, setSelectedMeeting] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [meetingLink,setMeetingLink] = useState(null);
    const [meetingName, setMeetingName] = useState('');
    const [meetingSummary, setMeetingSummary] = useState('');
    const [meetingStartTime, setMeetingStartTime] = useState<Date | null>(null);
    const [meetingEndTime, setMeetingEndTime] = useState<Date | null>(null);
    const [emailTags, setEmailTags] = useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
    const [newAttendee, setNewAttendee] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMeetings();
    }, []);

    const fetchMeetings = async () => {
        const now = new Date();
        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(now.getDate() + 30);

        const res = await fetch(`/api/meeting/get?timeMin=${now.toISOString()}&timeMax=${thirtyDaysFromNow.toISOString()}`);
        const data = await res.json();
        console.log(data)
        setMeetings(data?.items?.map(event => ({
            ...event,
            start: event.start.dateTime ? parseISO(event.start.dateTime) : null,
            end: event.end.dateTime ? parseISO(event.end.dateTime) : null,
            title: event.summary,
            meetingLink:event.hangoutLink
        })));
    };

    const openDialog = (meeting) => {
        setSelectedMeeting(meeting);
        setMeetingName(meeting.summary);
        setMeetingSummary(meeting.description);
        setMeetingLink(meeting.meetingLink)
        setMeetingStartTime(meeting.start ? meeting.start : null);
        setMeetingEndTime(meeting.end ? meeting.end : null);
        setEmailTags(meeting.attendees.map(attendee => ({ id: attendee.email, text: attendee.email })));
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
        setSelectedMeeting(null);
    };

    const handleUpdateMeeting = async () => {
        setError(null);
        if (!meetingName || !meetingSummary || !meetingStartTime || !meetingEndTime) {
            setError('Please fill out all fields.');
            return;
        }

        if (emailTags.length === 0 || emailTags.some(tag => !isEmailValid(tag.text))) {
            setError('Please add at least one valid email.');
            return;
        }

        const res = await fetch('/api/meeting/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventId: selectedMeeting.id,
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
            alert('Google Meet event updated!');
            closeDialog();
            fetchMeetings();
        }
    };

    const handleTimeslotClicked = (startTimeEventEmit) => {
        const startTime = new Date(startTimeEventEmit.startTime);
        setMeetingStartTime(startTime);
        setMeetingEndTime(new Date(startTime.getTime() + 30 * 60000)); // Assuming a 30-minute duration
    };

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const addAttendee = () => {
        if (newAttendee && isEmailValid(newAttendee)) {
            setEmailTags([...emailTags, { id: newAttendee, text: newAttendee }]);
            setNewAttendee('');
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
        return {
            id,
            startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
            endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
        };
    });

    return (
        <div className="p-4 bg-black shadow-md rounded-md">
            <Calendar
                localizer={localizer}
                events={meetings}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                onSelectEvent={openDialog}
                resizable
                views={['month', 'week', 'day', 'agenda']}
                defaultView="month"
                step={60}
                showMultiDayTimes
                components={{
                    event: ({ event }) => (
                        <span>
                            <strong>{event.title}</strong>
                            <p>{event.description}</p>
                        </span>
                    ),
                }}
            />

            <Dialog open={isOpen} onClose={closeDialog} className="relative z-10">
                <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-neutral-900 p-6 rounded-md shadow-lg  flex flex-col  w-full max-w-2xl">
                        <Dialog.Title className="text-2xl mb-4 text-white">Update Meeting</Dialog.Title>
                        <div className="w-full flex items-center gap-4">
                            <div className="w-full">
                                <Label htmlFor="Name">Name</Label>
                                <Input
                                    type="Name"
                                    placeholder="Meeting Name"
                                    value={meetingName}
                                    onChange={(e) => setMeetingName(e.target.value)}
                                    className="w-full p-2 mb-4  rounded-md bg-black text-white"
                                />
                            </div>
                            <div className="w-full">

                            <Label htmlFor="summary">Description</Label>
                            <Input
                                type="summary"
                                placeholder="Description"
                                value={meetingSummary}
                                onChange={(e) => setMeetingSummary(e.target.value)}
                                className="w-full p-2 mb-4 rounded-md bg-black text-white"
                            />
                            </div>
                        </div>
                        <ScheduleMeeting
                            borderRadius={10}
                            primaryColor="white"
                            startTimeListStyle={"scroll-list"}
                            backgroundColor="#262626"
                            eventDurationInMinutes={30}
                            availableTimeslots={availableTimeslots}
                            onStartTimeSelect={handleTimeslotClicked}
                            scheduleMeetingStyles={{height: "30%"}}
                        />
                        <Label htmlFor="text mt-2">Attendies</Label>
                        <TagInput
                            tags={emailTags}
                            setTags={(newTags) => {
                                const validTags = newTags.filter(tag => isEmailValid(tag.text));
                                setEmailTags(validTags);
                            }}
                            placeholder="Add an email and press Enter"
                            styleClasses={{input: 'w-full sm:max-w-[350px]'}}
                            activeTagIndex={activeTagIndex}
                            setActiveTagIndex={setActiveTagIndex}
                        />
                        <div className="w-full mt-4 mb-2">
                            <Label htmlFor="text mt-2">Copy the Meeting Link</Label>
                            <div className="flex items-center space-x-2">
                                <Input type="text" id="text" value={meetingLink} disabled={true} placeholder="Enter text to copy" />
                                <Button
                                    type="button"
                                    onClick={() => {
                                        const inputValue = document.getElementById("text").value
                                        navigator.clipboard.writeText(inputValue)
                                    }}
                                >
                                    <CopyIcon className="h-4 w-4" />
                                    <span className="sr-only mb-2">Copy the Meeting</span>
                                </Button>
                            </div>
                        </div>

                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        <div className="w-full flex gap-4">
                            <button
                                onClick={handleUpdateMeeting}
                                className="mt-4 px-4 w-full py-2 bg-blue-500 text-white rounded-md"
                            >
                                Update Meeting
                            </button>
                            <Link
                                href={meetingLink}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="mt-4 w-full flex justify-center px-4 py-2 bg-green-500 text-white rounded-md"
                            >
                                Join Meeting
                            </Link>
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
