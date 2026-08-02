export function validateForm(form: HTMLFormElement): string | null {
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (typeof name !== 'string' || !name.trim()) {
    return 'Name is required';
  }

  if (typeof email !== 'string' || !email.trim()) {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email';
  }

  if (typeof message !== 'string' || !message.trim()) {
    return 'Message is required';
  }

  return null;
}
