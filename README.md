# The Sign Tune - Caller Tune Website

A production-ready customized caller tune website with SMTP email notifications and PDF generation, built with Next.js, Tailwind CSS, and modern web technologies.

## Features

- **SMTP Email Integration**: Server-side email notifications with PDF attachments
- **PDF Generation**: Automatic PDF creation with submission details
- **Audio Playback**: Custom audio player with waveform animation
- **Test Mode**: All submissions show ₹0 paid amount for testing
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Mobile Responsive**: Optimized for all screen sizes
- **Premium Design**: Dark blue & grey theme with smooth animations

## Pages

1. **Home** - Hero section, featured audio samples, custom tune request form
2. **New Collections** - 7 caller tune samples with audio players
3. **How It Works** - Step-by-step service explanation
4. **Packages** - Four pricing tiers with detailed features
5. **Book Your Tune** - Order form with package selection
6. **About** - Brand story, vision, and mission
7. **Contact** - Contact form with email notification
8. **Privacy Policy** - Data protection information
9. **Terms & Conditions** - Service terms

## Tech Stack

- Next.js 16 (App Router with Server Actions)
- React 19
- Tailwind CSS v4
- TypeScript
- Nodemailer (SMTP email)
- jsPDF (PDF generation)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure SMTP Email Service

Add the following environment variables in the **Vars** section (v0) or create a `.env.local` file:

```bash
# SMTP Configuration (Required)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

#### Gmail SMTP Setup:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password
4. Use these credentials:
   - `SMTP_HOST`: smtp.gmail.com
   - `SMTP_PORT`: 587
   - `SMTP_USER`: your-email@gmail.com
   - `SMTP_PASS`: your-16-character-app-password

#### Other SMTP Providers:

**SendGrid:**
- Host: smtp.sendgrid.net
- Port: 587
- User: apikey
- Pass: Your SendGrid API key

**Mailgun:**
- Host: smtp.mailgun.org
- Port: 587
- User: Your Mailgun username
- Pass: Your Mailgun password

**AWS SES:**
- Host: email-smtp.us-east-1.amazonaws.com
- Port: 587
- User: Your SMTP username
- Pass: Your SMTP password

### 3. Add Audio Files

Place your audio files in the `public/audio` directory:

- `professional-greeting.mp3`
- `calm-composed.mp3`
- `energetic-vibe.mp3`
- `spiritual-harmony.mp3`
- `corporate-excellence.mp3`
- `festive-celebration.mp3`
- `modern-minimalist.mp3`

**Audio Requirements:**
- Maximum 25 seconds duration
- No copyrighted music
- MP3 format (192kbps or higher recommended)

### 4. Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site.

### 5. Test Email Functionality

1. Fill out any form on the website
2. Submit the form
3. Check the admin email (dev.signtune@gmail.com)
4. Verify you received:
   - Professional HTML email
   - PDF attachment with submission details
   - "₹0 (Test Mode)" clearly displayed

### 6. Build for Production

```bash
npm run build
npm start
```

The build creates an optimized production version with:
- Server Actions enabled
- SMTP email functionality
- PDF generation
- Static assets optimization

### 7. Deployment

#### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
4. Deploy automatically

#### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`

#### Node.js Hosting (GoDaddy/Hostinger)

1. Ensure your hosting supports Node.js 18+
2. Upload project files via FTP or Git
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Add environment variables in hosting control panel
6. Start the server: `npm start`
7. Configure to run on port 3000 or your preferred port

**Note:** This project requires Node.js hosting with Server Actions support. Basic static hosting will not work.

## Project Structure

```
├── app/
│   ├── page.tsx                    # Home page
│   ├── new-collections/            # Collections page
│   ├── how-it-works/               # How it works page
│   ├── packages/                   # Packages page
│   ├── book-your-tune/             # Order form page
│   ├── about/                      # About page
│   ├── contact/                    # Contact page
│   ├── privacy-policy/             # Privacy policy
│   ├── terms/                      # Terms & conditions
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles & theme
├── components/
│   ├── header.tsx                  # Site header
│   ├── footer.tsx                  # Site footer
│   ├── audio-player.tsx            # Custom audio player
│   ├── floating-contact.tsx        # Floating contact buttons
│   └── home/                       # Home page components
├── lib/
│   ├── email-smtp.ts               # SMTP email service
│   └── pdf-generator.ts            # PDF generation utility
├── public/
│   └── audio/                      # Audio files directory
└── next.config.mjs                 # Next.js configuration
```

## Email Features

### What Happens on Form Submission:

1. User fills out and submits a form
2. Form data is validated
3. PDF is generated with:
   - SignTune branding
   - Submission date/time
   - All customer details
   - "Paid Amount: ₹0 (Test Mode)" badge
   - Professional formatting
4. Email is sent to admin with:
   - Professional HTML layout
   - All submission details
   - PDF attachment
   - Clear test mode indication
5. User sees success message

### Admin Receives:

- **Email To:** dev.signtune@gmail.com
- **Subject:** Form type + "₹0 (Test Mode)"
- **Body:** Professional HTML email with all details
- **Attachment:** PDF document with formatted submission data

## Customization

### Change Admin Email

Update the `to` parameter in all form submissions:

```tsx
await sendEmailWithPDF({
  to: "your-new-email@domain.com",
})
```

Files to update:
- `components/home/custom-tune-form.tsx`
- `app/book-your-tune/page.tsx`
- `app/contact/page.tsx`

### Update Theme Colors

Edit `app/globals.css`:

```css
:root {
  --background: #0b1220;      /* Deep navy blue */
  --primary: #3b82f6;         /* Modern blue accent */
  --accent: #06b6d4;          /* Cyan accent */
  /* ... other colors */
}
```

### Modify Package Pricing

Edit `app/packages/page.tsx` to update pricing tiers.

### Switch to Production Mode

When ready for live payments:

1. Remove "Test Mode" references in `lib/email-smtp.ts` and `lib/pdf-generator.ts`
2. Integrate payment gateway (Stripe, Razorpay, etc.)
3. Update PDF to show actual paid amount
4. Add order confirmation emails to customers

## Environment Variables

```bash
# SMTP Configuration (Required)
SMTP_HOST=smtp.gmail.com           # Your SMTP host
SMTP_PORT=587                       # SMTP port (587 for TLS, 465 for SSL)
SMTP_USER=your-email@gmail.com     # Your email address
SMTP_PASS=your-app-password        # Your SMTP password/app password
```

## Testing Checklist

- [ ] All forms submit successfully
- [ ] Admin receives email for each submission
- [ ] PDF attachment is included and readable
- [ ] "₹0 (Test Mode)" is clearly visible
- [ ] Success messages display correctly
- [ ] Audio players work on all devices
- [ ] Mobile responsive on various screen sizes
- [ ] All navigation links work
- [ ] Email contains all form field data

## Future Enhancements

Ready for future implementation:

1. **Payment Integration**: Replace ₹0 with actual payment gateway
2. **Database Storage**: Add Supabase/PostgreSQL for order tracking
3. **Customer Portal**: Allow users to track their orders
4. **Admin Dashboard**: Manage orders and submissions
5. **Multiple Recipients**: Send emails to multiple team members
6. **Email Templates**: Customizable email designs
7. **SMS Notifications**: Add WhatsApp/SMS alerts

## Performance Features

- Server-side email processing
- Optimized PDF generation
- Minimal JavaScript bundle
- CSS-only animations
- Fast page loads

## Security

- SMTP credentials stored securely as environment variables
- Server-side email processing (no client exposure)
- Input validation and sanitization
- No credentials in client-side code
- PDF generation on server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Hosting Requirements

This project requires:
- Node.js 18+ runtime
- Server Actions support
- Environment variable configuration
- SMTP access (port 587 or 465)

**Works on:** Vercel, Netlify, Railway, Render, DigitalOcean, AWS, Node.js hosting

**Does NOT work on:** Pure static hosting (GitHub Pages, basic shared hosting without Node.js)

## Support

For questions or issues, contact: dev.signtune@gmail.com

## License

Private project for The Sign Tune / SignTune brand.
