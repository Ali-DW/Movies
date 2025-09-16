import React from "react";
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Paginationx = ({getPageMovies , npages}) => {

    const ChangingPage = (data) => {
        getPageMovies(data.selected + 1);
    }
    return (
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            onPageChange={ChangingPage}
            pageCount={npages} // page count
            marginPagesDisplayed={2} // number of pages to display on the margin
            pageRangeDisplayed={2} // number of pages to display
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            renderOnZeroPageCount={null}
        />
    );
}

export default Paginationx;