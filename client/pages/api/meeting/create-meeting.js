// pages/api/create-meet.js
import { google } from 'googleapis';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { getToken } from 'next-auth/jwt'
export default async (req, res) => {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { accessToken } = session;
    const { summary, description, startDateTime, endDateTime, timeZone, attendees } = req.body;

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken});

    const calendar = google.calendar({ version: 'v3', auth });

    const event = {
        summary: summary || 'Google Meet Event',
        description: description || 'A Google Meet event created using the Google Calendar API',
        start: {
            dateTime: startDateTime || '2024-08-05T09:00:00-07:00',
            timeZone: timeZone || 'America/Los_Angeles',
        },
        end: {
            dateTime: endDateTime || '2024-08-05T10:00:00-07:00',
            timeZone: timeZone || 'America/Los_Angeles',
        },
        attendees: attendees || [],
        conferenceData: {
            createRequest: {
                requestId: 'sample123',
                conferenceSolutionKey: {
                    type: 'hangoutsMeet',
                },
            },
        },
    };

    try {
        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1,
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

