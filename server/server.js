require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Email configuration error:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});

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

    // Email to the business (notification)
    const notificationMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFY_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    // Confirmation email to the sender
    const confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting MM Digital Garage!',
        html: `
            <h2>Thank you for reaching out, ${name}!</h2>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <hr>
            <p><strong>Your message:</strong></p>
            <p>${message}</p>
            <hr>
            <p>Best regards,<br>MM Digital Garage Team</p>
        `
    };

    try {
        // Send notification email
        await transporter.sendMail(notificationMailOptions);

        // Send confirmation email to sender
        await transporter.sendMail(confirmationMailOptions);

        res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully!'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
