import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store'
import {
  fetchOptions,
  fetchRates,
} from './store/slices/settings/settingsServices'
import { AppRoutes } from './components/AppRoutes/AppRoutes'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import ScrollButton from './components/ScrollButton/ScrollButton'
import Footer from './components/Footer/Footer'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchOptions())
    dispatch(fetchRates())
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
