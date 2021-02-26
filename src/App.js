import './App.css';
// import LeftCoin from './Components/LeftCoin/Left'
import Screen1 from './Components/SignUp1/CreateAcc'
import Screen2 from './Components/SignUp2/OpenBizA'
import Screen3 from './Components/SignUp3/LastReg'
import Screen4 from './Components/SignIn/access'
import DashPage from './Components/Dashboard/Dashboard'


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = function App() {
  return (
    
    <div className="page full-height">
      <Switch>
      <Route path="/dashboard" component={DashPage} />
      <Route path="/signup2" component={Screen2} />
      <Route path="/signup3" component={Screen3} />
      <Route path="/signin" component={Screen4} />
      <Route path="/" exact component={Screen1} />
      </Switch>      
    </div>

  )
}

export default App;
