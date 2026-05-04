import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { start, end } = req.query;

    if (!start || !end) {
        return res.status(400).json({ message: 'Missing start or end date' });
    }

    try {
        // GoogleAuth looks for GOOGLE_APPLICATION_CREDENTIALS env var
        const auth = new google.auth.GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });

        const calendar = google.calendar({ version: 'v3', auth });

        const calendarId = process.env.CALENDAR_ID;
        if (!calendarId) {
            throw new Error('Missing CALENDAR_ID environment variable');
        }

        const response = await calendar.freebusy.query({
            resource: {
                timeMin: start,
                timeMax: end,
                timeZone: 'UTC',
                items: [{ id: calendarId }],
            },
        });

        const busySlots = response.data.calendars[calendarId].busy;
        res.status(200).json({ busy: busySlots });
    } catch (error) {
        console.error('Error fetching availability:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
