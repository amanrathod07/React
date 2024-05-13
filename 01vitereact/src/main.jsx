import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Myapp(){
  return (
    <>
     <p>aman</p>
    <h1>anjani saw</h1>
    </>
  )
}

  // new element it also returns
  // const anotherElement = (
  //   <a href="https://google.com" target='_blank'>Visit google</a>
  // )

  const anotheruser = "chai aur react"; 

  const ReactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'
   
  )
  
 

ReactDOM.createRoot(document.getElementById('root')).render(
  
 ReactElement
)


// here we have not written the custom render the render part is done by react itself