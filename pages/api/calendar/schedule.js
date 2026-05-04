import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { startTime, endTime, summary, description, attendeeEmail, attendeeName } = req.body;

    if (!startTime || !endTime || !attendeeEmail) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const auth = new google.auth.GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });

        const calendar = google.calendar({ version: 'v3', auth });
        const calendarId = process.env.CALENDAR_ID;

        if (!calendarId) {
            throw new Error('Missing CALENDAR_ID environment variable');
        }

        // Optional: Double check availability here to prevent race conditions
        // For now, proceeding with insertion.

        const event = {
            summary: summary || `Meeting with ${attendeeName || attendeeEmail}`,
            description: description || `Requested by ${attendeeName} (${attendeeEmail})`,
            start: {
                dateTime: startTime,
                timeZone: 'UTC', // Ensure time is handled correctly
            },
            end: {
                dateTime: endTime,
                timeZone: 'UTC',
            },
            attendees: [
                { email: attendeeEmail, displayName: attendeeName },
            ],
            // Create as tentative so the owner can accept/reject
            status: 'tentative',
            guestsCanModify: false,
        };

        const response = await calendar.events.insert({
            calendarId: calendarId,
            resource: event,
            sendUpdates: 'all', // Send email to attendees
        });

        res.status(200).json({ success: true, eventId: response.data.id });
    } catch (error) {
        console.error('Error scheduling meeting:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
