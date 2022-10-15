
import { Image} from "@chakra-ui/react" 
import logo from "./assets/react.svg"
import {Routes, Route } from "react-router-dom"
import { LauchesList} from "./components/LauchesList"
import  LaunchDetail from "./components/LauchDetail"
import  RocketDetail from "./components/RocketDetail"



function App() {


  return (
    <>
      <Image src={logo} alt="logo" width={100} />
      <Routes>
        <Route path="/" element={ <LauchesList /> } />
        <Route path="/lauch/:lauchId" element={ <LaunchDetail /> } />
        <Route path="/rockets/:rocketId" element={ <RocketDetail /> } />
      </Routes>
     
    </>
  )
}

export default App
