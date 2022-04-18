import axios from 'axios';
import {GoogleLogin} from 'react-google-login'
const clientId="860555463282-79huvv0rv93trtrnj3nbv7tt0g3giokr.apps.googleusercontent.com";
export function homeScreen(props) {
    const onSuccess =(res) => {
        console.log("Login Success Current User :" ,res.profileObj.email)
        console.log(res.tokenId)
        //console.log("token id is :",res.tokenId)
        var tokenId=res.tokenId
        axios.post('/api/googlelogin',{tokenId:tokenId}).then(res=> {
            alert("Logged in successfully")
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
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </div>
    )
}