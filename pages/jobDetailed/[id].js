import Head from 'next/head'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../../components/map/map'
import { GOOGLE_KEY } from '../../utils/APIconfig'
import moment from 'moment'
import Image from 'next/image'

export const getServerSideProps = async (e) => {
  const { id } = e.query
  let response = await fetch(
    'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
  )
  const data = await response.json()
  if (!data.length) throw new Error('no data')

  let currentJobData = data.find((user) => user.id === id)
  return {
    props: { jobData: currentJobData },
  }
}

export default function Job({ jobData }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${GOOGLE_KEY}`,
  })
  if (!isLoaded) return <div>Loading...</div>

  const description = jobData.description.split('Responsopilities:')[0]
  const responsopilities = jobData.description
    .split('Responsopilities:')[1]
    .split('Compensation & Benefits:')[0]
  const compensationBenefits = jobData.description
    .split('Responsopilities:')[1]
    .split('Compensation & Benefits:')[1]
  return (
    <>
      <Head>
        <title>Job Detailed </title>
      </Head>
      <h1 className="font-bold text-[28px] tracking-[0.413333px] mb-3">
        Job Details
      </h1>
      <div className="border-b-2 border-[#3A4562] mb-6" />
      <div className="flex mb-8 font-normal text-[16px]">
        <p className="mr-9">Save to my list</p>
        <p>Share</p>
      </div>
      <button className="hidden">Apply Now</button>

      <h2 className="font-bold text-[24px] tracking-[-0.75px]">
        {jobData.title}
      </h2>
      <div className="flex justify-between items-center">
        <p>Posted {moment(jobData.createdAt).fromNow()}</p>
        <div className="mb-3">
          <p>Brutto, per year</p>
          <p className="text-end">{jobData.salary}</p>
        </div>
      </div>
      <h3>Responsopilities</h3>
      <p>{responsopilities}</p>
      <h3>Compensation & Benefits</h3>
      <p>{compensationBenefits}</p>
      <button>Apply Now</button>
      <div>
        <h2>Additional Info</h2>
      </div>
      <h5>Employment type</h5>
      {jobData.employment_type.map((item) => {
        return <div key={item}>{item}</div>
      })}
      <div>
        {jobData.pictures.map((picture, index) => {
          return (
            <Image
              key={index}
              src={picture}
              alt={jobData.name}
              width={85}
              height={85}
            />
          )
        })}
      </div>
      <h2>Contacts</h2>
      <div>
        <p>Department name.</p>
        <p>{jobData.name}</p>
        <p>{jobData.phone}</p>
        <p>{jobData.email}</p>
      </div>
      <div>
        <Map lat={jobData.location.lat} lng={jobData.location.long} />
      </div>
    </>
  )
}
