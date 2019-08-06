import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import loadable from '@loadable/component';

import './index.css';

const Images = loadable(() => import('./Images'));

const Artists = lazy(() => import('./Artists'));
// Performers are wrapped into same Suspense with Artists,
// so they will appear on page simultaneously
const Performers = lazy(() => import('./performers'));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<p>Loading...</p>}>
          <Artists />
          <Performers />
          <Images />
        </Suspense>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
