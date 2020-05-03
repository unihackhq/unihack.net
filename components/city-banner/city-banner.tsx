import './city-banner.scss';

type Props = {
  city: string;
  year: string;
  href: string;
  left?: boolean;
};

const CityBanner = (props: Props) => (
  <a
    className={`city-banner ${props.city} ${props.left ? 'left' : 'right'}`}
    href={props.href}
    target="_blank"
  >
    <h2>{props.city}</h2>
    <h2 className="thin">{props.year}</h2>
  </a>
);

export default CityBanner;
