import {useState} from 'react'
import { componentType } from '../types/BasicTypes';
import PaginationControl from './PaginationControl';
import {useDispatch} from 'react-redux'
import { paginationActions } from '../store/pagination-slice';

const Pagination = ({data,itemsPerPage,children}:{data:any[],itemsPerPage:number,children?:any}) => {

    const [currentPage, setCurrentPage] = useState(1);
    // Calc pages total number
    const totalPages = Math.ceil(data.length/itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const dispatch = useDispatch()
    
    let controlData:any = {
        currentPage:currentPage,
        totalPages:totalPages,
        // currentPageData
    }

    localStorage.setItem('paginationControls', JSON.stringify(controlData))
  
    // dispatch(paginationActions.storePaginationControls(controlData))
       
    return(
        <>
            {children(currentPageData)}
            <PaginationControl
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default Pagination