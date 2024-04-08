import React from 'react';
import BrotherA from './components/BrotherA';
import BrotherB from './components/BrotherB';
import { Provider } from './provider';

class BApp extends React.Component {
    state = {
      message: 'Hello World'
    }
  
    changeMessage = (message) => {
      this.setState({
        message: message
      })
    }

    render() {
      return (
        <Provider value={this.state.message}>
        <div>
          {/* <BrotherA changeMessage={this.changeMessage} />
          <BrotherB message={this.state.message} /> */}
          <BrotherB />
       </div>
       </Provider>
      )
      }
  }


export default BApp;