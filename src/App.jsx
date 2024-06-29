import { useState } from 'react'
import './App.css';
import HatredBar from './components/HatredBar';
import ScreenInfoBar from './components/ScreenInfoBar';
import Actions from './components/Actions';
import GiveMoneyButton from './components/GiveMoneyButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HatredBar/>
    <ScreenInfoBar/>
    <Actions/>
    <GiveMoneyButton/>
    </>
  )
}

export default App
