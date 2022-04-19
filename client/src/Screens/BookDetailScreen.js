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
            <main class='row'><div className='col-md-4'><img className="image-responsive" style={{width:'90%',margin:'10px'}} src={book.imageLinks.smallThumbnail} /></div>
            <div className='col-md-8'><h1 className='bookTitle'>{book.title}</h1>
            <div><span className='span1'>Authors :</span><span className='span2'>{book.authors && book.authors.map(author=>
                <span>{author}</span>
                )}
                </span>
            </div>
            <div><span className='span1'>Language: </span><span className='span2'>{book.language}</span>
             <div><span className='span1'>MaturityRating :</span><span className='span2'>{book.maturityRating}</span></div>
             <div> <span className='span1'>Page Count:</span><span className='span2'> {book.pageCount}</span></div>
             <div> <span className='span1'>Print Type:</span><span className='span2'> {book.printType}</span></div>
             <div> <span className='span1'>Published Date:</span><span className='span2'>{book.publishedDate}</span></div>
             <div> <span className='span1'>Publisher:</span><span className='span2'> {book.publisher}</span></div>
             </div>
           </div>
            
           </main>
}
</div>
    )
}