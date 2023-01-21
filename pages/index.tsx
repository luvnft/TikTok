import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tik Tik</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-blue-700 text-3xl'>Hello</div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  // const res = await axios.get('http://localhost:3000/api/post');

  // console.log(res.data);

  return { props: {} };
}
