import React from "react";
import Sidebar from "./components/sideBar.js";
import TopBar from "./components/form.js";
import ReactDOM from 'react-dom';
import axios from "axios";

//Put the overall module in here
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topBar: [],
      botBar: []
    }
  }

  componentDidMount() {
    axios.get('/api/sidebar').then(posts => {
      this.setState({
        topBar: posts.data[0],
        botBar: posts.data[1]
      })
      console.log('topBar', this.state.topBar);
      console.log('botBar', this.state.botBar)
    })
  }

  render() {
    return ( 
      <div>
        <aside id="ASIDE_1">
          <div id="DIV_2">
            <TopBar />
          </div>
        </aside>
      </div>
    )
  }
}

