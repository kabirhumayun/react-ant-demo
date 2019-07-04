import React, {Component} from 'react'

class StateProp extends Component {

    constructor() {
        super()
        this.state = {

            message1: 'Assalaam u alaikum',
            message2: 'wa rahmatul lahe wa barakatuhu',
            message3: 'May Allah SWT shower you with His blessings'
        }
    }

    greetingMessage = () => {
        console.log(this.state.message1 + " " + this.state.message2)
    }

    blessingMessage = (blessingMessage) => {
        console.log(blessingMessage)
    }

    render() {
        return(
            <div>
                <input type='button' value='First Message' onClick={this.greetingMessage}/>
                <AnotherClass message = {this.state.message3} methodCall = {this.blessingMessage}/>
            </div>    
        );
    }
    
}

class AnotherClass extends Component {
    
    render() {
        return(
            <div>
                <input type='button' value='Message' onClick={() => this.props.methodCall(this.props.message)}/>
            </div>

        )
    }

}
export default StateProp