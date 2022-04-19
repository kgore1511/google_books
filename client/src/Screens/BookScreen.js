import {useState} from 'react'
import axios from 'axios';  
import {GoogleLogout} from 'react-google-login'
import { Card } from 'react-bootstrap';  
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie'
export function BookScreen(props) {
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    const [apiKey, setApiKey] = useState("AIzaSyDlZxIfCC1ZCjzJCBMsx_0DKMJjtsien4I")
    const user=Cookie.get('userInfo')
    if(user==undefined) {
        alert("please Login...")
        props.history.push('/')
    }
    let header = {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": user==undefined?'':JSON.parse(user).accesstoken
 };

    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  

    const logout=()=> {
        Cookie.remove('userInfo')
        props.history.push('/')
    }

    function handleSubmit(event) {  
        event.preventDefault();  
        axios.post('/book/findBook',{data:book,email:JSON.parse(user).email},{headers:header}).then(res=>{
            setResult(res.data.items)
        })
    }  
    return (  
        <div>
            <form onSubmit={handleSubmit}>  
            <div className="card-header main-search" style={{width:'100%'}}>  
                <div className="row">  
                    <div >  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>    
                    <div >  
                        <input type="submit" style={{marginRight:'10px',alignContent:'end'}} value="Search" className="btn btn-primary" />  
                        </div>
                        <div className="ml-auto">
                            <GoogleLogout
                            clientId='860555463282-79huvv0rv93trtrnj3nbv7tt0g3giokr.apps.googleusercontent.com'
                            buttonText='Logout'
                            onLogoutSuccess={()=>logout()}
                            >
                            </GoogleLogout>
                         </div>
                </div>  
            </div>  
            <div className="container">  
                <div className="row">  
                    {result.map(book => (  
                        <div className="col-sm-2">  
                            <Card style={{ 'marginTop': '10px' }}>  
  
                              <Link to={'/Book/'+book.id}>  <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} /> </Link>  
                                <Card.Body>  
                                    <h5 className='card-title'><p>{book.volumeInfo.title !== undefined ? book.volumeInfo.title : ''}</p></h5>    
                                </Card.Body>  
                            </Card>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </form>  
        </div>
    )
}