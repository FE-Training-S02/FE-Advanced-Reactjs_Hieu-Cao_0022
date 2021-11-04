import React from 'react';

import Blogs from './blogs/Blogs';
import Header from './shared/components/Header';
import '../stylesheets/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Blogs />
    </div>
  );
}

export default App;
