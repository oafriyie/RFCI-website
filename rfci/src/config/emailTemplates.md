# Email Templates for EmailJS

Paste each template below into your EmailJS dashboard when creating the corresponding template.

---

## 1. Contact Form Template (template_rfci_contact)

**Email Subject:** `New Contact Form Submission: {{subject}}`

**Email Body (HTML):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message from {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            💬
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">Subject: {{subject}}</div>
          <p style="font-size: 16px; margin: 10px 0;">{{message}}</p>
          <div style="color: #888; font-size: 12px; margin-top: 10px;">
            <strong>Reply to:</strong> {{from_email}}
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
```

---

## 2. Volunteer Form Template (template_rfci_volunteer)

**Email Subject:** `New Volunteer Application: {{volunteer_type}}`

**Email Body (HTML):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A volunteer application from {{from_name}} has been received. Kindly review and respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: #d4edda;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            🤝
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">Volunteer Type: {{volunteer_type}}</div>
          <p style="font-size: 16px; margin: 10px 0;">{{message}}</p>
          <div style="color: #888; font-size: 12px; margin-top: 10px;">
            <strong>Contact:</strong> {{from_email}}
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
```

---

## 3. Donation Receipt Template (template_rfci_donation)

**Email Subject:** `Thank You for Your Donation to RFCI`

**Email Body (HTML):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div style="margin-bottom: 20px; color: #2c3e50;">
    <p>Thank you for your generous donation to the Rural Farmer Care Initiative (RFCI)!</p>
    <p>Your contribution will directly support seeds, medical supplies, and training for rural farmers.</p>
  </div>
  <div
    style="
      margin-top: 20px;
      padding: 15px;
      background-color: #f0f8f0;
      border-left: 4px solid #28a745;
      border-radius: 5px;
    "
  >
    <div style="color: #2c3e50; font-size: 16px; margin-bottom: 10px;">
      <strong>Donation Details</strong>
    </div>
    <table role="presentation" style="width: 100%;">
      <tr>
        <td style="padding: 8px 0; color: #555;">
          <strong>Payment Method:</strong>
        </td>
        <td style="padding: 8px 0; color: #2c3e50; text-align: right;">
          {{payment_method}}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #555;">
          <strong>Donor Email:</strong>
        </td>
        <td style="padding: 8px 0; color: #2c3e50; text-align: right;">
          {{donor_email}}
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 5px;">
    <p style="color: #856404; font-size: 13px; margin: 0;">
      <strong>Note:</strong> A receipt and further donation information has been sent to your email address. Please check your inbox and spam folder if you don't see it within a few minutes.
    </p>
  </div>
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
    <p style="margin: 5px 0;">Best regards,<br><strong>The RFCI Team</strong></p>
    <p style="margin: 5px 0;">Rural Farmer Care Initiative<br>info@rfcigh.com</p>
  </div>
</div>
```

---

## 4. Contact Form Confirmation (template_rfci_contact_confirmation)

**Sent to user confirming receipt of their message**

**Email Subject:** `We've Received Your Message`

**Email Body (HTML):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #16a34a; margin: 0;">Thank You, {{from_name}}!</h2>
  </div>
  
  <p style="margin: 15px 0;">We've received your message and appreciate you reaching out to RFCI.</p>
  
  <p style="margin: 15px 0;">Our team will review your inquiry and respond as soon as possible.</p>
  
  <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #16a34a;">
    <p style="margin: 0 0 10px 0; font-weight: bold;">Message Summary:</p>
    <p style="margin: 5px 0; color: #666;"><strong>Subject:</strong> {{subject}}</p>
    <p style="margin: 5px 0; color: #666;"><strong>Message:</strong> {{message}}</p>
  </div>

  <p style="margin: 20px 0; color: #888; font-size: 13px;">
    If you have any urgent matters, please call us at <strong>+23354 634 3126</strong> or visit our office at Julius Debrah Street, kwahu, Obomeng, Ghana.
  </p>

  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
    <p style="margin: 5px 0;">Best regards,<br><strong>The RFCI Team</strong></p>
    <p style="margin: 5px 0;">Rural Farmer Care Initiative<br>info@rfcigh.com</p>
  </div>
</div>
```

---

## 5. Volunteer Form Confirmation (template_rfci_volunteer_confirmation)

**Sent to user confirming receipt of their volunteer application**

**Email Subject:** `We've Received Your Volunteer Application`

**Email Body (HTML):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #16a34a; margin: 0;">Thank You for Your Interest, {{from_name}}!</h2>
  </div>
  
  <p style="margin: 15px 0;">We're excited to receive your volunteer application. Thank you for wanting to make a difference with RFCI!</p>
  
  <p style="margin: 15px 0;">Our team will carefully review your application and contact you within 3-5 business days.</p>
  
  <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #16a34a;">
    <p style="margin: 0 0 10px 0; font-weight: bold;">Application Details:</p>
    <p style="margin: 5px 0; color: #666;"><strong>Volunteer Type:</strong> {{volunteer_type}}</p>
    <p style="margin: 5px 0; color: #666;"><strong>Your Message:</strong> {{message}}</p>
  </div>

  <p style="margin: 20px 0; color: #888; font-size: 13px;">
    In the meantime, feel free to explore our programs and initiatives on our website, or contact us at <strong>+23354 634 3126</strong>.
  </p>

  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
    <p style="margin: 5px 0;">Best regards,<br><strong>The RFCI Team</strong></p>
    <p style="margin: 5px 0;">Rural Farmer Care Initiative<br>info@rfcigh.com</p>
  </div>
</div>
```

---

## Setup Instructions

1. Go to https://dashboard.emailjs.com/admin/templates
2. Create 5 new email templates total:
   - **template_rfci_contact** (sent to organization)
   - **template_rfci_contact_confirmation** (sent to user)
   - **template_rfci_volunteer** (sent to organization)
   - **template_rfci_volunteer_confirmation** (sent to user)
   - **template_rfci_donation** (sent to user)
3. For each template:
   - Copy the template name exactly as shown above
   - Set the email subject line
   - Copy the HTML body code
   - Configure the recipient based on context
4. Test each template before going live
