import React from 'react'
import Logobox from './Logobox'
import { HStack } from '@chakra-ui/react'
import MainNavLeftMenu from './MainNavLeftMenu'
import { SearchBoxNav } from './SearchBoxNav'
import UserandBag from './UserandBag'
const Navbar = () => {
  return (
    <HStack direction={"row"} h={"60px"} bg={"rgb(255,255,255)"} >
        <Logobox/>
        <MainNavLeftMenu/>
        <SearchBoxNav/>
        <UserandBag/>
    </HStack>
  )
}

export default Navbar