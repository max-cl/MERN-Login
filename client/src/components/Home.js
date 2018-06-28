import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";


const Home = (props) => {
      
    const infoUser = props.infoUser;
    if(Object.keys(infoUser).length === 0){
        console.log("Zona restringuida debes logearte!!");
        return <Redirect to='/login'/>;
    }else {
        return (
            <div>
            <h2>Welcome Mr. {props.infoUser.firstname} {props.infoUser.lastname}</h2>       
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        infoUser: state.userStore.infoUser
    }
}
  
export default connect(mapStateToProps, {  })(Home);
