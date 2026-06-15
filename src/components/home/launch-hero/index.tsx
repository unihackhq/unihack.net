import styles from "./styles.module.css";

export const LaunchHero = () => {
	return (
		<section className={styles.hero}>
			<video src="/video/mosaic.webm" autoPlay loop muted />
			<div className={styles.container}>
				<div className={styles.contentBox}>
					<h2>
						The Imagination Hackathon returns on <span>March 12-14, 2027</span>
					</h2>
				</div>
			</div>
		</section>
	);
};
