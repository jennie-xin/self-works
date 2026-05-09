import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export interface EmailParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name?: string;
}

let isInitialized = false;

const init = () => {
  if (!isInitialized) {
    emailjs.init(PUBLIC_KEY);
    isInitialized = true;
  }
};

export const sendContactEmail = async (params: EmailParams): Promise<void> => {
  init();

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: params.from_name,
      from_email: params.from_email,
      message: params.message,
      to_name: params.to_name || '博主',
      reply_to: params.from_email,
    },
    PUBLIC_KEY
  );
};
