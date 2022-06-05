import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Acceuil from './Component/Accueil'
import Engagement from './Engagement'


function App() {

  const [navigation, setNavigation] = useState(0);
  if (navigation == 0) {
    return(
      <div>
          <Navbar nav={setNavigation} ></Navbar>
          <Acceuil></Acceuil>     
      </div>
    )
  }else if(navigation == 1){
    return(
    <div>
      <Navbar></Navbar>
      <Engagement></Engagement>
    </div>
    )



  }
  return (
    <div></div>
  )
}

export default App
