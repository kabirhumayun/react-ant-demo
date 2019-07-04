import React, {Component} from 'react'

class TodoApp1 extends Component {
    render() {
        return(
            <div>
                <LoginComponent/>
            </div>
        )
    }
}
class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }


    handleUsernameChange(event) {
        console.log(event.target.name)
        this.setState({
            username: event.target.name
        })
    }

    handlePasswordChange(event) {
        console.log(event.target.name)
    }

    handleUsernameChange(event) {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.name
        })
    }

    render() {
        return(
            <div>
                User Name: <input type='text' name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type='password' name="password" value={this.state.password} onChange={this.handleChange}/>
                <button>Login</button>
            </div>
        )
    }
}
export default TodoApp1