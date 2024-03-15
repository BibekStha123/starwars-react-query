import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Planets from "./components/Planets";
import People from "./components/People";

function App() {

  const [page, setPage] = useState('planets');

  return (
    <div className="App">
      <h2>Star Wars</h2>
      <Navbar click={setPage}/>
      <div className="contents">
        {page == 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  )
}

export default App
