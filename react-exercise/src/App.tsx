import React from 'react';

import './stylesheets/styles.scss';
import Blogs from './app/blogs/Blogs';
import Header from './app/shared/components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Blogs />
    </div>
  );
}

export default App;
