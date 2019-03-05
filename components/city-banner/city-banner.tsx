import './city-banner.scss';
import Link from 'next/link';

type Props = {
  city: string,
  year: string,
  href: string,
  left?: boolean
};

const CityBanner = (props: Props) => (
  <Link href={props.href}>
    <a className={`city-banner ${props.city} ${props.left ? 'left' : 'right'}`}>
      <h2>{props.city}</h2>
      <h2 className="thin">{props.year}</h2>
    </a>
  </Link>
);

export default CityBanner;
