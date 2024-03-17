import { useState } from 'react'
import './App.css'
import { fetchUserDetails } from './axios'

function App() {

  return (
    <>
      <div>
        <h1>GitHub User</h1>
        <div id="user">
            
        </div>
      </div>
    </>
  )
}

export default App
fetchUserDetails(document.querySelector('#user'), "kayothyerre");
