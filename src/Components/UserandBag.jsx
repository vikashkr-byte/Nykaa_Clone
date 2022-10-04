import { HStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineUserDelete} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'
const UserandBag = () => {
  return (
    <div>
        <HStack>

        <AiOutlineUserDelete size={"24px"} />
        <h2 style={{fontWeight:"500"}}>Vikash</h2>
        <div style={{marginLeft:"40px"}} >

        <BsHandbag size={"24px"}/>
        </div>
        </HStack>
    </div>
  )
}

export default UserandBag