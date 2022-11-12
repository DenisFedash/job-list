import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="test, jobs, task" />
        <meta
          name="description"
          content="Test task Trainee Frontend developer"
        />
      </Head>
      {children}
    </>
  )
}
