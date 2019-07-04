import React, {Component} from 'react';
import './antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class ButtonTest extends Component {

    constructor() {
        super()
        this.state = {

            message: "Assalaam u alaikum",
            message1: "wa rahmatullahe wa barakatuhu",
            message3: "Salaam!!!"
        }

        this.logmessage2 = this.logmessage2.bind(this)
    }

    logmessage = () => {
        console.log(this.state.message + " " + this.state.message1)
    }

    logmessage2(message3) {
        console.log(`Message for the prop tests - ${message3}`)
        console.log("Message for the prop test -> " + this.state.message3)
    }


    render() {

        return(
            <div className='button'>
                {/* <Button type="primary" shape="circle" icon="search" /> */}
                <Button type="primary" icon="search" onClick={this.logmessage}>
                Search
                </Button>
                <Button type="primary" icon="search" onClick={() => this.logmessage2(this.state.message3)}>
                Search
                </Button>
                {/* <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">
                Search
                </Button> */}
                <AnotherButton message={this.state.message3} logmessage={this.logmessage3}/>
            </div>
        )
    }
}

class AnotherButton extends Component {

    render() {

        return(
            <div className='button'>
                <Button icon="search" onClick={() =>this.props.logmessage(this.props.message)}>Search</Button>
            </div>
        )
    }
}
export default ButtonTest