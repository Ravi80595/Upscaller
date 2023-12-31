import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { baseUrl } from '../../Utils/BaseUrl';



function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    milestones: '',
  });





const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
};

  // Function to handle changes in milestone fields
  // const handleMilestoneChange = (index, event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => {
  //     const milestones = [...prevData.milestones];
  //     milestones[index] = { ...milestones[index], [name]: value };
  //     return { ...prevData, milestones };
  //   });
  // };

  // Function to handle changes in task fields
  const handleTaskChange = (index, event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const tasks = [...prevData.tasks];
      tasks[index] = { ...tasks[index], [name]: value };
      return { ...prevData, tasks };
    });
  };

  const addMilestone = () => {
    setFormData((prevData) => ({
      ...prevData,
      milestones: [...prevData.milestones, { title: '', dueDate: '' }],
    }));
  };

  // Function to add a new task
  const addTask = () => {
    setFormData((prevData) => ({
      ...prevData,
      tasks: [...prevData.tasks, { title: '', timeline: '', details: '', assignedTo: '', status: 'todo' }],
    }));
  };


return (
    <Box p={'40px'} border={'2px solid grey'}>
      <Text textAlign={'center'} fontSize={'24px'} mb={'30px'}> Add Project</Text>
<form>
        
      </form>
    </Box>
  );
}

// Export the component for use in other parts of your application
export default ProjectForm;
