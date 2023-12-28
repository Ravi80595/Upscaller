import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import AgileBanner from '../../Assets/Images/AgileBanner.png'


const Agile = () => {



return (
    <Flex justifyContent='center' background={'#131524'}>
        <Image src={AgileBanner}/>

    </Flex>
  )
}

export default Agile