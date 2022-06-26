import React from "react";

import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

export default function Pagination({ currentPage, onChangePage }) {
  //   const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % items.length;
  //     console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
  //     setItemOffset(newOffset);
  //   };

  return (
    <div>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
