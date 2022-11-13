import { Marker } from '@react-google-maps/api'

export default function CurrentLocation({ position }) {
  return <Marker position={position} />
}
