import axios from 'axios'
import { useEffect, useState } from 'react'

export function BookDetailScreen(props) {
    const [book,setBook]=useState({})
    useEffect(()=> {
    axios.get('https://www.googleapis.com/books/v1/volumes/'+props.match.params.id).then(res=> {
        console.log(res.data.volumeInfo)
        setBook(res.data.volumeInfo)
    })
},[])
    return (
        <div>
            {
            book && book.imageLinks && book.imageLinks.smallThumbnail &&
            <main class='row'><div className='col-md-4'><img className="image-responsive" style={{width:'100%',margin:'10px'}} src={book.imageLinks.smallThumbnail} /></div>
            <div className='col-md-8'><h1 className='bookTitle'>{book.title}</h1>
            <div><h3>Authors :</h3>{book.authors.map(author=>
                <h5>{author}</h5>
                )}
            </div>
            <div ><h3>Language: {book.language} </h3>
             <h3>MaturityRating :{book.maturityRating}</h3></div>
             <h3>Page Count: {book.pageCount}</h3>
             <h3>Print Type: {book.printType}</h3>
             <h3>Published Date: {book.publishedDate}</h3>
             <h3>Publisher: {book.publisher}</h3>
             </div>
           
            
           </main>
}
</div>
    )
}