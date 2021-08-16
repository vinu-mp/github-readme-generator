import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

let marked = require("marked");

const App = () => {
  const [markdown, setMarkdown] = useState('');

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setMarkdown(event.target.value);
  }

  return (
    <div className="readme">
      <header className="header">
        <div className="header_logo">Readme</div>
      </header>
      <main className="rg_container h-100">
        <div className="row m-0 h-100">
          <div className="monaco_wrapper col-md-6">
          </div>
          <div className="preview_wrapper col-md-6">
          </div>
        </div>
      </main>
      <footer>

      </footer>
      {/* <Header/>
        <main className="readme_inner">
          <div className="row">
            <div className="monaco_wrapper col-md-6">

            </div>
            <div className="preview_wrapper col-md-6">

            </div>
          </div>
        </main>
      <Footer/> */}
    </div>
    // <div className="App">
    //   <div className="container">
    //     <div className="row mt-4">
    //       <div className="col text-center">
    //         <h1>
    //           <Badge className="text-align-center" variant="light">
    //             Markdown Previewer
    //           </Badge>
    //         </h1>
    //       </div>
    //     </div>
    //     <div className="row mt-4">
    //       <div className="col-md-6">
    //         <div className="col text-center">
    //           <h4>
    //             <Badge className="text-align-center" variant="secondary">
    //               Markdown Input
    //             </Badge>
    //           </h4>
    //           <div className="mark-input inputStyle">
    //             <textarea value={markdown} onChange={(event) => onChangeHandler(event)} className="input inputStyle" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="col text-center">
    //           <h4>
    //             <Badge className="text-align-center" variant="secondary">
    //               Preview
    //             </Badge>
    //           </h4>
    //         </div>
    //         <div className="outputStyle" dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
export default App;
