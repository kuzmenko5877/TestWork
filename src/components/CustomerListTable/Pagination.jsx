import ReactPaginate from "react-paginate";
import './Pagination.css'
export const Pagination = ({ onChangePage }) => {
  return (
      <>
          <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={(event) => onChangePage(event.selected + 1)}
              pageRangeDisplayed={8}
              pageCount={4}
              previousLabel="<"
              renderOnZeroPageCount={null}
              className={"pagination"}
          />
      </>
  )
}
