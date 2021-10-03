import styles from './event-filter.module.scss';
import { FC } from 'react';
import { H4 } from '@components/typography/typography';

type Props = {
  options: string[];
} & FilterProp;

type FilterProp = {
  handleClick: (tag: string) => void;
  currentTag: string;
};

type FilterButtonProps = {
  tag: string;
} & FilterProp;

const FilterButton: FC<FilterButtonProps> = ({
  currentTag,
  handleClick,
  tag
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
      <FilterButton
        tag={'all'}
        handleClick={handleClick}
        currentTag={currentTag}
      />
      {options?.map(tag => {
        tag = tag.toLowerCase();
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
