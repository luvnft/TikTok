import axios from 'axios';
import Head from 'next/head';
import { ROOT_URL } from '../../utils';
import { Video } from '../../types';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/router';
import CommentSection from '../../components/commentSection';
import { useEffect } from 'react';

interface DetailProps {
  videoDetail: Video;
}

export default function Detail({ videoDetail }: DetailProps) {
  const router = useRouter();

  // scroll top
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Head>
        <title>{videoDetail.caption} | Tik Tok</title>
      </Head>

      <div className='lg:min-h-screen w-full flex flex-col lg:flex-row dark:bg-dark dark:text-white'>
        {/* left */}
        <div className='h-[480px] w-full lg:flex-1 lg:h-screen bg-img-blur-light dark:bg-img-blur-dark bg-no-repeat bg-cover object-cover'>
          <div
            onClick={() => router.push('/')}
            title='back'
            className='absolute hidden xs:flex items-center justify-center text-white bg-[#7e7b7b5e] w-9 h-9 rounded-full top-2 left-2 cursor-pointer hover:bg-[#5c59595e]'
          >
            <RxCross2 size={23} />
          </div>

          <div className='bg-black h-full max-w-[270px] lg:max-w-[390px] flex items- justify-center mx-auto cursor-pointer'>
            <video
              src={videoDetail.video.asset.url}
              autoPlay
              loop
              controls
              className='w-full h-full'
            />
          </div>
        </div>

        {/* right */}
        <CommentSection videoDetail={videoDetail} />
      </div>
    </>
  );
}

export async function getServerSideProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await axios.get(`${ROOT_URL}/api/post/${id}`);

  return { props: { videoDetail: res.data } };
}