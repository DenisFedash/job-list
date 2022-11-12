import { GoogleMap, Marker } from '@react-google-maps/api'

export default function Map({ lat, lng }) {
  const center = { lat, lng }
  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '111%' }}
      zoom={13}
      center={center}
      options={{
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}
