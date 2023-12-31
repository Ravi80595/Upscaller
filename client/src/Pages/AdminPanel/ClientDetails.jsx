import { Tabs, TabList, TabPanels, Tab, TabPanel,Flex,Box,Text,TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button, useToast, Select, Input,} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import ProjectForm from './ProjectForm';
import { baseUrl } from '../../Utils/BaseUrl';
import axios from 'axios';



const ClientDetails = ({clientDetail}) => {
  const [showForm, setShowForm] = useState(false);
  const [showSprintForm,setShowSprintForm]=useState(false)
  const [showTaskForm,setShowTaskForm]=useState(false)
  const [projects, setProjects] = useState([]);
  const [projectId,setProjectId]=useState('')
  const [sprintId,setSprintId]=useState('')
  const [formData, setFormData] = useState({
    title: '',
    client: clientDetail._id,
  });
  const [sprintFormData,setSprintFormData]=useState({
    title: '',
    goal: '',
    timeline: '',
    startDate: '',
    endDate: '',
  })
  const [taskFormData,setTaskFormData]=useState({
    title:'',
    assignedTo:'',
    status:'',
    priority:'',
    type:'',
    role:'',
    githubLink:'',
    description:'',
    taskDate:''
  })

  console.log(taskFormData,'tassss')

const handleSprintFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/project/addSprint/${projectId._id}`, formData);
      // Handle success, e.g., show a success message or redirect
      console.log('Success:', response.data);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error:', error.message);
    }
};

const handleTaskFormSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post(`${baseUrl}/project/addTask/${sprintId._id}`, taskFormData);
    console.log('Success:', response.data);
    setShowTaskForm(false)
  } catch (error) {
    // Handle error, e.g., show an error message
    console.error('Error:', error);
  }
};

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
};

const handleTaskChange = (event) => {
  const { name, value } = event.target;
  setTaskFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post(`${baseUrl}/project/createProject`, formData);
    console.log('Success:', response.data);
    setShowForm(false)
  } catch (error) {
    console.error('Error:', error.message);
  }
};



const fetchProjectByUser= async () => {
  try {
    const response = await axios.get(`${baseUrl}/project/projectsByUser/${clientDetail._id}`);
    setProjects(response.data);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
  }
}
useEffect(()=>{
  // fetchProjects()
  fetchProjectByUser()
},[])
console.log(projects,'or')

return (
  <>
<Tabs>
      <TabList pb={'20px'}>
        <Tab>Client Details</Tab>
        <Tab>Project Details</Tab>
        <Tab>Tasks Pending</Tab>
        <Tab>Board</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <Text fontWeight={'600'} mt={'10px'} mb={'10px'}>{clientDetail.name}</Text>
        {
          projects && projects.map(ele=>(
            <Box border={'2px solid grey'} p={'20px'}>
            <Flex justifyContent={'space-between'}>
            <Text>{ele.title}</Text>
            <Button onClick={() => {setShowSprintForm(true); setProjectId(ele)}}>Add Sprint</Button>
            {/* <Button></Button> */}
            </Flex>
              {
                ele.sprints.map(item=>(
                  <Box key={item._id} background={'grey'} p={'15px'}>
                  <Flex mt={'15px'} justifyContent={'space-around'}>
                      <Text>{item.title}</Text>
                      <Text>{item.timeline}</Text>
                      <Text>{item.status.active?'Active':'Inactive'}</Text>
                  </Flex>
                  <Flex mt={'15px'} justifyContent={'space-around'}> 
                    <Text>{item.goal}</Text>
                    <Text>{item.startDate}</Text>
                    <Text>{item.endDate}</Text>
                  </Flex>
                  <Flex mt={'15px'} justifyContent={'center'}>
                    <Button onClick={() => {setShowTaskForm(true); setSprintId(item)}}>Add Tasks</Button>
                  </Flex>
                  </Box>
                ))
              }
            </Box>
          ))
        }
        </TabPanel>
        <TabPanel>
        <Flex justifyContent={'space-between'}>
          <Text fontWeight={'600'} mt={'10px'} mb={'10px'}>{clientDetail.name}</Text>
          <Button onClick={() => setShowForm(true)}>New Project</Button>
          </Flex>
          <TableContainer>
              <Table size='sm'>
                <Thead>
                  <Tr textAlign='center'>
                    <Th>Client Name</Th>
                    <Th>Brand Name</Th>
                    <Th>Email</Th>
                    <Th>Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {projects.length>0 && projects && projects.map(ele => (
                    <Tr key={ele._id} cursor="pointer" _hover={{ backgroundColor: "#f3f4f6" }}>
                      <Td>{ele.name}</Td>
                      <Td>{ele.brandName}</Td>
                      <Td>{ele.email}</Td>
                      <Td>
                        <Button>More</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
        </TabPanel>
        <TabPanel>
      
        
        </TabPanel>
        <TabPanel>
        
        </TabPanel>
      </TabPanels>
      </Tabs>
      {showForm && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            backgroundColor: '#fff',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
          }}
        >
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Project Title:</label>
        <Input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button type="submit"
                style={{
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '14px',
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  padding: '10px',
                  backgroundColor: '#ccc',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '14px',
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}



{showSprintForm && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            backgroundColor: '#fff',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
          }}
        >
    <form onSubmit={handleSprintFormSubmit}>
        <label htmlFor="title">Sprint Title:</label>
        <Input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        <label htmlFor="goal">Sprint Goal:</label>
        <Input type="text" id="goal" name="goal" value={formData.goal} onChange={handleChange} />
        <label htmlFor="timeline">Sprint Timeline:</label>
        <Input type="text" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} />
        <label htmlFor="startDate">Sprint Strat Date : </label>
        <Input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />
        <label htmlFor="endDate">Sprint End Date : </label>
        <Input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button type="submit"
                style={{
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '14px',
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowSprintForm(false)}
                style={{
                  padding: '10px',
                  backgroundColor: '#ccc',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '14px',
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}



{showTaskForm && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            backgroundColor: '#fff',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
          }}
        >
    <form onSubmit={handleTaskFormSubmit}>
        <label htmlFor="title">Task Title:</label>
        <Input type="text" id="title" name="title" value={taskFormData.title} onChange={handleTaskChange} />
        {/* <label htmlFor="owner">Task Owner:</label>
        <Input type="text" id="owner" name="owner" value={taskFormData.owner} onChange={handleTaskChange} /> */}
        <label htmlFor="assignedTo">Task Assigned To:</label>
        <Input type="text" id="assignedTo" name="assignedTo" value={taskFormData.assignedTo} onChange={handleTaskChange} />
        <label htmlFor="type">Type </label>
        <Input type="text" id="type" name="type" value={taskFormData.type} onChange={handleTaskChange} />
        <label htmlFor="role">Role </label>
        <Input type="text" id="role" name="role" value={taskFormData.role} onChange={handleTaskChange} />
        <label htmlFor="githubLink">Github Link </label>
        <Input type="text" id="githubLink" name="githubLink" value={taskFormData.githubLink} onChange={handleTaskChange} />
        <label htmlFor="description">Description</label>
        <Input type="text" id="description" name="description" value={taskFormData.description} onChange={handleTaskChange} />
        <label htmlFor="taskDate">Task Date </label>
        <Input type="date" id="taskDate" name="taskDate" value={taskFormData.taskDate} onChange={handleTaskChange} />
        <Select name='status' value={taskFormData.status} onChange={handleTaskChange}>
          <option value="todo">ToDo</option>
          <option value="inprogress">In-Progress</option>
          <option value="done">Done</option>
        </Select>
        <Select name='priority' value={taskFormData.priority} onChange={handleTaskChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Select>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button type="submit"
                style={{
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '14px',
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowTaskForm(false)}
                style={{
                  padding: '10px',
                  backgroundColor: '#ccc',
                  color: '#fff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: '14px',
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
      </>
  )
}

export default ClientDetails