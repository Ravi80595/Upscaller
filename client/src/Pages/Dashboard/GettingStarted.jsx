import { Text, Box, Heading, Link } from '@chakra-ui/react';
import React from 'react';

const GettingStarted = () => {
  return (
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="xl">
        Get started with Monday Dev
      </Heading>
      <Text fontSize="lg" mt={4}>
        Last updated Jan 9th, 2023 - 8 min read
      </Text>
      <Text>Welcome to the Monday Dev start guide</Text>
      <hr />
      <Text>Step 1: Learn about the structure</Text>
      <Text>The workspace has the following boards and structure:</Text>

      <Text>Tasks</Text>
      <Text>
        Manage your sprints, plan for upcoming sprints, and prioritize your
        backlog
      </Text>
      <Text>Connect your tasks to the relevant epics in your Roadmap board</Text>

      <Text>Roadmap</Text>
      <Text>
        Document your epics, provide visibility of the roadmap, and monitor
        progress
      </Text>
      <Text>
        Connect tasks from the tasks board to each epic in the Roadmap
      </Text>

      <Text>Sprints</Text>
      <Text>
        Manage the high-level sprints - sprint goals, sprint timeline
      </Text>
      <Text>Connect tasks from the tasks board to sprints</Text>

      <Text>Bugs Queue</Text>
      <Text>
        Track new bug tickets and manage the process from bug submission to
        solution
      </Text>

      <Text>Retrospective</Text>
      <Text>
        Manage sprint retros, identifying and addressing areas for improvement
      </Text>

      <Box mt={8} >
        {/* Video Link */}
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
  );
};

export default GettingStarted;
