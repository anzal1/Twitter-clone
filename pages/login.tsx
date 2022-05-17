import { getProviders, signIn } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { toast, Toaster } from 'react-hot-toast'

function Login() {
  const notify = () => toast('Logging in! Please wait...', {})
  return (
    <div
      className="flex min-h-screen w-full flex-col
    items-center justify-center bg-black"
    >
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <Image
        src="https://i.pinimg.com/originals/b1/e2/bc/b1e2bcec364b19430b70fc113c1ca72d.jpg"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />
      <div className="mt-10 flex">
        <div>
          <button
            onClick={() => {
              notify()
              signIn('google', { callbackUrl: '/' })
            }}
            type="button"
            className="to-blue-slate mr-2 mb-2 rounded-lg bg-gradient-to-r from-slate-400 via-slate-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-slate-500/50 hover:bg-gradient-to-br focus:ring-4 focus:ring-slate-300 dark:shadow-lg dark:shadow-slate-800/80 dark:focus:ring-slate-800"
          >
            Login with Google
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              notify()
              signIn('twitter', { callbackUrl: '/' })
            }}
            type="button"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
          >
            Login with Twitter
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login


