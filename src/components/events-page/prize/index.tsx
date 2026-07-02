import { isCategoryPrize, isMainPrize, isSponsorPrize, Prize } from "@/content/events/types";
import styles from './styles.module.css'
import classnames from 'classnames/bind';
import { Button } from "@/components/button";

const cx = classnames.bind(styles);

interface Props {
    prize: Prize;
}

export const getPrizeType = (prize: Prize) => {
    if (isMainPrize(prize)) return 'MAIN PRIZE';
    if (isSponsorPrize(prize)) return 'SPONSOR';
    if (isCategoryPrize(prize)) return 'CATEGORY';
    return null;
}

export const PrizeComponent = ({prize}: Props) => {

    const state = { 
        prize: true, 
        main: isMainPrize(prize),
        sponsor: isSponsorPrize(prize), 
        category: isCategoryPrize(prize),
        first: isMainPrize(prize) && prize.place === 'FIRST',
        second: isMainPrize(prize) && prize.place === 'SECOND',
        third: isMainPrize(prize) && prize.place === 'THIRD'
    }

    return (
        <div className={cx(state)}>
            <div className={styles.prizeHeader}>
            <p className={styles.prizeType}>{getPrizeType(prize)}</p>
            <p className={styles.prizeName}>{prize.name}
            {isSponsorPrize(prize) && <span> from {prize.sponsor}</span>}
            </p>
            </div>
            <div className={styles.prizeContent}>
            <p className={styles.prizeWinner}>
                {prize.winner} <span className={styles.prizeUniversity}>{prize.university}</span>
            </p>
            {prize.devpostUrl && <Button className={styles.devpost} href={prize.devpostUrl} text="View on Devpost" />}
            </div>
        </div>
    );
}