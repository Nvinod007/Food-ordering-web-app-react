import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componants/Header';
import Body from './componants/Body';

const root = ReactDOM.createRoot(document.getElementById('root'))

const Title = () => {
  return <h1>I am title</h1>
}

const AppComponant = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

root.render(<AppComponant />)