import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import FooterBar from './components/FooterBar'
import AllArea from './pages/AllArea'
import FavorList from './pages/FavorList'
import MyHome from './pages/MyHome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/allarea" element={<AllArea />} />
        <Route path="/favor" element={<FavorList />} />
        <Route path="/*" element={<p>Not Found</p>} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  )
}

export default App
