import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, Text } from '@chakra-ui/react';



function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    milestones: [{ title: '', dueDate: '',milestoneDesc:''}],
    tasks: [{ title: '', timeline: '', details: '', assignedTo: '', status: 'todo' }],
    noteDate: '',
    noteTime: '',
});



const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post('/api/createProject', formData);

      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
};

  // Function to handle changes in milestone fields
  const handleMilestoneChange = (index, event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const milestones = [...prevData.milestones];
      milestones[index] = { ...milestones[index], [name]: value };
      return { ...prevData, milestones };
    });
  };

  // Function to handle changes in task fields
  const handleTaskChange = (index, event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const tasks = [...prevData.tasks];
      tasks[index] = { ...tasks[index], [name]: value };
      return { ...prevData, tasks };
    });
  };

  // Function to add a new milestone
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
    <Box w={'40%'} m={'auto'} p={'40px'} border={'2px solid grey'}>
      <Text textAlign={'center'} fontSize={'24px'} mb={'30px'}> Add Project</Text>
<form onSubmit={handleSubmit}>
        <label htmlFor="title">Project Title:</label>
        <Input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        {/* <label htmlFor="client">Client:</label> */}
        {/* <input type="text" id="client" name="client" value={formData.client} onChange={handleChange} required /> */}
        <div>
          {/* <Text>Milestones</Text> */}
          {formData.milestones.map((milestone, index) => (
            <Box key={index}>
              <label htmlFor={`milestoneTitle-${index}`}>Milestone Title:</label>
              <Input
                type="text"
                id={`milestoneTitle-${index}`}
                name="title"
                value={milestone.title}
                onChange={(event) => handleMilestoneChange(index, event)}
              />

              <label htmlFor={`dueDate-${index}`}>Due Date:</label>
              <Input
                type="date"
                id={`dueDate-${index}`}
                name="dueDate"
                value={milestone.dueDate}
                onChange={(event) => handleMilestoneChange(index, event)}
              />
            </Box>
          ))}
          <Button type="button" onClick={addMilestone}>
            Add Milestone
          </Button>
        </div>

        {/* <div>
          <h2>Tasks</h2>
          {formData.tasks.map((task, index) => (
            <div key={index}>
              <label htmlFor={`taskTitle-${index}`}>Task Title:</label>
              <input
                type="text"
                id={`taskTitle-${index}`}
                name="title"
                value={task.title}
                onChange={(event) => handleTaskChange(index, event)}
              />

              <label htmlFor={`taskTimeline-${index}`}>Task Timeline:</label>
              <input
                type="text"
                id={`taskTimeline-${index}`}
                name="timeline"
                value={task.timeline}
                onChange={(event) => handleTaskChange(index, event)}
              />

              <label htmlFor={`taskDetails-${index}`}>Task Details:</label>
              <textarea
                id={`taskDetails-${index}`}
                name="details"
                value={task.details}
                onChange={(event) => handleTaskChange(index, event)}
              ></textarea>

              <label htmlFor={`assignedTo-${index}`}>Assigned To:</label>
              <input
                type="text"
                id={`assignedTo-${index}`}
                name="assignedTo"
                value={task.assignedTo}
                onChange={(event) => handleTaskChange(index, event)}
              />

              <label htmlFor={`status-${index}`}>Status:</label>
              <select
                id={`status-${index}`}
                name="status"
                value={task.status}
                onChange={(event) => handleTaskChange(index, event)}
              >
                <option value="todo">To-Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          ))}
          <button type="button" onClick={addTask}>
            Add Task
          </button>
        </div> */}
        {/* <label htmlFor="noteDate">Note Date:</label> */}
        {/* <input type="text" id="noteDate" name="noteDate" value={formData.noteDate} onChange={handleChange} /> */}
        {/* <label htmlFor="noteTime">Note Time:</label> */}
        {/* <input type="text" id="noteTime" name="noteTime" value={formData.noteTime} onChange={handleChange} /> */}
        <Button type="submit">Create Project</Button>
      </form>
    </Box>
  );
}

// Export the component for use in other parts of your application
export default ProjectForm;
