import styles from './faqs.module.scss';
import questions from '../../content/faqs.json';
import { H2, H3, Text } from '@components/typography/typography';
import Stack from '@components/stack/stack';

const Faqs = () => (
  <section className={styles.faqs}>
    <Stack className={styles['faqs-content']} size="large">
      <H2>Frequently Asked Questions</H2>
      <div className={styles['faqs-questions-grid']}>
        {questions.map((question, index) => {
          const { title, answer, html = false } = question;
          return (
            <Stack key={`faqs-q${index}`} size="small">
              <H3>{title}</H3>
              {html ? <Text html={answer} /> : <Text>{answer}</Text>}
            </Stack>
          );
        })}
      </div>
    </Stack>
  </section>
);

export default Faqs;
