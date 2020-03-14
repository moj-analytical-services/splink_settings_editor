import React from 'react';
import * as monaco from 'monaco-editor'



export const EditorContainer = (props) => {
  return <div
          id="editor-container"
          style={{
            width: props.width ? props.width : "500px",
            height: props.height ? props.height : "500px",
          }}></div>
};

class MonacoWindow extends React.Component {
  componentDidMount() {
    let url =
      "https://raw.githubusercontent.com/moj-analytical-services/splink/master/splink/files/settings_jsonschema.json"

    let p1 = fetch(url).then(res => res.json())

    p1.then(data => {

      let my_schema = data
      let text_value = this.props.editor_contents_string

      this.monaco = monaco

      var modelUri = this.monaco.Uri.parse("a://b/foo.json") // a made up unique URI for our model
      var model = this.monaco.editor.createModel(text_value, "json", modelUri)

      this.monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: [
          {
            uri: url, // id of the first schema
            fileMatch: [modelUri.toString()], // associate with our model
            schema: my_schema
          },
        ],
      })

      this.editor = this.monaco.editor.create(
        document.getElementById("editor-container"),
        {
          value: text_value,
          language: "json",
          model: model
        }
      )

      this.model = model


    })
  }

  componentDidUpdate(prevProps) {
    this.editor.setValue(this.props.editor_contents_string)

  }

  render() {
    return (
      <span>
        <EditorContainer className="monaco-window" />
      </span>
    )
  }
}

export default MonacoWindow