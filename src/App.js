import React from 'react';
import './App.css';

import MonacoWindow from "./components/MonacoWindow"
import SelectSettings from "./components/SelectSettings"
import InfoPanel from "./components/InfoPanel"
import Header from "./components/Header"
import all_example_settings from "./data/all_example_settings.js"

import Typography from 'typography'
import stAnnesTheme from 'typography-theme-st-annes'
import injectFonts from 'typography-inject-fonts'

const theme = stAnnesTheme
const typography = new Typography(theme)
typography.injectStyles()
injectFonts(typography)


class App extends React.Component {

    state = {
      option_selection: "id_1"
    }

    constructor(props) {
        super(props);
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

      return <div className="App-main-div">
          <Header/>

          <SelectSettings onChange={this.handleChange} all_example_settings={all_example_settings} selected_option={this.state.option_selection}/>
          <div className="App-flex-container">
            <div className="App-flex-item">
              <h2>Code editor:</h2>
            <MonacoWindow editor_contents_string={editor_text}  option_selection={this.state.option_selection}/>
            </div>
            <div className="App-flex-item">
            <InfoPanel select_id={this.state.option_selection} />
            </div>
          </div>
      </div>;
    }
  }

export default App
