import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NavBar from './components/NavBar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Provider store={store}>
          <BrowserRouter >
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />

              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  )
}

export default App
