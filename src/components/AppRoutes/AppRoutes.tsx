import { Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/Main/MainPage'
import AutoParts from '../../pages/AutoParts/AutoParts'
import Details from '../../pages/Details/Details'
import About from '../../pages/About/About'
import Delivery from '../../pages/Delivery/Delivery'
import NoResults from '../NoResults/NoResults'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="/parts" element={<AutoParts />} />
        <Route path="/parts/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="*" element={<NoResults />} />
        <Route path="/about/*" element={<NoResults />} />
        <Route path="/delievery/*" element={<NoResults />} />
      </Route>
    </Routes>
  )
}
