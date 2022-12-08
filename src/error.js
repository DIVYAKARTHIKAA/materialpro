import * as React from 'react'
//import ReactDOM from 'react-dom'



function Error() {
  return (
    <div>
      <City/>
      <Country/>
    </div>
  )
}

function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function City(name) {
  try {
    return <div>Hello, visit{name.toUpperCase()} </div>
  } 
  catch (error) {
    return <ErrorHandler error={error} />
  }
}
function Country(name) {
  try {
    return <div>Hello, visit{name.toUpperCase()} </div>
  } 
  catch (error) {
    return <ErrorHandler error={error} />
  }
  
}

export default Error;