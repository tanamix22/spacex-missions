import {useState, useEffect} from "react"
import * as API from "../servises/launches"
import {Heading} from "@chakra-ui/react"
import {LaunchItem } from "../components/LaunchItem"
import { DotSpinner } from '@uiball/loaders'
import { Flex} from "@chakra-ui/react" 

export  function LauchesList() {
    const [lauches,setLauches] = useState([])

useEffect(()=>{
  API.getAllLaunches()
  .then(setLauches)
  .catch(console.log)
},[])

  return (
    <>
       <Heading as="h1" size="lg" m={4}>SpaceX Lauches</Heading>
       {lauches.length ==0 ?( <Flex align="center" > <DotSpinner color="purple"/> </Flex>
       ) : (
        <section>
        {lauches.map(launch =>(
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
       ) }
      
    </>
  )
}
