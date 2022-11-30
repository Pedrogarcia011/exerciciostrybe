import React from "react";
import Greeting from "./Props";


  class App extends React.Component {
    render () {
      return (
        <main>
          <Greeting name= 'Pedro' lastName= 'Garcia' />
        </main>
      )
    }
  }

export default App;
