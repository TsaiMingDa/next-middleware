import { GetServerSideProps } from 'next';
import Link from 'next/link';

import React from 'react';

interface IHomePageProps {
  msg: string;
}

export const getServerSideProps = (async () => {
  
  return {
    props: {
      msg: '我是getServerSideProps回傳的訊息',
    },
  };
}) satisfies GetServerSideProps<IHomePageProps>;

const HomePage: React.FC<IHomePageProps> = ({
  msg
}) => {

  return (<>
    <h1>{ msg }</h1>
    <Link href="/page2">to page 2</Link>
  </>);
};

export default HomePage;
