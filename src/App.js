import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import StoreBuilder from './containers/StoreBuilder/StoreBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <StoreBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
