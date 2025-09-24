import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Page/Home'
import LoginPage from './Page/Login'
import ProfilePage from './Page/Profile'
import PengenalanPage from './Page/Pengenalan'
import GamePage from './Page/Game'
import FlashCardPage from './Page/Flashcard'
import SplashPage from './Page/Splash'

function App() {

  return (
    <>
      <Routes>
        <Route index path='home' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='pengenalan' element={<PengenalanPage />} />
        <Route path='game' element={<GamePage />} />
        <Route path='flashcard' element={<FlashCardPage />} />
        <Route path='/' element={<SplashPage />} index />

      </Routes>
    </>
  )
}

export default App
