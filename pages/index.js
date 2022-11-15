import Head from 'next/head'
import { useState } from 'react'
import JobCard from '../components/jobCard'
import Layout from '../components/Layout'
import PaginationLine from '../components/Pagination/pagination'

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
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 5

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

  const paginate = (number) => {
    setCurrentPage(number)
  }

  const decreasePage = () => {
    setCurrentPage((prevPageNum) => {
      if (prevPageNum <= 1) {
        return Math.ceil(jobs.length / jobsPerPage)
      } else {
        return prevPageNum - 1
      }
    })
  }
  const increasePage = () => {
    setCurrentPage((prevPageNum) => {
      if (prevPageNum >= Math.ceil(jobs.length / jobsPerPage)) {
        return 1
      } else {
        return prevPageNum + 1
      }
    })
  }
  return (
    <Layout>
      <Head>
        <title>Job list</title>
      </Head>
      <div className="lg:pt-7 lg:pb-15 xl:px-0">
        {currentJobs &&
          currentJobs.map(
            ({ id, name, address, pictures, createdAt, title }) => (
              <JobCard
                key={id}
                id={id}
                title={title}
                name={name}
                address={address}
                pictures={pictures}
                createdAt={createdAt}
              />
            ),
          )}
        {jobs.length > jobsPerPage && (
          <PaginationLine
            currentPage={currentPage}
            jobsPerPage={jobsPerPage}
            totalJobs={jobs.length}
            onPaginate={paginate}
            onDecreasePage={decreasePage}
            onIncreasePage={increasePage}
          />
        )}
      </div>
    </Layout>
  )
}
