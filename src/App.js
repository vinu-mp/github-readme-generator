import Badge from "react-bootstrap/Badge";
import './App.css';
import { useState } from 'react';
let marked = require("marked");

const App = () => {
  const [markdown, setMarkdown] = useState('');

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setMarkdown(event.target.value);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h4>
              <div className="mark-input inputStyle">
                <textarea value={markdown} onChange={(event) => onChangeHandler(event)} className="input inputStyle" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Preview
                </Badge>
              </h4>
            </div>
            <div className="outputStyle" dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
