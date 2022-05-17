import type { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
  const {data:session} =useSession()

  
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const tweets = await fetchTweets()
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }


  return {
    props: {
      tweets,
    },
  }
}
