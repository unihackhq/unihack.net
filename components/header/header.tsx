import './header.scss';
import Link from 'next/link';

const Header = () => (
  <div className="header">
    <div className="logo"/>
    <ul className="nav">
      <li className="nav-link">
        <Link href="/about"><a>About</a></Link>
      </li>
      <li className="nav-link">
        <Link href="/sponsorship"><a>Sponsor</a></Link>
      </li>
      <li className="nav-link">
        <Link href="https://medium.com/unihack-blog"><a>Blog</a></Link>
      </li>
    </ul>
  </div>
);

export default Header;
