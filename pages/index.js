import Head from 'next/head'
import Image from 'next/image'
import JobCard from '../components/jobCard'
import Layout from '../components/Layout'

export const getStaticProps = async () => {
  const response = await fetch(
    'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
  )
  const data = await response.json()
  return {
    props: { jobs: data },
  }
}

export default function Home({ jobs }) {
  return (
    <Layout>
      <Head>
        <title>Job list</title>
      </Head>
      <div className="container lg:pt-7 lg:pb-15 xl:px-0">
        {jobs &&
          jobs.map(({ id, name, address, pictures, createdAt, title }) => (
            <JobCard
              key={id}
              id={id}
              title={title}
              name={name}
              address={address}
              pictures={pictures}
              createdAt={createdAt}
            />
          ))}
      </div>
    </Layout>
  )
}
