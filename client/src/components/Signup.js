import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { SignupUser } from '../redux/actions/user-actions';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleClick = (e) => {
    e.preventDefault();
    const { username, password, email, firstname, lastname } = this.state;
    this.props.SignupUser(username, password, email, firstname, lastname);
  }

  
  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value
    }, () => {
      //console.log(this.state);
    });
  }

  render() { 

    const registered = this.props.registered;
    if(registered){
      console.log("New User has been registered");
      return <Redirect to='/login'/>;

    }
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
            {' '}SignUp
          </Header>
          <Form size='large' onSubmit={this.handleClick}>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                type="text" 
                name="username" 
                label='User name' 
                placeholder='Your User Name' 
                onChange={ this.handleChange } 
                value={ this.state.username }
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                type='password'
                name="password" 
                label='Password' 
                placeholder='Your Password' 
                onChange={ this.handleChange } 
                value={ this.state.password }
              />
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                type='email'
                name="email" 
                label='Email' 
                placeholder='Your Email' 
                onChange={ this.handleChange } 
                value={ this.state.email }
              />
              <Form.Input
                fluid
                icon='write'
                iconPosition='left'
                type='text'
                name="firstname" 
                label='Firstname' 
                placeholder='Your Firstname' 
                onChange={ this.handleChange } 
                value={ this.state.firstname }
              />
              <Form.Input
                fluid
                icon='write'
                iconPosition='left'
                type='text'
                name="lastname" 
                label='Lastname' 
                placeholder='Your Lastname' 
                onChange={ this.handleChange } 
                value={ this.state.lastname }
              />

              <Button color='teal' fluid size='large' type="submit">Signup</Button>
            </Segment>
          </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    registered: state.userStore.registered
  }
}

export default connect(mapStateToProps, { SignupUser })(Signup);
