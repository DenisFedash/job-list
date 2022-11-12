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
      <div>
        <div>
          <Image src={pictures[0]} alt="logo" width={66} height={66} />
          <div>
            <h2>{title}</h2>
            <p>Department name • {name}</p>
            <p>{address}</p>
            <p>{location}</p>
          </div>
          <div>
            <p>Posted {moment(createdAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </>
  )
}
