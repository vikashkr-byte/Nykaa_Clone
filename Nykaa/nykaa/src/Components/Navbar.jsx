import React from 'react'
import Logobox from './Logobox'
import { HStack } from '@chakra-ui/react'
import MainNavLeftMenu from './MainNavLeftMenu'
const Navbar = () => {
  return (
    <HStack direction={"row"}>
        <Logobox/>
        <MainNavLeftMenu/>
    </HStack>
  )
}

export default Navbar