import React from 'react'
import {useParams } from "react-router-dom"

 function RocketDetail() {
    let {rocketId} = useParams()
  return (
    <div>RocketDetail Id: {rocketId} </div>
  )
}

export default RocketDetail
