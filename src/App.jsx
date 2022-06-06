import { useState } from 'react'
import logo from './Component/logo.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Acceuil from './Component/Accueil'
import Engagement from './Component/Engagement'
import Card from './Component/card'

function App() {

  const [navigation, setNavigation] = useState(2);
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
      <Navbar nav={setNavigation} ></Navbar>
      <Engagement></Engagement>
    </div>
    )
  }else if(navigation == 2){
    return(
    <div>
      <Navbar nav={setNavigation} ></Navbar>
      <Card></Card>
    </div>
    )
  }
  return (
    <div></div>
  )
}

export default App
