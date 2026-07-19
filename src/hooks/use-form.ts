'use client';

import { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJSConfig } from '@/components/sections/contacts/contact-form/emailjs.config';
import type { FormStatus } from '@/components/sections/contacts/contact-form/form-status.config';
import type { SyntheticEvent } from 'react';

type UseFormReturn = {
  formRef: React.RefObject<HTMLFormElement | null>;
  isLoading: boolean;
  status: FormStatus;
  isModalOpen: boolean;
  handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
  closeModal: () => void;
};

export function useForm(): UseFormReturn {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }

    setIsLoading(true);
    setStatus('sending');

    const config = getEmailJSConfig();

    if (!config.SERVICE_ID || !config.TEMPLATE_ID || !config.PUBLIC_KEY) {
      console.error('EmailJS config is empty');
      return;
    }

    emailjs
      .sendForm(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        formRef.current,
        config.PUBLIC_KEY,
      )
      .then(() => {
        setStatus('success');
        setIsModalOpen(true);
        formRef.current?.reset();
      })
      .catch((error: unknown): void => {
        setStatus('error');
        setIsModalOpen(true);
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const closeModal = useCallback((): void => {
    setIsModalOpen(false);
    setStatus('idle');
  }, []);

  return {
    formRef,
    isLoading,
    status,
    isModalOpen,
    handleSubmit,
    closeModal,
  };
}
