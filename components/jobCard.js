import Head from 'next/head'
import Image from 'next/image'

export default function JobCard({
  id,
  name,
  pictures,
  adress,
  location,
  createdAt,
}) {
  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <div>
        <Image src={pictures} alt="logo" width={66} height={66} />
        <div>
          <h2>{name}</h2>
          <p>{adress}</p>
          <p>{location}</p>
        </div>
      </div>
    </>
  )
}
