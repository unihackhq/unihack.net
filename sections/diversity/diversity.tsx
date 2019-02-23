import './diversity.scss';
import ButtonLink from '../../components/button-link/button-link';

const Diversity = () => (
  <section className="diversity">
    <div className="diversity-content">
      <h2>Diversity Commitment</h2>
      <img src="/static/images/diversity-commitment.jpg"/>
      <p>
        The organisers of UNIHACK are committed in increasing the diversity of UNIHACK competitors.
        We will be collaborating with Women in ICT and Engineering groups across Australia to help promote the event.
        We will also collaborate with ICT and Engineering groups that represent LGBT students to ensure they are also
        represented at UNIHACK.
      </p>
      <p>
        We are also committed in producing a harassment-free experience for everyone,
        regardless of gender, age, sexual orientation, disability and religion.
        All persons involved in UNIHACK are required to comply with the terms set out in the Hack Code of Conduct this year
        — including attendees, sponsors, partners, volunteers and staff.
      </p>
      <ButtonLink href="http://hackcodeofconduct.org/unihack" type="secondary">Read the Hack Code of Conduct</ButtonLink>
    </div>
  </section>
);

export default Diversity;
