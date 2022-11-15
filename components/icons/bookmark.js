import Checkbox from '@mui/material/Checkbox'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export default function BookmarkCard() {
  return (
    <div className="hidden sm:block ml-4 cursor-pointer ">
      <Checkbox
        icon={<BookmarkBorderIcon style={{ fill: 'grey' }} />}
        checkedIcon={<BookmarkIcon style={{ fill: 'grey' }} />}
      />
    </div>
  )
}
