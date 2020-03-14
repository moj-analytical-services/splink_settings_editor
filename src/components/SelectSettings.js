import React, { Component } from 'react';

class SelectSettings extends Component {

    renderOption(key, all_settings) {
      let text = all_settings[key]["example_name"]
      return <option key={key} value={key}>{text}</option>
    }

    render() {

      let all_settings = this.props.all_example_settings
      let keys = Object.keys(this.props.all_example_settings)
      return (
        <div>
          <label htmlFor="select1" >Select example settings: </label>
          <select  onChange={this.props.onChange} defaultValue={this.props.selected_option}>
            {keys.map(key => this.renderOption(key, all_settings))}
          </select>

        </div>
      )
    }
  }

  export default SelectSettings