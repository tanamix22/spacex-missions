import {useState, useEffect} from "react"
import * as API from "./servises/launches"
import {Heading, Image} from "@chakra-ui/react" 
import logo from "./assets/react.svg"

import {LaunchItem } from "./components/LaunchItem"


function App() {
const [lauches,setLauches] = useState([])

useEffect(()=>{
  API.getAllLaunches().then(setLauches)
},[])

  return (
    <>
      <Image src={logo} alt="logo" width={100} />
      <Heading as="h1" size="lg" m={4}>SpaceX Lauches</Heading>
      <section>
        {lauches.map(launch =>(
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  )
}

export default App
