import React, { Component } from 'react';
import Select from 'react-select';

class SelectSettings extends Component {

    renderOption(key, all_settings) {
      let text = all_settings[key]["example_name"]
      return <option key={key} value={key}>{text}</option>
    }

    render() {

      let all_settings = this.props.all_example_settings
      let keys = Object.keys(this.props.all_example_settings)
      keys.sort()

      let options = keys.map(k => { return {value: k, label: all_settings[k]["example_name"] }})


      let k = this.props.selected_option
      let value = {value: k, label: all_settings[k]["example_name"]}
      return (
        <div>
          <Select options={options}  onChange={this.props.onChange} value={value}/>
        </div>
      )
    }
  }

  export default SelectSettings