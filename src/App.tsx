import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Live from './pages/Live'
import Replay from './pages/Replay'
import EmissionDetail from './pages/EmissionDetail'
import RadioIndex from './pages/RadioIndex'
import RadioProvince from './pages/RadioProvince'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/live" element={<Live />} />
      <Route path="/replay" element={<Replay />} />
      <Route path="/emissions/ny-vaovao" element={<EmissionDetail />} />
      <Route path="/radio" element={<RadioIndex />} />
      <Route path="/radio/:province" element={<RadioProvince />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
