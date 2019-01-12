import { ReactNode } from 'react';

import Header from '../../components/header/header';
import './page.scss';

type Props = { children: ReactNode };

const Page = (props: Props) => (
  <div>
    <Header/>
    { props.children }
    {/* <Footer /> */}
  </div>
);

export default Page;
