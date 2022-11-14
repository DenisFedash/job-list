import { Pagination } from "@mui/material";

export default Pagination({currentPagr, jobsPerPage, totalJobs, onPaginate, onDecreasePage, onIncreasePage}){
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i += 1){
        pageNumbers.push(i)
    }
    return <nav>
    <ul></ul></nav>
}