import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'
import { useState } from 'react'
import Link from 'next/link'
import Location from './map/icons/location'
import Stars from './map/icons/stars'
import BookmarkCard from './map/icons/bookmark'

export default function JobCard({
  id,
  title,
  name,
  pictures,
  address,
  location,
  createdAt,
  favorite,
  onToggleFavouriteJob,
}) {
  return (
    <>
      <Head>
        <title>Job list</title>
      </Head>
      <>
        <div className="border rounded-lg m-2 px-4 py-4 sm:py-6 cardShadow cardBgMobile">
          <div className="flex">
            <div>
              <Image
                src={pictures[0]}
                alt="logo"
                width={85}
                height={85}
                className=" rounded-full w-[66px] h-[66px] lg:w-[85px] lg:h-[85px] mt-10 lg:mt-6 mr-5 lg:mr-6 ml-4"
              />
            </div>
            <div className=" flex flex-col-reverse lg:flex-row justify-between">
              <div className="lg:w-7/12">
                <Link href={`/jobDetailed/${id}`}>
                  <h2 className="font-bold tracking-[-0.5625px] text-[16px] mb-2 text-lg leading-6 sm:text-xl sm:font-bold overflow-hidden hover:opacity-70">
                    {title}
                  </h2>
                </Link>

                <div>
                  <button type="button" className="hidden">
                    Favor
                  </button>
                </div>

                <p className="font-normal tracking-[0.23619px] text-[14px] text-gray-400 mb-2">
                  Department name • {name}
                </p>

                <div className="flex text-base items-start gap-2 font-normal tracking-[0.23619px] text-[14px] text-gray-400 ">
                  <Location />
                  <p>{address}</p>
                </div>
              </div>
              <div className=" lg:w-5/12 xl:w-4/12 mb-3 lg:mb-0 flex gap-3 sm:gap-8 lg:justify-end items-center">
                <Stars />
                <div className="ml-auto lg:ml-0 h-full flex flex-row-reverse lg:flex-col justify-between items-center lg:items-end">
                  <BookmarkCard />
                  <p className="textDate pr-4 sm:text-base ">
                    Posted {moment(createdAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
