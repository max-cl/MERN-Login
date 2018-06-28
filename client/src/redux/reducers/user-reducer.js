import{ 
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE
} from '../constants/action-types';


    let infoUser = localStorage.getItem('infoUser');
    const initialState = {
        registered: false,
        infoUser: infoUser ? infoUser : {},
        loading: false,
        loaded: false,
        error: null
    }
    
  
    export default (state = initialState, action) => {
      const payload = action.payload
    
       switch (action.type) {
        case SIGNUP:    
          return {
            ...state,
            loading: true,
            loaded: false
          }
  
        case SIGNUP_SUCCESS:
          return {
            ...state,
            registered: true,
            loading: false,
            loaded: true,
            error: null
          }   
  
        case SIGNUP_FAILURE:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: payload
          }

        case LOGIN:    
          return {
            ...state,
            loading: true,
            loaded: false
          }
  
        case LOGIN_SUCCESS:
          return {
            ...state,
            infoUser: payload.data.infoUser,
            registered: false,
            loading: false,
            loaded: true,
            error: null
          }   
  
        case LOGIN_FAILURE:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: payload
          }
        
        case LOGOUT:    
          return {
            ...state,
            loading: true,
            loaded: false
          }
  
        case LOGOUT_SUCCESS:
          return {
            ...state,
            infoUser: {},
            loading: false,
            loaded: true,
            error: null
          }   
  
        case LOGOUT_FAILURE:
          return {
            ...state,
            loading: false,
            loaded: true,
            error: payload
          }    
  
        default:
          return state
      }
    }