import React from 'react';

import Select from 'react-select';

import ReactMarkdown from 'react-markdown'

class KeyExplore extends React.Component {

    state = {
        schema: null,
        selected_option: {}
    }


    componentDidMount() {
        let url =
            "https://raw.githubusercontent.com/moj-analytical-services/splink/master/splink/files/settings_jsonschema.json"

        let p1 = fetch(url).then(res => res.json())

        p1.then(data => {
            this.schema = data
            this.setState({ selected_option: { value: 'link_type', label: 'link_type',  is_comparison_col: false} })
        }

        )
    }

    handleChange = selectedOption => {

        let schema = this.state.schema;

        this.setState(
            {
                schema: schema,
                selected_option: selectedOption
            }
        );

    };


    schemaToOptions() {
        if (!(this.schema)) {
            return []
        }
        let keys = Object.keys(this.schema.properties)
        keys = keys.filter(k => k !== "$schema")
        keys = keys.filter(k => k !== "$id")
        let options1 = keys.map(k => {return {label:k, value:k, is_comparison_col: false}})

        keys = Object.keys(this.schema.properties.comparison_columns.items.properties)
        keys = keys.filter(k => k !== "$schema")
        keys = keys.filter(k => k !== "$id")
        let options2 = keys.map(k => {return {label:k, value:k, is_comparison_col: true}})

        return options1.concat(options2)
    }

    optionToSchemaSection() {
        if (!(this.schema)) {
            return {}
        }

        let op = this.state.selected_option
        if (op.is_comparison_col) {
            return this.schema.properties.comparison_columns.items.properties[op.value]
        } else {
            return this.schema.properties[op.value]
        }


    }

    markdownFromSchemaSection(ss) {

        let is_comparison_col = this.state.selected_option.is_comparison_col
        let settings_key = this.state.selected_option.value

        let keys = Object.keys(ss)
        let parts = []
        if ('title' in ss) {
             parts.push(`**Summary**: ${ss['title']}`)
        }
        if ('description' in ss) {
            parts.push(`**Description**: ${ss['description']}`)
        }

        if ('default' in ss) {
            parts.push(`**Default value if not provided**: ${ss['default']}`)
        }

        if ('type' in ss) {
            parts.push(`**Data type**: ${ss['type']}`)
        }


        if ('enum' in ss) {
            let enums = ss['enum'].join(", ")
            parts.push(`**Takes one of the following values**: ${enums}`)
        }

        if ('examples' in ss) {
            let quote = ''
            if (ss["type"] === "string"){
                quote = '"'
            }

            let code_example = []
            if (this.state.selected_option.is_comparison_col) {
                code_example.push(`settings = {`)
                code_example.push(`    "comparison_columns": [`)
                code_example.push(`        {`)
                code_example.push(`    "${settings_key}": ${quote}${ss['examples'][0]}${quote}`)
                code_example.push(`        }`)
                code_example.push(`    ]`)
                code_example.push(`}`)
                code_example = code_example.join("\n")

            } else {
                code_example.push(`settings = {`)
                code_example.push(`    "${settings_key}": ${quote}${ss['examples'][0]}${quote}`)
                code_example.push(`}`)
                code_example = code_example.join("\n")

            }
            // type default enum

            parts.push(`**Example**: \n  \`\`\`\` \n ${code_example}  \n \`\`\`\` `)
        }


        return parts.join("\n\n")
    }

    render() {

        let options = this.schemaToOptions()
        let schemaSection = this.optionToSchemaSection()
        let md = this.markdownFromSchemaSection(schemaSection)

        return <div><h2>Setting dictionary key explorer</h2>
            <Select options={options} value={this.state.selected_option} onChange={this.handleChange} />
            <br/>
            <ReactMarkdown source={md}/>
        </div>


    }

}

export default KeyExplore