import styles from "./style.module.css";

export const SponsorWelcomeSection = () => {
	return (
		<section className={styles.section} id="welcome-section">
			<div>
				<p>
					We are Australia's largest hackathon for university students. Our
					competition attract 1000+ students from across Australia and New
					Zealand studying software engineering, computer science, and related
					disciplines.
				</p>
				<p>
					Teams have around 48 hours to design, build, and pitch a prototype of
					their idea. This can take the form of a website, a mobile app, a video
					game, or through hardware. The important thing is that it must work
					when presented.
				</p>
				<p>
					We pride ourselves in being an inclusive and welcoming space for all,
					regardless of skill level or academic level. Our event features a wide
					variety of students: from first-time participants to experienced
					programmers; those starting out in their first year to their
					penultimate year at university.
				</p>
			</div>
		</section>
	);
};
