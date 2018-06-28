import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { LoginUser } from '../redux/actions/user-actions';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.LoginUser(this.state.username, this.state.password);    
  }

  
  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value
    }, () => {
      //console.log(this.state);
    });
  }

  render() { 
    
    const infoUser = this.props.infoUser;
    if(Object.keys(infoUser).length !== 0){
      return <Redirect to='/'/>;
  }else {
   
      return (
        <div className='login-form'>
          {/*
            Heads up! The styles below are necessary for the correct render of this example.
            You can do same with CSS, the main idea is that all the elements up to the `Grid`
            below must have a height of 100%.
          */}
          <style>
            {`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
          `}
          </style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src={require('../logo.svg')} />
              {' '}Sign in
            </Header>
            <Form size='large' onSubmit={this.handleClick}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  type="text" 
                  name="username" 
                  
                  placeholder='User Name' 
                  onChange={ this.handleChange } 
                  value={ this.state.username }
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  type='password'
                  name="password" 
                  
                  placeholder='Password' 
                  onChange={ this.handleChange } 
                  value={ this.state.password }
                />

                <Button color='teal' fluid size='large' type="submit">Login</Button>
              </Segment>
            </Form>
            <Message>
              New to us ? <Link to="/signup">Sign up</Link>
            </Message>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    infoUser: state.userStore.infoUser
  }
}

export default connect(mapStateToProps, { LoginUser })(Login);
