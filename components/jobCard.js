import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'
import { useState } from 'react'
import Link from 'next/link'

export default function JobCard({
  id,
  title,
  name,
  pictures,
  address,
  location,
  createdAt,
  favourite,
  onToggleFavouriteJob,
}) {
  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <>
        <div className="border rounded-lg m-2 cardShadow cardBgMobile">
          <div className="flex">
            <div>
              <Image
                src={pictures[0]}
                alt="logo"
                width={85}
                height={85}
                className=" rounded-full w-[66px] h-[66px] lg:w-[85px] lg:h-[85px] mt-10 mr-5 ml-4"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between font-light text-sm pt-3 pb-4">
                <p>Stars</p>
                <p className="textDate pr-4">
                  Posted {moment(createdAt).fromNow()}
                </p>
              </div>
              <div className="">
                <div className="pr-4">
                  <Link
                    href={`/jobDetailed/${id}`}
                    className="font-normal tracking-[-0.5625px] text-[16px] pb-1"
                  >
                    {title}
                  </Link>
                </div>
                <div>
                  <button type="button" className="hidden">
                    Favor
                  </button>
                </div>
              </div>
              <p className="font-normal tracking-[0.23619px] text-[14px] text-gray-400">
                Department name • {name}
              </p>

              <div className="flex font-normal tracking-[0.23619px] text-[14px] text-gray-400 pb-2 pr-4">
                <p>{address}</p>
                <p>{location}</p>
              </div>
              <div className="pb-7">Vienna</div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
