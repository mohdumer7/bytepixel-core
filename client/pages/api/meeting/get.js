// pages/api/meeting/get.ts
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
    const { timeMin, timeMax } = req.query;

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken  });

    const calendar = google.calendar({ version: 'v3', auth });

    try {
        const response = await calendar.events.list({
            calendarId: 'primary',
            timeMin: timeMin ,
            timeMax: timeMax ,
            singleEvents: true,
            orderBy: 'startTime',
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
