import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useAllJobsContext } from '../pages/AllJobs'

const PageBtnContainer = () => {
    const { data: { numOfPages, currentPage } } = useAllJobsContext()
    const pages = Array.from({ length: numOfPages, }, (_, index) => index + 1)

    const handlePageChange = (pageNumber) => {

    }

    return (
        <Wrapper>
            <button className='btn prev-btn'>
                <HiChevronDoubleLeft />
                prev
            </button>
            <div className="btn-JobsContainer">
                {pages.map((pageNumber) => {
                    return <button
                        className={`btn page-btn ${pageNumber === currentPage && 'active'}`}
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                })}
            </div>
            <button className='btn next-btn'>
                <HiChevronDoubleRight />
                next
            </button>


        </Wrapper>
    )
}

export default PageBtnContainer