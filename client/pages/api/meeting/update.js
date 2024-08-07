// pages/api/meeting/update.ts
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
    const { eventId, summary, description, startDateTime, endDateTime, timeZone, attendees } = req.body;

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: 'v3', auth });

    const updates = {
        summary,
        description,
        start: {
            dateTime: startDateTime,
            timeZone,
        },
        end: {
            dateTime: endDateTime,
            timeZone,
        },
        attendees,
    };

    try {
        const response = await calendar.events.patch({
            calendarId: 'primary',
            eventId: eventId,
            requestBody: updates,
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
