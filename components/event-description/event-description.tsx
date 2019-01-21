import './event-description.scss';

const EventDescription = () => (
  <div className="event-description">
    <h2>What is UNIHACK?</h2>
    <p>
      We are Australia’s largest student hackathon.
      We bring together a diverse range of students to collaborate and bring innovative ideas to life
      - fostering the next generation of developers, thinkers, and entrepreneurs.
    </p>
    <p>
      In a team of 4-6, build your idea (an app, website, device or anything really!), pitch it, and win prizes.
      We will provide you with the mentors, workshops, and plenty of food and drinks to keep you going!
    </p>
    <div className="values">
      <div className="value">
        <img src="/static/images/lightbulb.png" alt="A drawing of a lightbulb."/>
        <h4>Imagination</h4>
        <p>
          We believe students are the ones who imagine the future without limitations.
        </p>
        <b>#creativity</b>
      </div>
      <div className="value">
        <img src="/static/images/handshake.png" alt="A drawing of a handshake."/>
        <h4>Collaboration</h4>
        <p>
          We create a supportive community that promotes diversity and inclusion.
        </p>
        <b>#community</b>
      </div>
      <div className="value">
        <img src="/static/images/laptop.png" alt="A drawing of a laptop."/>
        <h4>Build</h4>
        <p>
          We embrace technology to build amazing ideas through software and hardware.
        </p>
        <b>#technology</b>
      </div>
    </div>
  </div>
);

export default EventDescription;
