import axios from "axios";
import{ 
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE
} from '../constants/action-types';



export function SignupUser(username, password, email, firstname, lastname) {
    return (dispatch) => {
       dispatch({ type: SIGNUP });
        axios.post('http://localhost:5001/user/signup', {
            username: username,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname
        })   
          .then((res) =>{
                dispatch({ type: SIGNUP_SUCCESS, payload: res });
          })
          .catch((error)=> {
                dispatch({ type: SIGNUP_FAILURE, payload: error });
          })
    }
  }


export function LoginUser(username, password) {
    return (dispatch) => {
       dispatch({ type: LOGIN });
        axios.post('http://localhost:5001/user/login', {
            username: username,
            password: password
        })   
          .then((res) =>{
                localStorage.setItem('infoUser', JSON.stringify(res.data.infoUser));
                dispatch({ type: LOGIN_SUCCESS, payload: res });
          })
          .catch((error)=> {
                dispatch({ type: LOGIN_FAILURE, payload: error });
          })
    }
  }

  export function LogoutUser() {
    return (dispatch) => {
       dispatch({ type: LOGOUT });
        axios.post('http://localhost:5001/user/logout')   
          .then((res) =>{
              localStorage.clear();
              //localStorage.removeItem('infoUser');
              dispatch({ type: LOGOUT_SUCCESS, payload: res });
          })
          .catch((error)=> {
              dispatch({ type: LOGOUT_FAILURE, payload: error });
          })
    }
  }
