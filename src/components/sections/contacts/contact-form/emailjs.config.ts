export type EmailJSConfig = {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
};

export function getEmailJSConfig(): EmailJSConfig {
  return {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
  };
}
