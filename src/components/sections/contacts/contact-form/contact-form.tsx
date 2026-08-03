'use client';

import classNames from 'classnames/bind';
import { Modal } from '@/components/modal/modal';
import { MODAL_MESSAGES } from '@/components/modal/modal-messages.config';
import { useForm } from '@/hooks/use-form';
import { Button } from '@/components/button/button';
import styles from './contact-form.module.css';

const cx = classNames.bind(styles);

const FORM_FIELDS = [
  { id: 'name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
  { id: 'email', type: 'email', placeholder: 'Email', autoComplete: 'email' },
] as const;

export function ContactForm() {
  const {
    formRef,
    isLoading,
    status,
    isModalOpen,
    validationMessage,
    handleSubmit,
    closeModal,
  } = useForm();

  const getModalData = () => {
    if (status === 'success') {
      return MODAL_MESSAGES.success;
    }
    if (status === 'error' || validationMessage) {
      return {
        ...MODAL_MESSAGES.error,
        message: validationMessage || MODAL_MESSAGES.error.message,
      };
    }
    return null;
  };

  return (
    <>
      <form
        ref={formRef}
        id="contact-form"
        className={cx('contact-form')}
        onSubmit={handleSubmit}
        noValidate
      >
        {FORM_FIELDS.map(({ id, type, placeholder, autoComplete }) => (
          <div key={id} className={cx('form-item')}>
            <label htmlFor={id} className={cx('form-label')}>
              {id.charAt(0).toUpperCase() + id.slice(1)}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id={id}
              type={type}
              name={id}
              placeholder={placeholder}
              required
              aria-required="true"
              autoComplete={autoComplete}
              className={cx('input')}
            />
          </div>
        ))}
        <div className={cx('form-item')}>
          <label htmlFor="message" className={cx('form-label')}>
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Message..."
            required
            aria-required="true"
            className={cx('textarea')}
          />
        </div>
        <Button type="submit" variant="primary" disabled={isLoading}>
          <span className={cx('button-icon')} aria-hidden="true" />
          {isLoading ? 'Sending...' : 'Send message'}
        </Button>
      </form>

      <Modal isOpen={isModalOpen} data={getModalData()} onClose={closeModal} />
    </>
  );
}
