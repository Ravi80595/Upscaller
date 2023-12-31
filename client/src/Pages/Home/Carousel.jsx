
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Flex, Image } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
        image: 'https://thumbs.dreamstime.com/b/new-projects-word-notebook-59737338.jpg?w=768',
        githubLink: 'https://github.com/your-username/project-1',
        deployLink: 'https://deployed-link-1.com',
      },
      {
        id: 2,
        image: 'https://thumbs.dreamstime.com/b/new-projects-word-notebook-59737338.jpg?w=768',
        githubLink: 'https://github.com/your-username/project-2',
        deployLink: 'https://deployed-link-2.com',
      },
      {
        id: 3,
        image: 'https://thumbs.dreamstime.com/b/new-projects-word-notebook-59737338.jpg?w=768',
        githubLink: 'https://github.com/your-username/project-3',
        deployLink: 'https://deployed-link-3.com',
      },
      {
        id: 4,
        image: 'https://thumbs.dreamstime.com/b/new-projects-word-notebook-59737338.jpg?w=768',
        githubLink: 'https://github.com/your-username/project-4',
        deployLink: 'https://deployed-link-4.com',
      },
      {
        id: 5,
        image: 'https://thumbs.dreamstime.com/b/new-projects-word-notebook-59737338.jpg?w=768',
        githubLink: 'https://github.com/your-username/project-5',
        deployLink: 'https://deployed-link-5.com',
      },
      {
        id: 6,
        image: 'https://thumbs.dreamstime.com/b/new-projects-word-notebook-59737338.jpg?w=768',
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
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Flex
            key={project.id}
            alignItems="center"
            justifyContent="center"
            width="100%" // Set width to 100% to ensure equal spacing
            outline="none" // Remove the default outline for better styling
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              boxSize={index === centerSlideIndex ? '300px' : '150px'}
              borderRadius="md"
              onClick={() => handleImageClick(project.deployLink, index)}
              cursor="pointer"
              opacity={index !== centerSlideIndex ? 0.8 : 1}
              transition="opacity 0.3s"
              _hover={{ opacity: 1 }}
            />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;






  