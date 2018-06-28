import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { LogoutUser } from '../redux/actions/user-actions';
import { Button, Menu } from 'semantic-ui-react';

class MenuPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: 'home'
        };
        
        this.handleItemClick = this.handleItemClick.bind(this);
        this.logout = this.logout.bind(this);
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    logout = () => {
       this.props.LogoutUser();
        return <Redirect to='/login'/>
    }


    render() {

        const { activeItem } = this.state;
        const infoUser = this.props.infoUser;
        if(Object.keys(infoUser).length === 0){
            return (
                <Menu size='small' inverted>
                    <Menu.Menu position='right'>
                    <Menu.Item>
                    <Button as={Link} to='/login' name='login' active={activeItem === 'login'} onClick={this.handleItemClick} primary>Login</Button>       
                    </Menu.Item>
                    </Menu.Menu>
                </Menu>
            )
        }else {

            return (
            <Menu size='small' inverted>
                <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                <Menu.Item>       
                <Button onClick={this.logout} primary>Logout</Button>        
                </Menu.Item>
                </Menu.Menu>
            </Menu>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        infoUser: state.userStore.infoUser
    }
  }
  
export default connect(mapStateToProps, { LogoutUser })(MenuPage);