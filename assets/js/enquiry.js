const form = document.querySelector('form'); // Change if there are more than 1 forms on the page
const notice = document.querySelector('[data-form-notice]');

function submitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  event.target.querySelector('button').disabled = true;
  event.target.querySelector('button').textContent = 'Submitting...';
  const { name, business, email, phone, message } = data;
  const browserTime = new Date().toLocaleString();
  const composedMessage = `Received an enquiry from ${name} (${business}).\n\nMessage: ${message}\n\nContact details:\nEmail: ${email}\nPhone: ${phone}`;
  emailjs.send('service_qqc8t56', 'template_ffzgt6a', {
    subject: `New enquiry from ${name} (${business})`,
    name,
    time: browserTime,
    message: composedMessage,
    email_to: email,
  }).then(() => {
    console.log('Email sent successfully');
    notice.textContent = 'Thank you for your enquiry! We will get back to you within 2 business days.';
    form.reset();
  }).catch((err) => {
    console.error('Failed to send email:', err);
    notice.textContent = 'Failed to submit enquiry. Please try again later or contact us directly at vendaroo.store@gmail.com';
  }).finally(() => {
    event.target.querySelector('button').disabled = false;
    event.target.querySelector('button').textContent = 'Submit Enquiry';
  });
}

try {
  emailjs.init({
    publicKey: 'dJ15muhfnP4Zm6Myo',
    // Do not allow headless browsers
    blockHeadless: true,
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  })
  console.log('EmailJS initialized');
  form.addEventListener('submit', submitHandler);
  form.style.display = 'grid';
  notice.textContent = '';
} catch (err) {
  console.error('Failed to initialize EmailJS:', err);
  notice.textContent = 'Failed to initialize email service. Please reload the page. If the problem persists, contact us directly at vendaroo.store@gmail.com';
}

