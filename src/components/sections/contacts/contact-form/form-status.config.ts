export const FORM_STATUS = {
  idle: {
    text: '',
    className: '',
  },
  sending: {
    text: 'Sending...',
    className: 'form-status--sending',
  },
  success: {
    text: '✓ Message sent successfully!',
    className: 'form-status--success',
  },
  error: {
    text: '✗ Failed to send message',
    className: 'form-status--error',
  },
} as const;

export type FormStatus = keyof typeof FORM_STATUS;
