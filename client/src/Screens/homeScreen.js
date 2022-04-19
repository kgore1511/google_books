import axios from 'axios';
import {react} from 'react'
import {GoogleLogin} from 'react-google-login'
import Cookies from 'js-cookie'
const clientId="860555463282-79huvv0rv93trtrnj3nbv7tt0g3giokr.apps.googleusercontent.com";
export function HomeScreen(props) {
    console.log(process.env.key)
    if(Cookies.get('userInfo')) props.history.push('/search')
    const onSuccess =(res) => {
        console.log("Login Success Current User :" ,res.profileObj.email)
        var tokenId=res.tokenId
        axios.post('/user/googlelogin',{tokenId:tokenId}).then(res=> {
            Cookies.set('userInfo',JSON.stringify(res.data))
            props.history.push('/search')
        })
    }
    const onFailure=(res)=> {
        console.log("Login Failure "+res)
    }
    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={(e)=>onSuccess(e)}
            onFailure={(e)=>onFailure(e)}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </div>
    )
}