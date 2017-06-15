import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './components/home/Home';
import Chat from './components/chat/Chat';
import styles from './App.css';
const store = configureStore();
const history = createBrowserHistory();

class App extends Component {
  componentWillReceiveProps(nexProps) {
    console.log('nextProps: ', nexProps);
  }
  render() {
    return (
      <main>
        <Provider store={store}>
          <BrowserRouter history={history}>
            <div className={styles.wrapper}>
              <Route exact path="/" component={Home} />
              <Route path="/chat" component={Chat} />
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;
