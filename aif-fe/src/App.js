import React, { Component } from 'react';
import store from './store/conigureStore'
import {Provider} from 'react-redux'
import './App.css';
import AIFContainer from './containers/AIFContainer/container'
import Application from './containers/Applications/container'
import {BrowserRouter as Router , Route}  from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path="/" component={AIFContainer}/>
                    <Route exact  path="/applications" component={Application}/>
                </div>
            </Router>
        </Provider>
    );
  }
}
export default App;
