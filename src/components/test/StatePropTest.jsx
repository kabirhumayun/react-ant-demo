import React, {Component} from 'react';
import './antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { tsConstructorType } from '@babel/types';

class StatePropTest extends Component {

    constructor() {

        super()
        this.state = {
            message1: 'Assalaam u alaikum',
            message2: ' wa rahmatulahe wa barakatuhu',
            message3: "May Allah SWT shower you with His infinite blessings"
        }
    }

    greetingMessage = () => {
        console.log(this.state.message1 + this.state.message2)
    }

    blessingMessage = (message) => {
        console.log(message)
    }

    render() {
        return(
            <div>
                <Button type="primary" icon="search" onClick={this.greetingMessage}>
                    Search
                </Button>
                <AnotherClass message = {this.state.message3} methodCall={this.blessingMessage}/>
            </div>
        );
    }
}

class AnotherClass extends Component {
    render() {
        return(
            <div>
                <Button type="primary" icon="search" onClick={() => this.props.methodCall(this.props.message)}>
                    Search
                </Button>
            </div>
        )
    }
}
export default StatePropTest