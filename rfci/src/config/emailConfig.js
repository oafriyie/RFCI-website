import emailjs from '@emailjs/browser';

// Configuration for EmailJS. Update the service/template IDs and recipient email to
// match the ones you set up on the EmailJS dashboard. Use your domain email as the
// recipient so all messages arrive at info@rfcigh.com.
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_rfci',
  CONTACT_TEMPLATE_ID: 'template_rfci_contact',
  VOLUNTEER_TEMPLATE_ID: 'template_rfci_volunteer',
  DONATION_TEMPLATE_ID: 'template_rfci_donation',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  // The address that should receive all form submissions and notifications
  RECIPIENT_EMAIL: 'info@rfcigh.com',
};

// initialize emailjs once
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
