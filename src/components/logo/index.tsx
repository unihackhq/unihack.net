import logoSvg from './logo.svg';
import Image from 'next/image';

export const Logo = () => {
  return <Image src={logoSvg} alt="UNIHACK" width={46} height={60} />;
};
