import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function PaginationLine({
  currentPage,
  jobsPerPage,
  totalJobs,
  onPaginate,
  onDecreasePage,
  onIncreasePage,
}) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i += 1) {
    pageNumbers.push(i)
  }
  return (
    <nav className="py-5 sm:py-10">
      <ul className="list max-w-fit flex justify-center items-center gap-2 mx-auto px-5 rounded-lg">
        <button
          onClick={onDecreasePage}
          className=".btn__prev py-1 px-2 mr-10 relative hover:opacity-70"
        >
          <ArrowBackIosNewIcon />
        </button>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`btn py-2 px-2 text-xl leading-6 font-bold hover:opacity-70 ${
                currentPage === number && 'active'
              }`}
            >
              <button onClick={() => onPaginate(number)}>{number}</button>
            </li>
          )
        })}
        <button
          onClick={onIncreasePage}
          className=".btn__next py-1 px-2 ml-10 relative hover:opacity-70"
        >
          <ArrowForwardIosIcon />
        </button>
      </ul>
    </nav>
  )
}
