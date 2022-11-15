import Head from 'next/head'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../../components/map/map'
import { GOOGLE_KEY } from '../../utils/APIconfig'
import moment from 'moment'
import Image from 'next/image'
import Favorite from '../../components/icons/favorite'
import Share from '../../components/icons/share'
import Link from 'next/link'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

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

  const responsopilities = jobData.description.split('Responsopilities:')[1]

  const description = jobData.description.split('\n')
  const compensationBenefits = description[7].split('. ')

  return (
    <>
      <Head>
        <title>Job Detailed </title>
      </Head>
      <div className=" px-4 pt-6 pb-6 lg:pt-14 lg:pb-40">
        <div className="lg:flex lg:gap-x-8 xl:gap-x-[134px] max-w-[1257px] m-auto">
          <div className="bg-white px-[15px] pt-[24px] pb-[37px] rounded-md">
            <div className="lg:mb-10 mb-8 lg:border-b-2 lg:border-[#3A4562] lg:pb-2 lg:flex lg:items-center lg:justify-between">
              <div className="mb-10 lg:mb-0 border-b-2 border-[#3A4562] lg:border-none">
                <h1 className="font-bold text-[24px] tracking-[-0.75px] leading-[30px] mb-3 lg:mb-0">
                  Job Details
                </h1>
              </div>
              <div className="lg:p-0 leading-[1.44] text-darkGray flex lg:text-[18px] lg:leading-[1.33] tracking-[-0.5625px]">
                <div className="pr-4 flex gap-x-2 items-center">
                  <div className="hidden lg:flex">
                    <div className="flex items-center mr-6">
                      <Favorite />
                      <p>Save to my list</p>
                    </div>
                    <div className="flex items-center mr-6">
                      <Share />
                      <p>Share</p>
                    </div>
                  </div>
                  <div className="lg:hidden flex">
                    <div className="flex items-center mr-6">
                      <Favorite />
                      <p>Save to my list</p>
                    </div>
                    <div className="flex items-center mr-6">
                      <Share />
                      <p>Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="border rounded-lg bg-[#384564] hidden lg:flex mb-8"
            >
              <p className="font-semibold text-[12px] leading-[16px] text-white uppercase px-8 py-5">
                Apply Now
              </p>
            </button>

            <main>
              <div className="lg:flex shrink-0 justify-between items-start lg:pb-2">
                <h2 className="font-bold text-[24px] tracking-[-0.75px] leading-[30px] pb-1 items-end lg:max-w-[501px] lg:w-4/6 text-justify">
                  {jobData.title}
                </h2>
                <div className="flex items-center justify-between pb-3.5 lg:p-0">
                  <p className="text-gray-400 text-[13px] leading-[25px] font-light tracking-[0.191905px] lg:hidden">
                    Posted {moment(jobData.createdAt).fromNow()}
                  </p>
                  <div className="flex flex-col items-end lg:items-start">
                    <p className="text-lg leading-6 lg:hidden">
                      Brutto, per year
                    </p>
                    <p className="text-xl font-bold leading-6 pt-1 lg:pt-0 lg:pb-1">
                      &euro; {jobData.salary.replaceAll('k', ' 000')}
                    </p>
                    <p className=" hidden lg:flex text-lg leading-6">
                      Brutto, per year
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-[13px] leading-[25px] font-light tracking-[0.191905px] sm:order-3  w-1/2 sm:w-full sm:text-lg hidden lg:block lg:mb-2">
                Posted {moment(jobData.createdAt).fromNow()}
              </p>
            </main>

            <p className="job__text text-lg leading-6 text-justify">
              {jobData.description}
            </p>
            <h3 className="font-bold text-[20px] leading-[25px] tracking-[-0.625px] mt-6 mb-3">
              Responsopilities
            </h3>
            <p className="font-normal text-[18px] leading-[24px] tracking-[-0.5625px] mb-10 text-justify">
              {responsopilities}
            </p>
            <h3 className="font-bold text-[20px] leading-[25px] tracking-[-0.625px] mt-6 mb-3">
              Compensation & Benefits:
            </h3>
            <ul className="font-normal text-[18px] leading-[24px] tracking-[-0.5625px] mb-10 text-justify list-disc pl-4">
              {compensationBenefits.map((item, index) => (
                <li key={index} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
            <div className=" mb-36">
              <button type="button" className="border rounded-lg bg-[#384564]">
                <p className="font-semibold text-[12px] leading-[16px] text-white uppercase px-8 py-5">
                  Apply Now
                </p>
              </button>
            </div>
            <h2 className="font-bold text-[24px] tracking-[-0.75px] leading-[30px] mb-3 lg:mb-0">
              Attached images
            </h2>
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
                    className="w-2/6  rounded-lg"
                  />
                )
              })}
            </div>
            <h2 className="font-bold text-[24px] tracking-[-0.75px] leading-[30px] mb-3 lg:mb-0">
              Additional Info
            </h2>
            <div className="border-b-2 border-[#3A4562] mb-6" />

            <h3 className="mb-[10px]">Employment type</h3>
            <div className="flex gap-2 pb-6">
              {jobData.employment_type.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="additionalInfoUnit border rounded-lg bg-[#a1b1db] w-[222px] h-[50px] border-[#FFCF00] flex justify-center items-center font-bold leading-[1] tracking-[-0.457143px]"
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
                  className="additionalInfoUnit border rounded-lg bg-[#FFCF00] w-[222px] h-[50px] flex justify-center items-center font-bold leading-[1] tracking-[-0.457143px]"
                >
                  <span className="text-center text-[#988B49]"> {item}</span>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <Link href="/">
                <button className="w-[213px] h-[50px] bg-jobCard_bg_color_mob border rounded-lg text-[#3A4562] text-[12px] font-semibold flex items-center justify-center">
                  <span className="pr-5">
                    <ArrowBackIosNewIcon />
                  </span>
                  RETURN TO JOB BOARD
                </button>
              </Link>
            </div>
          </div>

          <h2 className=" lg:hidden jobDetails-textTile border-b-2 border-[#3A4562] pb-2.5 mb-5 font-bold text-[24px] tracking-[-0.75px] leading-[30px] lg:mb-0">
            Contacts
          </h2>

          <div className="border rounded-lg bg-[#2A3047]  lg:w-[402px] h-[436px] mx-auto">
            <div className="pt-[31px] px-[64px]">
              <div className="font-bold text-[16px] leading-[19px] tracking-[0.23619px] text-[#E7EAF0] mb-[17px]">
                <p>Department name.</p>
                <p>{jobData.name}</p>
              </div>
              <div className="font-normal text-[16px] leading-[23px] tracking-[-0.5px] text-[#E7EAF0] mb-[6px]">
                <p>{jobData.address}</p>
              </div>
              <div className="font-normal text-[16px] leading-[18px] tracking-[-0.5px] text-gray-400 mb-[17px]">
                <p>{jobData.phone}</p>
                <p>{jobData.email}</p>
              </div>
            </div>
            <div className="h-52 w-full text-center ">
              <Map lat={jobData.location.lat} lng={jobData.location.long} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
