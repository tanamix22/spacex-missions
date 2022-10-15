import {useState, useEffect} from "react"
import {useParams } from "react-router-dom"
import * as API from "../servises/launches"
import { Box,  Flex,Text, Spacer, Tag, Button} from "@chakra-ui/react" 
import { DotSpinner } from '@uiball/loaders'
import {Link } from "react-router-dom"
 function LauchDetail() {
    let {lauchId} = useParams()
    const [lauch,setLauch] = useState([])

    useEffect(()=>{
        API.getLaunchByFlightNumber(lauchId)
        .then(setLauch)
        .catch(console.log)
      },[lauchId])

   

  return (
    <>
        <Box  bg="gray.100" p={4} m={4} borderRadius="lg">
        {lauch.length==0 ? (<Flex align="center" > <DotSpinner color="purple"/> </Flex>
        ):(
            <Flex>
            <Text fontSize="2x1">
                mission <strong> {lauch.mission_name} </strong>({lauch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={lauch.launch_success ? "green" : "red"}>
                {lauch.launch_success ? "Success" : "Failure"}
            </Tag>
        </Flex>
        )}
    </Box>
    <Box>
        <Button mt={2} colorScheme="purple">
        Rocket: <Link to= {`/rockets/${lauch.rocket?.rocket_id}`}>{lauch.rocket?.rocket_name} </Link>

        </Button>
    </Box>
    </>

  )
}

export default LauchDetail