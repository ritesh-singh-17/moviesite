import React from 'react'
import Movies from './Movies'
import SinglePage from './SinglePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './Form'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/moviesite/' element={<Movies />}></Route>
          <Route path='/moviesite/singlepage/:id' element={<SinglePage />}></Route>
          <Route path='/moviesite/ticketform/:id' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
