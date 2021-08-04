import React from 'react'
import { Counter } from './components/Counter'
import { CounterwithHook } from './components/CounterwithHook'
import { Form } from './components/Form'
import { Login } from './components/Login'
import { Users } from './components/Users'
import { BasicTypes } from './typescript/BasicTypes'
import { Functions } from './typescript/Functions'
import { LiteralObjects } from './typescript/LiteralObjects'

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción Typescript a React</h1>
      <hr />
      {/* <BasicTypes />
      <hr />
      <LiteralObjects />
      <hr />
      <Functions />
      <hr />
      <Counter />
      <hr />
      <CounterwithHook /> */}
      {/* <Login/> */}
      {/* <Users/> */}
      <Form />
    </div>
  )
}

export default App;