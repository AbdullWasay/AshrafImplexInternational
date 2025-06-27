# Inquiry Form Setup Instructions

## Overview
The inquiry form has been successfully added to your website and is configured to send emails to `abdul.wasay308@gmail.com`. To make it functional, you need to set up a form handling service.

## Option 1: Formspree (Recommended - Free & Easy)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create a New Form
1. Click "New Form" in your dashboard
2. Enter form name: "Ashraf Implex Inquiry Form"
3. Set the email to: `abdul.wasay308@gmail.com`
4. Copy the form endpoint URL (it will look like: `https://formspree.io/f/xabc1234`)

### Step 3: Update Your Website
1. Open `index.html`
2. Find line 904 with: `action="https://formspree.io/f/YOUR_FORM_ID"`
3. Replace `YOUR_FORM_ID` with your actual form ID from step 2
4. Save the file

### Step 4: Test the Form
1. Open your website
2. Fill out the inquiry form
3. Submit it
4. Check the email `abdul.wasay308@gmail.com` for the message

## Option 2: Alternative Email Services

### EmailJS
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Create account and set up email service
3. Update the JavaScript in `script.js` to use EmailJS API

### Netlify Forms (if hosting on Netlify)
1. Add `netlify` attribute to the form tag
2. Deploy to Netlify
3. Forms will automatically work

## Form Features

### Current Form Fields:
- **Full Name** (required)
- **Email Address** (required)
- **Company Name** (optional)
- **Phone Number** (optional)
- **Country** (optional)
- **Product Interest** (dropdown with options)
- **Message** (required)

### Form Functionality:
- ✅ Real-time validation
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Responsive design
- ✅ Professional styling
- ✅ Thank you page redirect
- ✅ Email notifications to abdul.wasay308@gmail.com

### Email Template:
When someone submits the form, you'll receive an email with:
- Subject: "New Inquiry from Ashraf Impex Website"
- All form field data organized clearly
- Sender's contact information

## Customization Options

### To Change Email Address:
1. Update line 1040 in `index.html`: `value="abdul.wasay308@gmail.com"`
2. Update your Formspree form settings

### To Add More Fields:
1. Add new form fields in the HTML
2. Add corresponding CSS styles if needed
3. The form will automatically include new fields in emails

### To Modify Styling:
- Edit the `.inquiry-form` styles in `styles.css`
- Customize colors, spacing, and layout as needed

## Troubleshooting

### Form Not Sending Emails:
1. Check that you've updated the form action URL
2. Verify Formspree account is set up correctly
3. Check spam folder for emails
4. Test with a different email address

### Styling Issues:
1. Clear browser cache
2. Check CSS file is loading properly
3. Verify responsive design on different devices

### JavaScript Errors:
1. Check browser console for errors
2. Ensure `script.js` is loading properly
3. Test form submission functionality

## Security Notes
- Form includes CSRF protection via Formspree
- Email validation prevents invalid submissions
- No sensitive data is stored on your website
- All form processing happens securely through Formspree

## Support
If you need help with setup:
1. Check Formspree documentation: [https://help.formspree.io](https://help.formspree.io)
2. Test the form thoroughly before going live
3. Monitor email delivery for the first few submissions

The form is now ready to use once you complete the Formspree setup!
