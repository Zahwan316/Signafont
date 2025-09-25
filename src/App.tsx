import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Page/Home'
import LoginPage from './Page/Login'
import ProfilePage from './Page/Profile'
import PengenalanPage from './Page/Pengenalan'
import GamePage from './Page/Game'
import FlashCardPage from './Page/Flashcard'
import SplashPage from './Page/Splash'
import SettingPage from './Page/Setting'

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
        <Route path='/settings' element={<SettingPage />}/>

      </Routes>
    </>
  )
}

export default App
