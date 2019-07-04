import React, {Component} from 'react';

class PropTest extends Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from props...",
         content: "Content from props..."
      }
   }

   logmessage = () => {
       console.log("Header message displayed by clicking on the button ..." + this.state.header)
   }
   render() {
      return (
         <div>
            <Header headerProp = {this.state.header} logmessage = {this.logmessage}/>
            <Content contentProp = {this.state.content}/>
            <input type='button' value='Display Log' onClick={this.logmessage}/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <input type='button' value='Header Display Log' onClick={this.props.logmessage}/>
         </div>
      );
   }
}
class Content extends Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
export default PropTest;