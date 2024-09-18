import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
/*
function App() {
  return (
    <div>
      <h1>Hello Vite + React!</h1>
    </div>
  )
}
*/

/*
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  Children: 'Click me to visit Google'
}
*/

const anotherElement = (
  <a href='https://www.google.com' target='_blank'>
    Click me to visit Google
  </a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit Google'
)

ReactDom.createRoot(document.getElementById('root')).

  render(
    <App />
  )