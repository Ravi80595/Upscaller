import { Text, Box, Heading, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";




const GettingStarted = () => {




return (
    <Box textAlign="center" p={5}>
      <Heading textAlign={'left'} as="h1" fontSize={'36px'} fontWeight={'bolder'} lineHeight={'50px'} fontFamily={'Figtree, Roboto, Noto Sans Hebrew, Noto Kufi Arabic, Noto Sans JP, sans-serif'}>
        Getting Started
      </Heading>
      <Flex gap={'50px'} mt={'20px'}>
        <Flex gap={'10px'}>
        <FaRegUserCircle/>
          <Text mt='-5px'>Creater <b>Ravi Sharma</b></Text>
        </Flex>
        <Flex gap={'10px'}>
        <GiStarsStack />
        <Text mt='-5px'>
          Created <b> 1 Jan 2024, 24:32 </b>
        </Text>
        </Flex>
      </Flex>
      <Text fontFamily={'Helvetica,Arial,sans-serif'} fontSize={'30px'} fontWeight={'600'} mt={'50px'} mb={'20px'}>Welcome to the Upscaller start guide</Text>
      <hr />
      <Box fontSize={'18px'} textAlign={'left'} w={'70%'} m={'auto'} mt={'20px'} fontFamily={'inherit'}>
      <Text> <b>Step 1: </b> Learn about the structure</Text>
      <Text>The workspace has the following boards and structure:</Text>
      <Box w={'80%'} m={'auto'} mt={'20px'} mb={'50px'}>
      <ul>
      <li>
        <strong style={{fontSize:'16px'}}>Tasks</strong>
        <p  style={{fontSize:'16px'}}>
          Manage your sprints, plan for upcoming sprints and prioritize your backlog <br />
          Connect your tasks to the relevant epics in your Roadmap board
        </p>
      </li>
        <br />
      <li>
        <strong style={{fontSize:'16px', marginTop:'20px'}}>Roadmap</strong>
        <p  style={{fontSize:'16px'}}>
          Document your epics, provide visibility of the roadmap and monitor progress <br />
          Connect tasks from the tasks board to each epic
        </p>
      </li>
      <br />
      <li>
        <strong style={{fontSize:'16px'}}>Sprints</strong>
        <p  style={{fontSize:'16px'}}>
          Manage the high level sprints - sprint goals, sprint timeline
        </p>
        <p>
          Connect tasks from the tasks board to sprints
        </p>
      </li>
      <br />
      <li>
        <strong style={{fontSize:'16px'}}>Bugs Queue</strong>
        <p style={{fontSize:'16px'}}>
          Track new bug tickets and manage the process from bug submission to solution
        </p>
      </li>
      <br />
      <li>
        <strong style={{fontSize:'16px'}}>Retrospective</strong>
        <p style={{fontSize:'16px'}}>
          Manage sprint retros, identifying and addressing areas for improvement
        </p>
      </li>
    </ul>
      </Box>
    </Box>
      <hr />
      <Box w={'70%'} m={'auto'} mt={'20px'} >
      <Box fontSize={'18px'} textAlign={'left'} mb={'30px'}>
         <Text> <b>Step 1: </b> Learn about the structure</Text>
         <Text>The workspace has the following boards and structure:</Text>
      </Box>
        <Box w={'80%'} m={'auto'}>
        <iframe
          width="800"
          height="315"
          src="https://www.youtube.com/embed/k8FnlfR8Ty4"
          title="Monday Dev Introductory Video"
          frameBorder="0"
          allowFullScreen
          mx="auto" // Center the video horizontally
          display="block" // Adjusts the display to be a block-level element
          ></iframe>
          </Box>
      </Box>


      <Box>
        
      </Box>



    </Box>
  );
};

export default GettingStarted;
