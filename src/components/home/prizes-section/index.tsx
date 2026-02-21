'use client';

import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import atlassianLogo from '@/assets/logos/atlassian-w.svg';
import quantiumLogo from '@/assets/logos/quantium-w.svg';
import elasticLogo from '@/assets/logos/elastic-w.svg';
import { JudgingCriteria } from './judging-criteria';

interface MainPrize {
  place: string;
  prize: string[];
}

interface CategoryPrize {
  title: string;
  description: string;
  prize: string[];
  sponsorLogo?: StaticImageData;
  sponsorName?: string;
  additionalCriteria?: string[];
}

const mainPrizes: MainPrize[] = [
  {
    place: 'First Place',
    prize: [
      '$5,000 in cash',
      'Bose Headphones per person',
      'NOMAD Tracking Card Air per person',
    ],
  },
  {
    place: 'Second Place',
    prize: ['$2,400 in cash', 'Crumpler Communal Dwelling backpack per person'],
  },
  {
    place: 'Third Place',
    prize: ['Bellroy Pack Well Travel kit per person'],
  },
];

const sponsorPrizes: CategoryPrize[] = [
  {
    title: 'First Timers Prize',
    description:
      'The best project created by first-time hackathon participants.',
    prize: ['TBA'],
    sponsorLogo: atlassianLogo,
    sponsorName: 'Atlassian',
    additionalCriteria: [
      'To be eligible, at least 75% of your team must be either a first time hackathon participant OR a first year university student.',
      'This prize aims to encourage and recognize newcomers to the hackathon community who demonstrate creativity, teamwork, and potential in their project.',
    ],
  },
  {
    title: 'Best Use of Elastic Technology',
    description:
      'Demonstrate the most innovative and effective use of Elastic technology in their project.',
    prize: ['TBA'],
    sponsorLogo: elasticLogo,
    sponsorName: 'Elastic',
    additionalCriteria: [
      'As part of your Devpost submission, you must describe how you incorporated Elastic technology into your project and the impact it had on your solution.',
      'This prize celebrates creativity and technical skill in leveraging Elastic’s powerful search and analytics capabilities.',
    ],
  },
  {
    title: 'AI Solutions Prize',
    description:
      'Awarded to the team that best uses AI as an impactful part of your solution.',
    prize: ['TBA'],
    sponsorLogo: quantiumLogo,
    sponsorName: 'Quantium',
    additionalCriteria: [
      'We are looking for projects that use AI as an impactful solution to an interesting problem. Emphasis will be placed on whether the use of AI in solving the problem at hand is suitable, innovative, and implemented well.',
      'This does not mean the entire implementation needs to be AI, only that AI must be at the centre of your solution to whatever problem is being solved. Some wise words from our sponsor: "Less is often more with AI".',
      'We encourage students who opt-in for this prize to detail in your Devpost submission your reasoning/motivation behind using AI, why was it suitable, how did you implement it, and where/what data is being used.',
      'This is an opportunity to communicate (concisely) why you should win!',
    ],
  },
];

const categoryPrizes: CategoryPrize[] = [
  {
    title: 'Best Design',
    description: 'Awarded to the most usable and best looking user interface.',
    prize: ['TBA'],
  },
  {
    title: 'Most Creative Idea',
    description: 'The project that has the most original idea or reinvention.',
    prize: ['TBA'],
  },
  {
    title: 'Social Impact Prize',
    description:
      'The best idea that addresses an issue in your local community.',
    prize: ['TBA'],
  },
  {
    title: 'Most Entertaining Pitch',
    description:
      'Can you summarise your pitch in in three minutes - whilst also being engaging and entertaining?',
    prize: ['TBA'],
  },
  {
    title: "People's Choice Award",
    description: 'The project that wins the hearts and votes of the people.',
    prize: ['TBA'],
  },
  {
    title: 'Best Meme',
    description:
      "Make the best meme during the event and post it on the UNIHACK Discord. I couldn't make it any more obvious. (This is an individual prize)",
    prize: ['Totally a secret'],
  },
];

export const PrizesSection = () => {
  const [modalContent, setModalContent] = useState<string[] | null>(null);

  const openModal = (content: string[]) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section className={styles.section} id="prizes">
      <h2>Prizes</h2>

      {/* Main Prizes */}
      <div className={styles.subsection}>
        <div className={styles.subsectionHeader}>
          <h3>Main Prize</h3>
        </div>
        <div className={styles.mainPrizesGrid}>
          {mainPrizes.map((prize, index) => (
            <div key={index} className={styles.mainPrizeCard}>
              <div className={styles.mainPrizeInner}>
                <h4 className={styles.prizePlace}>{prize.place}</h4>
                <ul className={styles.prizeList}>
                  {prize.prize.map((item, idx) => (
                    <li key={idx} className={styles.prizeItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <JudgingCriteria />
      </div>

      {/* Category/Sponsor Prizes */}
      <div className={styles.subsection}>
        <div className={styles.subsectionHeader}>
          <h3>Sponsor Prizes</h3>
        </div>
        <div className={styles.categoryPrizesGrid}>
          {sponsorPrizes.map((prize, index) => (
            <div key={index} className={styles.categoryPrizeCard}>
              {prize.sponsorLogo && (
                <div className={styles.sponsorLogo}>
                  <Image
                    src={prize.sponsorLogo}
                    alt={prize.sponsorName || 'Sponsor'}
                  />
                </div>
              )}
              <h4>{prize.title}</h4>
              <div className={styles.prizeDescription}>
                <p className={styles.description}>{prize.description}</p>
                {prize.additionalCriteria && (
                  <button
                    className={styles.criteriaButton}
                    onClick={() => openModal(prize.additionalCriteria!)}
                  >
                    Read More
                  </button>
                )}
              </div>
              <div className={styles.prizeValue}>
                <ul className={styles.prizeList}>
                  {prize.prize.map((item, idx) => (
                    <li key={idx} className={styles.prizeItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.subsection}>
        <div className={styles.subsectionHeader}>
          <h3>Category Prizes</h3>
        </div>
        <div className={styles.categoryPrizesGrid}>
          {categoryPrizes.map((prize, index) => (
            <div key={index} className={styles.categoryPrizeCard}>
              <h4>{prize.title}</h4>
              <div className={styles.prizeDescription}>
                <p className={styles.description}>{prize.description}</p>
                {prize.additionalCriteria && (
                  <button
                    className={styles.criteriaButton}
                    onClick={() => openModal(prize.additionalCriteria!)}
                  >
                    Read More
                  </button>
                )}
              </div>
              <div className={styles.prizeValue}>
                <ul className={styles.prizeList}>
                  {prize.prize.map((item, idx) => (
                    <li key={idx} className={styles.prizeItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <h4>Additional Information</h4>
            <div className={styles.modalBody}>
              {modalContent.map((criteria, index) => (
                <p key={index}>{criteria}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
