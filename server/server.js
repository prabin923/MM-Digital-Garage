require('dotenv').config();
const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Function to send email via EmailJS REST API
const sendEmailJS = (data) => {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            accessToken: process.env.EMAILJS_PRIVATE_KEY,
            template_params: {
                from_name: data.name,
                from_email: data.email,
                company: data.company || 'Not provided',
                message: data.message
            }
        });

        const options = {
            hostname: 'api.emailjs.com',
            path: '/api/v1.0/email/send',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': payload.length
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(responseData);
                } else {
                    reject(new Error(`EmailJS Error: ${res.statusCode} - ${responseData}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(payload);
        req.end();
    });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, company, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Name, email, and message are required'
        });
    }

    try {
        console.log(`Sending email for ${name}...`);
        await sendEmailJS({ name, email, company, message });

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully via EmailJS!'
        });
    } catch (error) {
        console.error('Error sending email via EmailJS:', error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please ensure backend EmailJS credentials are correct.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running', service: 'EmailJS' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} with EmailJS integration`);
});
