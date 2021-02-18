import styles from './sponsor-info.module.scss';
import { H3, H2, Text } from '@components/typography/typography'
import Icon from '@components/icon/icon'
import Button from '@components/button/button'
import ButtonLink from '@components/button/button-link'


const SponsorInfo = () => (
  <section className={styles['sponsor-info']}>
    <div
      className={styles['sponsor-info-content']}
      style={{ background: 'url(/images/sponsor-hero.jpg)', backgroundSize: 'cover' }}
    >
      <div className={styles['sponsor-info-content-left']}>
        <H2>What is UNIHACK?</H2>
        <Text>
          UNIHACK 2021 is a 48-hour hackathon with the mission to provide a
          creative space for engineering, design and product students to build
          innovative projects that are ready to go to market. Come join us in the
          Imagination Revolution.
      </Text>
        <Text bold>
          Come join us in the Imagination Revolution!
        </Text>
        <div className={`${styles.details} ${styles['icon-section']}`}><Icon icon="Calendar" /> <H3 >5-7 March, 2021</H3></div>
        <div className={`${styles.details} ${styles['icon-section']}`}><Icon icon="Location" /> <H3 >Online</H3></div>
        <Button type='primary' active theme='light' children={<Text>HI</Text>} />
        <ButtonLink type='secondary' active theme='light' children={<Text>HI</Text>} href='/privacy'></ButtonLink>
      </div>
      <div className={styles['sponsor-info-content-right']}>

      </div>
    </div>
  </section>
);

export default SponsorInfo;
