import React from "react";
import Sidebar from "./components/sideBar.js";
import TopBar from "./components/form.js";

//Put the overall module in here
export default class App extends React.Component {
  constructor(props) {
    super(props);
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

