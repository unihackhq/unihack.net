import './faqs.scss';
import questions from '../../content/faqs.json';

const Faqs = () => (
  <section className="faqs">
    <div className="faqs-content">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs-questions-grid">
        {questions.map((question, index) => {
          const { title, answer, html = false } = question;
          return (
            <div key={`faqs-q${index}`}>
              <h3>{title}</h3>
              {html ? (
                <p dangerouslySetInnerHTML={{ __html: answer }}></p>
              ) : (
                <p>{answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Faqs;
