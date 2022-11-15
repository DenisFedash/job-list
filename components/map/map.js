import { GoogleMap, Marker } from '@react-google-maps/api'

import { mapStyles } from './mapStyles'

const defaultOptions = {
  panControl: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: true,
  clickableIcons: true,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  isFractionalZoomEnabled: true,
  styles: mapStyles,
}

export default function Map({ lat, lng }) {
  const center = { lat, lng }
  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '130%', borderRadius: '8px' }}
      zoom={13}
      center={{ lat: 48.22140057390992, lng: 16.348647086855475 }}
      options={defaultOptions}
    >
      <Marker
        position={{ lat: 48.22140057390992, lng: 16.348647086855475 }}
        icon={{ url: '/location.svg' }}
      />
    </GoogleMap>
  )
}
