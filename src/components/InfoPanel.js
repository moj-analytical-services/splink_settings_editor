import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

class InfoPanel extends React.Component {

  state = {
    md: null
  }


  // This is a way of fetching data asyncronously when props change
  // see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#fetching-external-data-when-props-change
  static getDerivedStateFromProps(props, state) {

    if (props.select_id !== state.prev_select_id) {
      return {
        md: null,
        prev_select_id: props.select_id,
      };
    }

    // No state update necessary
    return null;
  }



  async componentDidMount() {
    this._loadAsyncData(this.props.select_id)


  }


    async componentDidUpdate() {
      if (this.state.md === null) {
        this._loadAsyncData(this.props.select_id)
      }

    }

    render() {
      return <div>
        <ReactMarkdown source={this.state.md}/>
        {this.props.select_id}</div>;
    }

    _loadAsyncData(id) {
      this._asyncRequest = import(`../md/${id}.md`).then(f => {
        return fetch(f.default)}
      ).then(r => {
        return r.text()
      }
        ).then(t => {
          this._asyncRequest = null;
          this.setState({md:t});
        })



    }


  }

export default InfoPanel