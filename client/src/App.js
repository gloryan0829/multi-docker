import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <h1 className="App-title">멀티 도커 수정하기 #1 issue !!</h1>
              <Link to="/">홈</Link><br/>
              <Link to="/otherpage">다른 페이지</Link>
            <div>
              <Route exact path="/" component={Fib} />
              <Route path="/otherpage" component={OtherPage} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;