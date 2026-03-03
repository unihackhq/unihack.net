'use client';

import styles from './style.module.css';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import atlassianLogo from '@/assets/logos/atlassian-w.svg';
import quantiumLogo from '@/assets/logos/quantium-w.svg';
import elasticLogo from '@/assets/logos/elastic-w.svg';
import euLogo from '@/assets/logos/eu-logo-horiz.svg';
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
    prize: ['$2,000 in cash', 'Crumpler Communal Dwelling backpack per person'],
  },
  {
    place: 'Third Place',
    prize: ['Bellroy Pack Well Travel kit per person'],
  },
];

const optinPrizes: CategoryPrize[] = [
   {
    title: 'The EU Shared Future Prize',
    description:
      'Projects that work towards a secure & stable future, and reflect the spirit of cooperation. (Open to AU-based participants only)',
    prize: ['TBA'],
    sponsorLogo: euLogo,
    sponsorName: 'Funded by the European Union',
    additionalCriteria: [
      'The EU Shared Future Prize is open only to Australia-based applicants. It will recognise the project that best reflects resilience — whether in cybersecurity, democratic integrity, infrastructure protection, crisis response, community safety or any field that contributes to a secure and safe future.',
      'Applications should include a statement of reasoning/motivation as part of their DevPost submission.',
    ],
  },
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
  {
    title: 'Best Design',
    description: 'Awarded to the most usable and best looking user interface.',
    prize: ['Ostritchpillow Go Neck Pillow per person'],
  },
  {
    title: 'Most Creative Idea',
    description: 'The project that has the most original idea or reinvention.',
    prize: ['Twelve South AirFly Pro 2 per person'],
  },
  {
    title: 'Social Impact Prize',
    description:
      'The best idea that addresses an issue in your local community.',
    prize: ['Blunt Metro Compact Umbrella per person'],
  },
  {
    title: 'Most Fun Idea',
    description:
      'Create the most fun and delightful experience, whether that be a game, a bot, or something else entirely.',
    prize: ['TBA'],
  },
];

const specialPrizes: CategoryPrize[] = [
  {
    title: 'Most Entertaining Pitch',
    description:
      'Can you summarise your pitch in three minutes - whilst also being engaging and entertaining?',
    prize: ['Kodak CHARMERA Digital Keyring Camera per person'],
    additionalCriteria: [
      'All entries that are successfully visible on the UNIHACK 2026 Devpost will be considered for this prize, and no opt-in is necessary.',
      'This prize is determined by the UNIHACK Organizers, and the winner will be the team that delivers the most engaging and entertaining pitch video.',
    ],
  },
  {
    title: "People's Choice Award",
    description: 'The project that wins the hearts and votes of the people.',
    prize: ['TBA'],
    additionalCriteria: [
      'All entries that are successfully visible on the UNIHACK 2026 Devpost will be considered for this prize, and no opt-in is necessary.',
      'The winner of this prize will be determined by public voting on Devpost, where the project that receives the most votes from the community will be crowned the People’s Choice.',
    ],
  },
  {
    title: 'Best Meme',
    description:
      "Make the best meme during the event and post it on the UNIHACK Discord. I couldn't make it any more obvious. (This is an individual prize)",
    prize: ['Totally a secret'],
    additionalCriteria: [
      'To win this prize, simply create and share something on the #memes-and-dreams channel on the UNIHACK Discord server during the event.',
    ],
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

      <div className={styles.subsection}>
        <div className={styles.subsectionHeader}>
          <h3>Main Prize</h3>
          <p>All teams automatically enter the Main Prize.</p>
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

      <div className={styles.subsection}>
        <div className={styles.subsectionHeader}>
          <h3>Category Prizes</h3>
          <p>
            You must opt-in for these prizes when you submit your project on
            Devpost to be eligible for them. You can opt-in for as many
            sponsored prizes as you think are relevant to your project.
          </p>
        </div>
        <div className={styles.categoryPrizesGrid}>
          {optinPrizes.map((prize, index) => (
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
          <h3>Special Prizes</h3>
          <p>You are automatically considered once fulfilling the criteria.</p>
        </div>
        <div className={styles.categoryPrizesGrid}>
          {specialPrizes.map((prize, index) => (
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
