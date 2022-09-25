import { Route, Routes } from 'react-router-dom'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

import RestaurantContainer from './containers/RestaurantContainer'
import Footer from './components/Footer'
import HeaderBar from './components/HeaderBar'
import CalNumber from './containers/CalNumber'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a, a:visited, a:hover, a:focus, a:active {
    text-decoration: none;
    text-transform: capitalize;
    color: black;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderBar />
      <Routes>
        <Route path='/' element={<RestaurantContainer />} />
        <Route path='test' element={<CalNumber />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
