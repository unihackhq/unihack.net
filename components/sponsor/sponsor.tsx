import './sponsor.scss';
import Link from 'next/link';
import Button from '../button/button';

const Sponsor = () => (
  <section className="sponsor">
    <div className="sponsor-content">
      <h3>Sponsor</h3>
      <p>
        When you sponsor UNIHACK, you can:
      </p>
      <ul>
        <li>Put your company at the forefront during Grad Application period.</li>
        <li>Scale your reach with Australia’s <span>largest tech student hackathon.</span></li>
        <li>Get access to
          <span> 180+ bright and self-starting students </span>
          who will be working to solve real-world problems.
        </li>
        <li>Witness students' technical and business prowess and channel them into your recruitment pipeline.</li>
      </ul>
      <div className="actions">
        <Link href=""><Button type="primary">Enquire now</Button></Link>
        <Link href="/sponsorship"><Button type="primary">More info</Button></Link>
      </div>
    </div>
  </section>
);

export default Sponsor;
