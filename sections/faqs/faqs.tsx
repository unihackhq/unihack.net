import './faqs.scss';
import questions from './faqs.yml';

const Faqs = () => (
  <section className="faqs">
    <div className="faqs-content">
      <h2>Frequently Asked Questions</h2>

      <div className="faqs-questions-grid">
        {questions.map(question => {
          const { title, answer, html = false } = question;
          // Explictly make mention that you are injecting dangerous HTML in
          // the YAML file

          return (
            <div>
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
