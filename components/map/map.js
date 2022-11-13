import { GoogleMap, Marker } from '@react-google-maps/api'
import { GOOGLE_KEY } from '../../utils/APIconfig'
import CurrentLocation from './CurrentLocation'
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
  // { lat: 48.22140057390992, lng: 16.348647086855475 }

  const center = { lat, lng }
  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '8px' }}
      zoom={13}
      center={{ lat: 48.22140057390992, lng: 16.348647086855475 }}
      options={defaultOptions}
    >
      <CurrentLocation
        position={{ lat: 48.22140057390992, lng: 16.348647086855475 }}
      />
    </GoogleMap>
  )
}
