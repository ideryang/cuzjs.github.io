'use strict';

var Select = cuz.Select;
var Button = cuz.Button;
var Input = cuz.Input;

var App = '\nconst selectState = [\n  {value: \'one\',label:\'One\'},\n  {value: \'two\',label: \'Two\'},\n  {value: \'three\',label: \'Three\'},\n  {value: \'four\',label: \'Four\'},\n  {value: \'five\',label: \'Five\'},\n  {value: \'six\',label: \'Six\'}\n];\n\nconst SelectStatesInstance = React.createClass({\n\n  getInitialState(){\n    return {\n      searchable: true,\n      disabled: false\n    };\n  },\n\n  focusStateSelect() {\n    this.refs.stateSelect.focus();\n  },\n\n  toggleSearchable(){\n    this.setState({\n      searchable:!this.state.searchable\n    });\n  },\n\n  toggleDisabled() {\n    this.setState({\n      disabled:!this.state.disabled\n    });\n  },\n\n  render() {\n    return (\n      <div>\n        <h3>States</h3>\n        <Select\n        ref="stateSelect"\n          name="base-select"\n          value="one"\n          options={selectState}\n          searchable={this.state.searchable}\n          disabled={this.state.disabled}\n          onChange={function(val){console.log(val)}}\n        />\n\n      <div style={{marginTop:10}}>\n        <Button bsSize="small" onClick={this.focusStateSelect}>Focus Select</Button>\n        <Input type="checkbox" label="Searchable" checked={this.state.searchable} onClick={this.toggleSearchable}/>\n        <Input type="checkbox" label="disabled" checked={this.state.disabled} onClick={this.toggleDisabled}/>\n      </div>\n      </div>\n      );\n  }\n});\n\nReactDOM.render(\n  <SelectStatesInstance />,mountNode);\n';

ReactDOM.render(React.createElement(ReactPlayground, { codeText: App }), document.getElementById('select-states'));