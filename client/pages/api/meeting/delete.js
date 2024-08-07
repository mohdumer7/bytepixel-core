import { google } from 'googleapis';
import { getSession } from 'next-auth/react';

export default async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { accessToken } = session;
    const { eventId } = req.body;

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken});

    const calendar = google.calendar({ version: 'v3', auth });

    try {
        await calendar.events.delete({
            calendarId: 'primary',
            eventId: eventId,
        });

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
