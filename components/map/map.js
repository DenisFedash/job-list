import { GoogleMap, Marker } from 'react-google-maps'

export default function Map({ lat, lang }) {
  const center = { lat, lang }
  return (
    <GoogleMap zoom={8} center={center}>
      <Marker position={center} />
    </GoogleMap>
  )
}
