import Head from 'next/head'
import Image from 'next/image'

export const getStaticProps = async () => {
  const response = await fetch(
    'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
  )
  const data = await response.json()
  return {
    props: { list: data },
  }
}

const JobList = ({ list }) => {
  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <h1>Job List</h1>
      <ul>
        {list &&
          list.map(({ id, name, email, phone, pictures }) => (
            <li key={id}>
              <Image src={pictures[0]} alt="logo" width={66} height={66} />

              <h2>{name}</h2>
              <p>{email}</p>
              <p>{phone}</p>
            </li>
          ))}
      </ul>
    </>
  )
}

export default JobList
