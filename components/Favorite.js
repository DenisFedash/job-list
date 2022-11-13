import Checkbox from '@mui/material/Checkbox'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

export default function Favorite() {
  return (
    <div>
      <Checkbox
        icon={<StarBorderIcon />}
        checkedIcon={<StarIcon style={{ fill: 'grey' }} />}
      />
    </div>
  )
}
