import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import MonacoWindow from "./components/MonacoWindow"
import SelectSettings from "./components/SelectSettings"



import InfoPanel from "./components/InfoPanel"
import all_example_settings from "./data/all_example_settings.js"

class App extends React.Component {

    // Want to use StaticQuery instead
    // https://www.gatsbyjs.org/docs/static-query/


    constructor(props) {
        super(props);
        this.state = {selection: "id_1"}
      }

    handleChange = (event) => {

        this.setState({selection: event.target.value})
    }

    render() {

    debugger;
    let settings_dict = all_example_settings[this.state.selection].settings_dictionary
    let settings_text = JSON.stringify(settings_dict, null, 4)

      return <div>
          <SelectSettings onChange={this.handleChange} all_example_settings={all_example_settings}/>
          <InfoPanel select_select_id={this.state.selection} />
          <MonacoWindow editor_contents_string={settings_text}/>
      </div>;
    }
  }

export default App
