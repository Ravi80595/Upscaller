import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
// import ScrollToTopLink from "./ScrollToTopLink";
import UpscallerLogo from '../../Assets/Images/UpscallerLogo.png'

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()



return (
    <Flex justifyContent="space-between" alignItems="center" background='black' width='100vw'>
       <Box pl={5}>
        <Link to='/home'>
          <Image w={[90,70,70,70]} src={UpscallerLogo}/>
        </Link> 
      </Box>
      <Button p="8px" color="white" bg="black" onClick={onOpen}>
        <HamburgerIcon w="30px" h="30px" />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
        {/* <Image w="50px" src={Logo} backgroundColor='black'/> */}
        <DrawerCloseButton pt={['20px','10px']} mt={['10px',"50px"]} color='white'/>
          <DrawerBody className="drawer-box">
            <Flex mt="5px" m='20px' gap="20px" direction="column" >
              <Link to='/'>
                <Text>Home</Text>
              </Link>
                <Link to='/about'>
                <Text>About Us</Text>
                </Link>
         
                {/* <Text>Our Team</Text> */}
                <Link to='/services'>
                <Text>Our Services</Text>
                </Link>
                <Link to='/contact'>
                <Text>Contact Us</Text>
                </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobNav;