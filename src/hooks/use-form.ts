'use client';

import { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJSConfig } from '@/components/sections/contacts/contact-form/emailjs.config';
import type { FormStatus } from '@/components/sections/contacts/contact-form/form-status.config';
import type { SyntheticEvent, RefObject } from 'react';
import { validateForm } from '@/utils/validate-form';

type UseFormReturn = {
  formRef: RefObject<HTMLFormElement | null>;
  isLoading: boolean;
  status: FormStatus;
  isModalOpen: boolean;
  validationMessage: string;
  handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
  closeModal: () => void;
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

    const config = getEmailJSConfig();

    if (!config.SERVICE_ID || !config.TEMPLATE_ID || !config.PUBLIC_KEY) {
      console.error('EmailJS config is empty');
      setIsLoading(false);
      setStatus('error');
      setValidationMessage('Service configuration error');
      setIsModalOpen(true);
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
        setValidationMessage('');
        formRef.current?.reset();
      })
      .catch((error: unknown): void => {
        setStatus('error');
        setIsModalOpen(true);
        setValidationMessage('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
