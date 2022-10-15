import {Link } from "react-router-dom"
import { HiCalendar } from 'react-icons/hi';
import { Box,  Flex,Text, Spacer, Tag, Button} from "@chakra-ui/react" 

import dayjs from "dayjs";

export function LaunchItem(launch) {
  return (
    <Box  bg="gray.100" p={4} m={4} borderRadius="lg">
    <Flex display="flex">
      <Text fontSize="2x1">
          mission <strong> {launch.mission_name} </strong>({launch.launch_year})
      </Text>
      <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
    </Flex>
    <Flex align="center">
      <HiCalendar />
      <Text fontSize="sm" ml={1}>
        {dayjs(launch.launch_date_local).locale("es").format("D MMM, YYYY")}
      </Text>
    </Flex>
    <Link to={`/lauch/${launch.flight_number}`}>
        <Button mt={2} colorScheme="purple">More Details</Button>
    </Link>
    
  </Box>
  )
}
