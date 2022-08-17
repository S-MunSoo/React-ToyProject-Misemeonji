import { Route, Routes } from 'react-router-dom'
import './App.scss'
import FooterBar from './components/FooterBar'
import FavorList from './pages/FavorList'
import HomeAll from './pages/HomeAll'
import LocRegion from './pages/LocRegion'

//앤드포인트: http://apis.data.go.kr/B552584/ArpltnInforInqireSvc
// Jjw1n2CnacTgMtOHvjcbUwGWbh5kfOUYE2%2Flz2hz1QxUY8cQz36%2B9IPSHGI3tYmqyROMd8Y5CDW7zXpuiOuUSQ%3D%3D

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeAll />} />
        <Route path="/loc" element={<LocRegion />} />
        <Route path="/loc/:id" element={<FavorList />} />
      </Routes>
      <FooterBar />
    </>
  )
}

export default App
