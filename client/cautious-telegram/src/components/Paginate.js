
import PageItem from 'react-bootstrap/PageItem'
import Pagination from 'react-bootstrap/Pagination'

const Paginate = ({postsPerPage, totalGenres, paginate}) => {
    const pageNumbers = [];

    for (let i=1; i <= Math.ceil(totalGenres / postsPerPage); i++) {

    // pageNumbers.push(i)
    pageNumbers.push(
        <Pagination.Item onClick={() => {paginate(i); }} key={i} >
          {i}
        </Pagination.Item>,
      );
    }
  return (
    <>
      <Pagination style={{marginTop: '2rem'}}>{pageNumbers}</Pagination>
    <br />
    </>
  )
}

export default Paginate