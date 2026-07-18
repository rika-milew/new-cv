export const MODAL_MESSAGES = {
  success: {
    type: 'success' as const,
    title: '🎉 Message sent!',
    message: "Thanks for reaching out. I'll get back to you soon.",
  },
  error: {
    type: 'error' as const,
    title: '❌ Something went wrong',
    message: 'Please try again later or contact me directly via email.',
  },
} as const;

export type ModalMessageType = keyof typeof MODAL_MESSAGES;
