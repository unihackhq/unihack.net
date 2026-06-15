import Image from 'next/image'
import eventSvg from './2026-logo-w.svg'
import logoSvg from './logo.svg'

export const Logo = () => {
  return <Image alt="UNIHACK" src={logoSvg} />
}

export const EventLogo = () => {
  return (
    <Image
      alt="UNIHACK 2026, funded by the European Union"
      height={100}
      src={eventSvg}
      width={46}
    />
  )
}
