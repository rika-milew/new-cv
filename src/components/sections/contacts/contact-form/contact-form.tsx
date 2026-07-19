'use client';

import classNames from 'classnames/bind';
import { Modal } from '@/components/modal/modal';
import { MODAL_MESSAGES } from '@/components/modal/modal-messages.config';
import { useForm } from '@/hooks/use-form';
import { Button } from '@/components/button/button';
import styles from './contact-form.module.css';

const cx = classNames.bind(styles);

export function ContactForm() {
  const { formRef, isLoading, status, isModalOpen, handleSubmit, closeModal } =
    useForm();

  const modalData =
    status === 'success' ? MODAL_MESSAGES.success : MODAL_MESSAGES.error;

  return (
    <>
      <form
        ref={formRef}
        id="contact-form"
        className={cx('contact-form')}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={cx('form-item')}>
          <label htmlFor="name" className={cx('form-label')}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
            aria-required="true"
            autoComplete="name"
            className={cx('input')}
          />
        </div>

        <div className={cx('form-item')}>
          <label htmlFor="email" className={cx('form-label')}>
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            aria-required="true"
            autoComplete="email"
            className={cx('input')}
          />
        </div>

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

      <Modal isOpen={isModalOpen} data={modalData} onClose={closeModal} />
    </>
  );
}
