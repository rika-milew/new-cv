'use client';

import { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJSConfig } from '@/components/sections/contacts/contact-form/emailjs.config';
import type { FormStatus } from '@/components/sections/contacts/contact-form/form-status.config';
import type { SyntheticEvent, RefObject } from 'react';
import { validateForm } from '@/utils/validate-form';
import type { EmailJSConfig } from '@/components/sections/contacts/contact-form/emailjs.config';

type UseFormReturn = {
  formRef: RefObject<HTMLFormElement | null>;
  isLoading: boolean;
  status: FormStatus;
  isModalOpen: boolean;
  validationMessage: string;
  handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
  closeModal: () => void;
};

const createEmailConfig = (): EmailJSConfig => {
  const config = getEmailJSConfig();
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = config;
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS config is empty');
  }
  return { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY };
};

export function useForm(): UseFormReturn {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }

    const error = validateForm(formRef.current);
    if (error) {
      setValidationMessage(error);
      setIsModalOpen(true);
      return;
    }

    setIsLoading(true);
    setStatus('sending');

    try {
      const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = createEmailConfig();
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setStatus('success');
          setValidationMessage('');
          formRef.current?.reset();
        })
        .catch((error: unknown) => {
          setStatus('error');
          setValidationMessage('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        })
        .finally(() => {
          setIsLoading(false);
          setIsModalOpen(true);
        });
    } catch {
      setIsLoading(false);
      setStatus('error');
      setValidationMessage('Service configuration error');
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = useCallback((): void => {
    setIsModalOpen(false);
    setStatus('idle');
    setValidationMessage('');
  }, []);

  return {
    formRef,
    isLoading,
    status,
    isModalOpen,
    validationMessage,
    handleSubmit,
    closeModal,
  };
}
