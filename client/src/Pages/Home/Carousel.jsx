import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css'; 
import p1 from '../../Assets/Images/p1.png'
import Pro from '../../Assets/Images/Pro.gif'

const Carousel = () => {
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);

  const CustomNextArrow = ({ onClick }) => (
    
    <Box
      as={FaChevronRight}
      color="white"
      position="absolute"
      top="50%"
      right="10px"
      cursor="pointer"
      fontSize="2xl"
      onClick={() => {
        setCenterSlideIndex((prevIndex) => prevIndex + 1);
        onClick();
      }}
    />
  );

  const CustomPrevArrow = ({ onClick }) => (
    <Box
      as={FaChevronLeft}
      color="white"
      position="absolute"
      top="50%"
      left="10px"
      cursor="pointer"
      fontSize="2xl"
      onClick={() => {
        setCenterSlideIndex((prevIndex) => prevIndex - 1);
        onClick();
      }}
    />
  );

  const projects = [
    {
        id: 1,
        image:p1,
        githubLink: 'https://github.com/your-username/project-1',
        deployLink: 'https://deployed-link-1.com',
      },
      {
        id: 2,
        image:p1,
        githubLink: 'https://github.com/your-username/project-2',
        deployLink: 'https://deployed-link-2.com',
      },
      {
        id: 3,
        image:p1,
        githubLink: 'https://github.com/your-username/project-3',
        deployLink: 'https://deployed-link-3.com',
      },
      {
        id: 4,
        image:p1,
        githubLink: 'https://github.com/your-username/project-4',
        deployLink: 'https://deployed-link-4.com',
      },
      {
        id: 5,
        image:p1,
        githubLink: 'https://github.com/your-username/project-5',
        deployLink: 'https://deployed-link-5.com',
      },
      {
        id: 6,
        image:p1,
        githubLink: 'https://github.com/your-username/project-5',
        deployLink: 'https://deployed-link-5.com',
      },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: (currentSlide) => setCenterSlideIndex(currentSlide),
  };

  const handleImageClick = (link, index) => {
    if (index === centerSlideIndex) {
      window.open(link, '_blank');
    }
  };

  return (
    
    <Box position="relative" backgroundColor="black" height="400px">
        <Center>
      <Image src={Pro} boxSize="300px" borderRadius="full" />
      
    </Center>
    <br/>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Flex
            key={project.id}
            alignItems="center"
            justifyContent="center"
            width="100%"
            outline="none"
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              className={index === centerSlideIndex ? 'center-image' : 'side-image'}
              onClick={() => handleImageClick(project.deployLink, index)}
              cursor="pointer"
              _hover={{ filter: 'brightness(1.2)' }} 
            />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
