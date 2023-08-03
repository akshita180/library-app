import {React} from 'react'
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const BookCard = ({book}) => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(`/book${book.key}`);
    }

  return (

        <div className="card col-10 col-md-2 m-2" onClick={handleClick} >
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}  alt='loading'/>
          <div class="card-body">
            <p class="card-title">{book.title}</p>
          </div>
        </div>
   
  )
}

export default BookCard