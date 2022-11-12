import Head from 'next/head'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../../components/map/map'
import { GOOGLE_KEY } from '../../utils/APIconfig'

export default function DetailedJob() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${GOOGLE_KEY}`,
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>Detailed job</title>
      </Head>
      {/* <Map /> */}
      <>Detailed Job</>
    </>
  )
}
