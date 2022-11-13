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
  console.log(jobData)
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
      <div className="bg-white px-[15px] pt-[24px] pb-[37px]">
        <h1 className="jobDetails-textTile">Job Details</h1>
        <div className="border-b-2 border-[#3A4562] mb-6" />
        <div className="flex mb-8 font-normal text-[16px] leading-[23px] text-[#38415D]">
          <p className="mr-9">Save to my list</p>
          <p>Share</p>
        </div>
        <button className="hidden">Apply Now</button>

        <h2 className="font-bold text-[24px] tracking-[-0.75px] leading-[30px]">
          {jobData.title}
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-[13px] leading-[25px] font-light tracking-[0.191905px]">
            Posted {moment(jobData.createdAt).fromNow()}
          </p>
          <div className="mb-3">
            <p>Brutto, per year</p>
            <p className="text-end ">{jobData.salary}</p>
          </div>
        </div>
        <h3 className="font-bold text-[20px] leading-[25px] tracking-[-0.625px] mb-3">
          Responsopilities
        </h3>
        <p className="font-normal text-[18px] leading-[24px] tracking-[-0.5625px] mb-10">
          {responsopilities}
        </p>
        <h3 className="font-bold text-[20px] leading-[25px] tracking-[-0.625px] mb-3">
          Compensation & Benefits
        </h3>
        <p className="font-normal text-[18px] leading-[24px] tracking-[-0.5625px] mb-10">
          {compensationBenefits}
        </p>
        <div className="flex justify-center mb-36">
          <button type="button" className="border rounded-lg bg-[#384564]">
            <p className="font-semibold text-[12px] leading-[16px] text-white uppercase px-8 py-5">
              Apply Now
            </p>
          </button>
        </div>
        <h2 className="jobDetails-textTile">Attached images</h2>
        <div className="border-b-2 border-[#3A4562] mb-6" />
        <div className="flex justify-between gap-2 mb-16">
          {jobData.pictures.map((picture, index) => {
            return (
              <Image
                key={index}
                src={picture}
                alt={jobData.name}
                width={209}
                height={115}
                className="w-2/6 h-[115px] rounded-lg"
              />
            )
          })}
        </div>
        <h2 className="jobDetails-textTile">Additional Info</h2>
        <div className="border-b-2 border-[#3A4562] mb-6" />

        <h3 className="mb-[10px]">Employment type</h3>
        <div className="flex gap-2 pb-6">
          {jobData.employment_type.map((item, index) => {
            return (
              <div
                key={index}
                className="additionalInfoUnit border rounded-lg bg-[#a1b1db]"
              >
                <span className="text-center text-[#55699E]">{item}</span>
              </div>
            )
          })}
        </div>

        <h3 className="mb-[10px]">Benefits</h3>
        <div className="flex gap-2 mb-[63px]">
          {jobData.benefits.map((item, index) => (
            <div
              key={index}
              className="additionalInfoUnit border rounded-lg bg-[#FFCF00]"
            >
              <span className="text-center text-[#988B49]"> {item}</span>
            </div>
          ))}
        </div>

        <h2 className="jobDetails-textTile">Contacts</h2>
        <div className="border-b-2 border-[#3A4562] mb-6" />
        <div>
          <p>Department name.</p>
          <p>{jobData.name}</p>
          <p>{jobData.phone}</p>
          <p>{jobData.email}</p>
        </div>
        <div>
          <Map lat={jobData.location.lat} lng={jobData.location.long} />
        </div>
      </div>
    </>
  )
}
