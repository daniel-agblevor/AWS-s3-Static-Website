document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  const res = await fetch('https://your-backend-domain.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  });

  if (res.ok) {
    alert('Thank you for reaching out!');
    e.target.reset();
  } else {
    alert('Something went wrong. Please try again.');
  }
});
