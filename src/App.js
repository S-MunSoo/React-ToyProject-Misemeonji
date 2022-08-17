import { Route, Routes } from 'react-router-dom'
import './App.scss'
import FooterBar from './components/FooterBar'
import FavorList from './pages/FavorList'
import HomeAll from './pages/HomeAll'
import LocRegion from './pages/LocRegion'

// http://localhost:8000/response
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeAll />} />
        <Route path="/loc" element={<LocRegion />} />
        <Route path="/loc/:id" element={<FavorList />} />
        <FooterBar />
      </Routes>
    </>
  )
}

export default App
