import styles from './contact-us.module.scss';
import Stack from '@components/stack/stack';
import { Text } from '@components/typography/typography';
import { FormEvent, useState } from 'react';
import Button from '../../components/button/button';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState({
    message: '',
    type: ''
  });

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      process.env.REACT_APP_VERCEL_URL + `/api/submit-form`,
      {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, purpose, message })
      }
    );
    // Success if status code is 201
    if (res.status === 201) {
      setToast({
        message:
          'Your message has been sent. We will try and get back to you as soon as we can.',
        type: 'success'
      });
    } else {
      setToast({
        message:
          'Something went wrong when submitting your form. Please email: team@unihack.net',
        type: 'error'
      });
    }
  };

  return (
    <section className={styles['contact-us']}>
      <div className={styles['contact-us-select']}>
        <label htmlFor="How can we help you?">How can we help you?</label>
        <select
          name="purpose"
          id="purpose"
          value={purpose}
          onChange={e => setPurpose(e.target.value)}
          autoFocus
        >
          <option value="">Select your option</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Sponsorship">Sponsorship</option>
          <option value="Marketing and Press">Marketing and Press</option>
          <option value="Code of Conduct / Rules Violation">
            Code of Conduct / Rules Violation
          </option>
          <option value="Report a Bug">Report a Bug</option>
        </select>
      </div>
      {toast.message && (
        <div className={styles['contact-us-toast']}>
          <div className={styles[`${toast.type}`]}>{toast.message}</div>
        </div>
      )}
      {purpose && (
        <div className={styles['contact-us-content']}>
          <Stack size="medium" className={styles.form_card}>
            <Text bold>
              Please fill in this quick form and we will get back to you as soon
              as possible.
            </Text>
            <Text bold>{process.env.REACT_APP_VERCEL_URL}</Text>
            <form className={styles.form} onSubmit={submitForm}>
              <Stack size="small">
                <div className={styles.row}>
                  <div className={styles.inputs}>
                    <label htmlFor="name">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="First Name..."
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.inputs}>
                    <label htmlFor="name">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Last Name..."
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div>
                  <Button type="primary" theme="light">
                    Send Message
                  </Button>
                </div>
              </Stack>
            </form>
          </Stack>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
