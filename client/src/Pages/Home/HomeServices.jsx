import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HomeServices = () => {
    

return (
    <Box color={'white'} backgroundColor='rgba(19,21,36,1)' pt={['59px','59px','159px','139px']} pb={["50px","50px","0px","0px"]}>
        <Box w={['90%','95%','45%','45%']} m={'auto'} textAlign={'center'}>
      <Text fontSize={['1.5rem','1rem','3rem','3rem']} lineHeight={'1.15'} fontFamily={'NeueMontreal, sans-serif'} fontWeight={'500'}> The last platform you'll ever need for compliance</Text>
      <Text pt={['15px','15px','25px','25px']} fontSize={['1rem','1rem','1.25rem','1.25rem']} fontWeight={'500'} w={['90%','90%','70%','70%']} m={'auto'} lineHeight={'1.5'}>
      Readymade content, flexible platform, expert support — Upscaler has it all.
      </Text>
        </Box>


      <Flex direction={['column','column','row','row']} gap={'60px'} justifyContent={'space-around'} w={['80%','80%','70%','70%']} m={'auto'} mt={'90px'}>
        <Box p={'2.5rem 2.5rem 3.25rem'} border={'1px solid rgb(113 113 113 / 60%)'} borderRadius={'1.5rem'} _hover={{border:'1px solid white'}} transition={'border-color .2s'}>
            <Image src='https://assets-global.website-files.com/644bbf4e9d76dbe46680776f/644bbf4e9d76dbd50d807781_icons-3.svg'/>
            <Text fontSize={'1.5rem'} lineHeight={'1.3'} fontFamily={'NeueMontreal, sans-serif'} pt={'20px'}>Web Development</Text>
            <Text color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>Our readymade solutions come preloaded with all of the policies, procedures, forms and resources that you need to get up and running quickly and without reinventing the wheel.</Text>
        </Box>
        <Box p={'2.5rem 2.5rem 3.25rem'} border={'1px solid rgb(113 113 113 / 60%)'} borderRadius={'1.5rem'} _hover={{border:'1px solid white'}} transition={'border-color .2s'}>
            <Image src='https://assets-global.website-files.com/644bbf4e9d76dbe46680776f/644bbf4e9d76db198a807783_icons-1.svg'/>
            <Text fontSize={'1.5rem'} lineHeight={'1.3'} fontFamily={'NeueMontreal, sans-serif'} pt={'20px'}>Mobile Development</Text>
            <Text color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>Our readymade solutions come preloaded with all of the policies, procedures, forms and resources that you need to get up and running quickly and without reinventing the wheel.</Text>
        </Box>
        <Box p={'2.5rem 2.5rem 3.25rem'} border={'1px solid rgb(113 113 113 / 60%)'} borderRadius={'1.5rem'} _hover={{border:'1px solid white'}} transition={'border-color .2s'}>
            <Image src='https://assets-global.website-files.com/644bbf4e9d76dbe46680776f/644bbf4e9d76db436380777f_icons-4.svg'/>
            <Text fontSize={'1.5rem'} lineHeight={'1.3'} fontFamily={'NeueMontreal, sans-serif'} pt={'20px'}> Data Solutions</Text>
            <Text color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>Our readymade solutions come preloaded with all of the policies, procedures, forms and resources that you need to get up and running quickly and without reinventing the wheel.</Text>
        </Box>
      </Flex>



      <Flex direction={['column','column','row','row']} gap={'60px'} justifyContent={'space-around'} w={['80%','80%','70%','70%']} m={'auto'} mt={'90px'}>
        <Box p={'2.5rem 2.5rem 3.25rem'} border={'1px solid rgb(113 113 113 / 60%)'} borderRadius={'1.5rem'} _hover={{border:'1px solid white'}}>
            <Image src='https://assets-global.website-files.com/644bbf4e9d76dbe46680776f/644bbf4e9d76db198a807783_icons-1.svg'/>
            <Text fontSize={'1.5rem'} lineHeight={'1.3'} fontFamily={'NeueMontreal, sans-serif'} pt={'20px'}>UI/UX Design</Text>
            <Text color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>Our readymade solutions come preloaded with all of the policies, procedures, forms and resources that you need to get up and running quickly and without reinventing the wheel.</Text>
        </Box>
        <Box p={'2.5rem 2.5rem 3.25rem'} border={'1px solid rgb(113 113 113 / 60%)'} borderRadius={'1.5rem'} _hover={{border:'1px solid white'}} transition={'border-color .2s'}>
            <Image src='https://assets-global.website-files.com/644bbf4e9d76dbe46680776f/644bbf4e9d76dbca33807780_icons-2.svg'/>
            <Text fontSize={'1.5rem'} lineHeight={'1.3'} fontFamily={'NeueMontreal, sans-serif'} pt={'20px'}> SEO Optimization</Text>
            <Text color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>Our readymade solutions come preloaded with all of the policies, procedures, forms and resources that you need to get up and running quickly and without reinventing the wheel.</Text>
        </Box>
        <Box p={'2.5rem 2.5rem 3.25rem'} border={'1px solid rgb(113 113 113 / 60%)'} borderRadius={'1.5rem'} _hover={{border:'1px solid white'}} transition={'border-color .2s'}>
            <Image src='https://assets-global.website-files.com/644bbf4e9d76dbe46680776f/644bbf4e9d76db6ba0807782_icons-5.svg'/>
            <Text fontSize={'1.5rem'} lineHeight={'1.3'} fontFamily={'NeueMontreal, sans-serif'} pt={'20px'}>IT Solutions</Text>
            <Text color={'rgba(255, 255, 255, .8)'} fontSize={'1rem'} lineHeight={'1.5'} mt={'15px'} fontFamily={'NeueMontreal, sans-serif'}>Our readymade solutions come preloaded with all of the policies, procedures, forms and resources that you need to get up and running quickly and without reinventing the wheel.</Text>
        </Box>
      </Flex> 
    </Box>
  )
}

export default HomeServices
