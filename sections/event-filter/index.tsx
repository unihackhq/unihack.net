import styles from './event-filter.module.scss';
import { FC } from 'react';
import { H4 } from '@components/typography/typography';

export type tags = 'all' | 'melbourne' | 'sydney';

type Props = {
  options: tags[];
} & FilterProp;

type FilterProp = {
  handleClick: (tag: tags) => void;
  currentTag: string;
};

type FilterButtonProps = {
  tag: tags;
} & FilterProp;

const FilterButton: FC<FilterButtonProps> = ({
  currentTag,
  handleClick,
  tag,
}) => (
  <button
    key={tag}
    onClick={() => handleClick(tag)}
    className={tag === currentTag ? styles.selected : ''}
  >
    {tag}
  </button>
);

const Filter: FC<Props> = ({ options, handleClick, currentTag }) => (
  <div className={styles.filter}>
    <H4>Filter events</H4>
    <div className={styles.buttons}>
      {options?.map((tag) => {
        return (
          <FilterButton
            key={tag}
            tag={tag}
            handleClick={handleClick}
            currentTag={currentTag}
          />
        );
      })}
    </div>
  </div>
);

export default Filter;
