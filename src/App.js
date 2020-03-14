import React, {Component} from 'react';
import './App.css';

import MonacoWindow from "./components/MonacoWindow"
import SelectSettings from "./components/SelectSettings"
import InfoPanel from "./components/InfoPanel"
import all_example_settings from "./data/all_example_settings.js"

class App extends React.Component {

    constructor(props) {
        super(props);
        const initial_example_id = "id_1"
        this.state = {option_selection: initial_example_id}
        this.handleChange = this.handleChange.bind(this);
      }

    getTextFromId(id) {
      let settings_dict = all_example_settings[id]["settings_dictionary"]
      let settings_text = JSON.stringify(settings_dict, null, 4)
      return settings_text
    }

    handleChange = (event) => {
        let settings_id = event.target.value
        this.setState({option_selection: settings_id})
    }

    render() {

      let editor_text = this.getTextFromId(this.state.option_selection)

      return <div>
          <SelectSettings onChange={this.handleChange} all_example_settings={all_example_settings} selected_option={this.state.option_selection}/>
          <InfoPanel select_id={this.state.option_selection} />
          <MonacoWindow editor_contents_string={editor_text}/>
      </div>;
    }
  }

export default App
