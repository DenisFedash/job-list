import Head from 'next/head'
import Image from 'next/image'
import JobCard from '../../components/jobCard'

export const getStaticProps = async () => {
  const response = await fetch(
    'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
  )
  const data = await response.json()
  return {
    props: { jobs: data },
  }
}

const JobList = ({ jobs }) => {
  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <h1>Job List</h1>
      <ul>
        {jobs &&
          jobs.map(({ id, name, email, phone, pictures }) => (
            <li key={id}>
              <JobCard
                name={name}
                email={email}
                phone={phone}
                pictures={pictures[0]}
              />
            </li>
          ))}
      </ul>
    </>
  )
}

export default JobList
