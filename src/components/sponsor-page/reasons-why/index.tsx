import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullhorn,
  faCube,
  faHandshake,
  faPersonChalkboard,
  faThumbsUp,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import mentor from './sponsor-unihack-mentor.jpg'
import nextGen from './support-unihack-next-gen.jpg'
import brand from './sponsor-unihack-brand.jpg'
import product from './sponsor-unihack-product.png'
import direct from './sponsor-unihack-direct.png'
import talent from './sponsor-unihack-talent.png'

import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

export const cx = classNames.bind(styles);

export const SponsorReasonsWhy = () => {
    return (
              <section className={cx('section', 'why')}>
        <h2>Reasons to Sponsor...</h2>
        <div>
          <div className={cx('reason')}>
                        <div className={cx('image')}>
              <Image src={talent} alt="Students participating in UNIHACK" />
            </div>

            <div className={cx('content')}>
              <FontAwesomeIcon icon={faUserGroup} />
              <h3>Access Top Talent</h3>
            </div>
            <p>
              Gain access and recruit from a pool of 1000+ high-quality,
              AI-ready student developers from Australia's leading universities.
            </p>
          </div>
          <div className={cx('reason')}>
            <div className={cx('image')}>
              <Image src={mentor} alt="Someone mentoring students at UNIHACK 2026" />
            </div>
            <div className={cx('content')}>
              <FontAwesomeIcon icon={faHandshake} />
              <h3>Mentorship &amp; Impact</h3>
            </div>
            <p>
              Guide students through all sorts of challenges - technical and
              non-technical - by mentoring students during the weekend.
            </p>
          </div>
          <div className={cx('reason')}>
                        <div className={cx('image')}>
              <Image src={product} alt="Student using a VR headset" />
            </div>

            <div className={cx('content')}>
              <FontAwesomeIcon icon={faCube} />
              <h3>Product Integration</h3>
            </div>
            <p>
              See how students use your platform or tools in their projects. Introduce bounties and 
              prizes to reward their creativity and innovation.
            </p>
          </div>
          <div className={cx('reason')}>
                        <div className={cx('image')}>
              <Image src={direct} alt="Direct interaction with students at UNIHACK" />
            </div>

            <div className={cx('content')}>
              <FontAwesomeIcon icon={faPersonChalkboard} />
              <h3>Direct Interaction</h3>
            </div>
            <p>
              Demonstrate your company's expertise and share knowledge to
              students by running workshops or panels - done remotely or at your
              offices.
            </p>
          </div>
          <div className={cx('reason')}>
                        <div className={cx('image')}>
              <Image src={brand} alt="Logitech increasing brand visibility at UNIHACK 2025" />
            </div>

            <div className={cx('content')}>
              <FontAwesomeIcon icon={faBullhorn} />
              <h3>Increase Brand Visibility</h3>
            </div>
            <p>
              Increase your brand's visibility to students through social media
              channels, events, networking nights, and on-site activations.
            </p>
          </div>
          <div className={cx('reason')}>
                        <div className={cx('image')}>
              <Image src={nextGen} alt="Supporting the next generation of tech talent at UNIHACK" />
            </div>

            <div className={cx('content')}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <h3>Support the Next Generation</h3>
            </div>
            <p>
              Associate your brand with identifying, uplifting, and nurturing
              the next generation of Australian and New Zealand tech talent.
            </p>
          </div>
        </div>
      </section>
    )
}
