import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faBook } from '@fortawesome/free-solid-svg-icons';
import callIcon from "./assets/call.png"

import HatredBar from './components/HatredBar';
import ScreenInfoBar from './components/ScreenInfoBar';
import Actions from './components/Actions';
import GiveMoneyButton from './components/GiveMoneyButton';

function App() {

  return (
    <div className='game-board'>
      <header>
        <div className='settings'>
          <FontAwesomeIcon icon={faSliders} />
        </div>

        <div className='dialog'>
          <img src={callIcon} alt="" />
          <div>
            Ağaçlar bizim geçim kaynağımız sana inanmak istersek onları kesmeyecek miyiz?
          </div>
        </div>

        <div className='book'>
          <FontAwesomeIcon icon={faBook} />
        </div>
      </header>

      <div className='screen'>
        <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/70ffa425-7288-4e20-8d31-96a66de01fdd/408738026/mesih-screenshot.png" alt="" />
      </div>

      <footer>
      <ScreenInfoBar/>

        <HatredBar/>
        <Actions/>
        {/* <GiveMoneyButton/> */}
      </footer>
    </div>
  )
}

export default App
