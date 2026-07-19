'use client';

import classNames from 'classnames/bind';
import { contactsConfig } from './contacts.config';
import { ContactItem } from './contact-item/contact-item';
import { ContactForm } from './contact-form/contact-form';
import { useSectionReveal } from '@/hooks/use-section-reveal';
import { Heading } from '@/components/heading/heading';

import styles from './contacts.module.css';

const cx = classNames.bind(styles);

export function Contacts() {
  const [ref, isRevealed] = useSectionReveal();

  return (
    <section
      id="contacts"
      ref={ref}
      className={cx('contacts', 'section', styles.section, {
        show: isRevealed,
      })}
      aria-labelledby="contacts-title"
    >
      <div className={cx('global-container', styles.container)}>
        <Heading as="h2" id="contacts-title">
          {contactsConfig.title}
        </Heading>
        <div className={cx('contacts-container')}>
          <div className={cx('info')}>
            <p>{contactsConfig.description}</p>
            <div className={cx('items')}>
              {contactsConfig.items.map((contact) => (
                <ContactItem key={contact.type} contact={contact} />
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
