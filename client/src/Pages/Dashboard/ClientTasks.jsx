import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utils/BaseUrl'
import { TiTick } from "react-icons/ti";
import {CheckIcon,AddIcon,EditIcon,CalendarIcon} from '@chakra-ui/icons'
import { Pie } from 'react-chartjs-2';
import PieChart from '../../Components/GoogleChart';
import { IoMdAdd } from "react-icons/io";
import GoogleChart from '../../Components/GoogleChart';
import { useTranslation } from 'react-i18next';





const ClientTasks = ({data}) => {
    const [projects,setProjects]=useState([])
    const [taskStatus,setTaskStatus]=useState([])
console.log(projects,'data')


const fetchProjectByUser= async () => {
    try {
      const response = await axios.get(`${baseUrl}/project/projectsByUser/${data[0]._id}`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error.message);
    }
}

const getTasksSummary=async()=>{
    try {
        const response = await axios.get(`${baseUrl}/project/taskStatusSummary`);
        setTaskStatus(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
}


useEffect(()=>{
    fetchProjectByUser()
    getTasksSummary()
},[])

const style={
    border:'1px solid #aeaeae',
    fontWeight:'600',
    textAlign:'center'
}

function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
      const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); 
    const day = dateObject.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
const {t}=useTranslation()
return (
    <Box>
        <Text fontSize={'34px'} fontWeight={'600'}>{t('Tasks')}</Text>
        <Tabs>
        <TabList pb={'20px'}>
            <Tab>Summary</Tab>
            <Tab>Tasks</Tab>
            <Tab>Tasks Pending</Tab>
            <Tab>Board</Tab>
        </TabList>
             <TabPanels>
        <TabPanel backgroundColor={'deebff'}>
            <Text textAlign={'center'} mt={'20px'}>Here's where you'll view a summary of Riskcare status, priorities, workload, and more.</Text>
        <Flex justifyContent={'space-around'} mt={'35px'}>
            <Box border={'2px solid green'} p={'20px'} borderRadius={'15px'}>
                <Flex gap={'20px'}>
                  <Box fontSize={'17px'} mt={'5px'} backgroundColor={'#7cff81'} borderRadius={'50%'} p={'10px'} pl={'15px'} pr={'15px'}>
                    <CheckIcon color={'black'}/>
                    </Box>
                <Box>
                    <Text color={'#216e4e'} fontWeight={'600'} fontSize={'20px'}>3 done</Text>
                    <Text>in the last 7 days  🎉</Text>
                </Box>
                </Flex>
            </Box>

            <Box border={'2px solid #0055cc'} p={'20px'} borderRadius={'15px'}>
                <Flex gap={'20px'}>
                <Box fontSize={'17px'} mt={'5px'} backgroundColor={'#0055cc'} borderRadius={'50%'} p={'10px'} pl={'15px'} pr={'15px'}>
                    <EditIcon color={'black'}/>
                    </Box>
                <Box>
                    <Text color={'#0055cc'} fontWeight={'600'} fontSize={'20px'}>22 Updated</Text>
                    <Text>in the last 7 days  </Text>
                </Box>
                </Flex>
            </Box>

            <Box border={'2px solid #5e4db2'} p={'20px'} borderRadius={'15px'}>
                <Flex gap={'20px'}>
                <Box fontSize={'17px'} mt={'5px'} backgroundColor={'#5e4db2'} borderRadius={'50%'} p={'10px'} pl={'15px'} pr={'15px'}>
                    <AddIcon color={'black'}/>
                    </Box>
                <Box>
                    <Text color={'#5e4db2'} fontWeight={'600'} fontSize={'20px'}>13 created</Text>
                    <Text>in the last 7 days  </Text>
                </Box>
                </Flex>
            </Box>
            <Box border={'2px solid #626f86'} p={'20px'} borderRadius={'15px'}>
                <Flex gap={'20px'}>
                <Box fontSize={'17px'} mt={'5px'} backgroundColor={'#626f86'} borderRadius={'50%'} p={'10px'} pl={'15px'} pr={'15px'}>
                    <CalendarIcon color={'black'}/>
                    </Box>
                <Box>
                    <Text color={'#626f86'} fontWeight={'600'} fontSize={'20px'}>0 due</Text>
                    <Text>in the last 7 days  </Text>
                </Box>
                </Flex>
            </Box>
        </Flex>
            <Flex mt={'90px'} justifyContent={'space-around'}>
                    <Box>
                    <GoogleChart/>
                    </Box>
                    <Box p={'15px'} style={{borderRadius: '8px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',border: '1px solid #ddd'}}>
                        <Text>Recent Activites</Text>
                        <Text>Stay up to date with what's happening across the project.</Text>
                    </Box>
            </Flex>

        </TabPanel>

        <TabPanel>
    {projects.length>0 && projects[0].sprints.map(ele => (
        <Box key={ele._id}>
            <Flex>
                <Text fontSize={'22px'} pl={'3px'} pb={'7px'}>{ele.title}</Text>
            </Flex>
         <TableContainer h={'90vh'}>
              <Table size='sm' borderWidth="1px" borderColor="gray.300" borderRadius={'30px'}>
                <Thead>
                  <Tr textAlign='center' borderColor={'2px solid grey'}>
                    <Th style={style}>Task</Th>
                    <Th style={style}>Assigned To</Th>
                    <Th style={style}>Status</Th>
                    <Th style={style}>Priority</Th>
                    <Th style={style}>Type</Th>
                    <Th style={style}>Role</Th>
                    <Th style={style}>Github Link</Th>
                    <Th style={style}>Task Due Date</Th>
                    <Th style={style}>Description</Th>
                  </Tr>
                </Thead>
                <Tbody>
                    {/* {projects.length>0 && projects[0].sprints.map(ele => ( */}
    {ele.tasks.map(item=>(
                    <Tr key={item._id} cursor="pointer" _hover={{ backgroundColor: "#f3f4f6" }}>
                    <Td style={style}>{item.title}</Td>
                    <Td style={style}>{item.assignedTo}</Td>
                    <Td style={style}>{item.status}</Td>
                    <Td style={style}>{item.priority}</Td>
                    <Td style={style}>{item.type}</Td>
                    <Td style={style}>{item.role}</Td>
                    <Td style={style}>{item.githubLink}</Td>
                    <Td style={style}>{formatDate(item.taskDate)}</Td>
                    <Td style={style}>{item.description}</Td>
                    </Tr>
                  ))}
                  {/* ))} */}
                </Tbody>
              </Table>
            </TableContainer>
        </Box>
        ))}
        </TabPanel>


        <TabPanel>
            main table here
        </TabPanel>
        <TabPanel>
        {projects.length>0 && projects[0].sprints.map(ele => (
            <>
            <Text>Tasks Board</Text>
                <Flex justifyContent={'space-around'} mt={'50px'}>
                <Box p={'10px'}  border={'2px solid grey'} w={'32%'}>
                <Text fontSize={'20px'} fontWeight={'600'} textAlign={'center'} backgroundColor={'#d9d9d9'}>To-Do</Text>
            {ele.tasks.map(item=>(
                <>
                <Flex mt={'30px'}>
                <Text background={'#ff9494'} borderRadius={'20px'} pl={'10px'} pr={'10px'}>{item.type}</Text>
                </Flex>
                <Text>{item.title}</Text>
                </>
                ))}
                </Box>
                <Box p={'10px'}  border={'2px solid grey'} w={'32%'}>
                <Text fontSize={'20px'} fontWeight={'600'} textAlign={'center'} backgroundColor={'#d9d9d9'}>In-Progress</Text>
            {ele.tasks.map(item=>(
                <>
                <Flex mt={'30px'}>
                <Text background={'#8484ff'} borderRadius={'20px'} pl={'10px'} pr={'10px'}>{item.type}</Text>
                </Flex>
                <Text>{item.title}</Text>
                </>
                ))}
                </Box>
                <Box p={'10px'}  border={'2px solid grey'} w={'32%'}>
                <Text fontSize={'20px'} fontWeight={'600'} textAlign={'center'} backgroundColor={'#d9d9d9'}>Done</Text>
            {ele.tasks.map(item=>(
                <>
                <Flex mt={'30px'}>
                <Text background={'#86ff86'} borderRadius={'20px'} pl={'10px'} pr={'10px'}>{item.type}</Text>
                </Flex>
                <Text>{item.title}</Text>
                </>
                ))}
                </Box>
            </Flex>
            </>
        ))}
        </TabPanel>
        </TabPanels>
        </Tabs>
    </Box>
  )
}

export default ClientTasks