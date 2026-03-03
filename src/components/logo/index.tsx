import logoSvg from './logo.svg';
import eventSvg from './2026-logo-w.svg';
import Image from 'next/image';

export const Logo = () => {
  return <Image src={logoSvg} alt="UNIHACK" width={46} height={60} />;
};

export const EventLogo = () => {
  return <Image src={eventSvg} alt="UNIHACK 2026, funded by the European Union" width={46} height={100} />;

}