import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { IoIosArrowDown } from "react-icons/io";
import { baseUrl } from '../../Utils/BaseUrl';
import axios from 'axios';



const ClientSprints = ({data}) => {
    const [projects,setProjects]=useState([])

    console.log(projects,'projectssss')

const fetchProjectByUser= async () => {
    try {
        const response = await axios.get(`${baseUrl}/project/projectsByUser/${data[0]._id}`);
        setProjects(response.data);
    } catch (error) {
        console.error('Error fetching projects:', error.message);
    }
}

useEffect(()=>{
    fetchProjectByUser()
},[])

function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
      const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); 
    const day = dateObject.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
  
const style={
    border:'1px solid #aeaeae',
    fontWeight:'600',
    textAlign:'center'
}
    

return (
    <Box overflowX="auto" overflowY="hidden" minHeight="100vh">
    <Text fontSize={'34px'} fontWeight={'600'}>Sprints</Text>
    <Tabs>
    <TabList>
        <Tab>Main Table</Tab>
        <Tab>Roadmap</Tab>
        {/* <Tab>Tasks Pending</Tab>
        <Tab>Board</Tab> */}
    </TabList>
         <TabPanels>
            <TabPanel>
                <Box mt={'30px'}>
                    <Flex color={'blue'} mb={'10px'} gap={'10px'}>
                    <Box pt='7px'>
                    <IoIosArrowDown/>
                    </Box>
                    <Text>Sprints</Text>
                    </Flex>
                </Box>
        <TableContainer h={'90vh'}>
              <Table size='sm' borderWidth="1px" borderColor="gray.300" borderRadius={'30px'}>
                <Thead>
                  <Tr textAlign='center' borderColor={'2px solid grey'}>
                    <Th style={style}>Sprint</Th>
                    <Th style={style}>Sprint Goals</Th>
                    <Th style={style}>Sprint Order</Th>
                    <Th style={style}>Active</Th>
                    <Th style={style}>Sprint Timeline</Th>
                    <Th style={style}>Tasks</Th>
                    <Th style={style}>Completed?</Th>
                    <Th style={style}>Sprint Start Date</Th>
                    <Th style={style}>Sprint End Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {projects.length>0 && projects[0].sprints.map(ele => (
                    <Tr key={ele._id} cursor="pointer" _hover={{ backgroundColor: "#f3f4f6" }}>
                    <Td style={style}>{ele.title}</Td>
                    <Td style={style}>{ele.goal}</Td>
                    <Td style={style}>1</Td>
                    <Td style={style}>{ele.status.active?"Active":"Inactive"}</Td>
                    <Td style={style}>{ele.timeline}</Td>
                    <Td style={style}>{ele.tasks.length}</Td>
                    <Td style={style}>{ele.status.completed?"Yes":'No'}</Td>
                    <Td style={style}>{formatDate(ele.startDate)}</Td>
                    <Td style={style}>{formatDate(ele.endDate)}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            {/* </div> */}

            </TabPanel>
            <TabPanel>
                Tasks updates here
            </TabPanel>
    </TabPanels>
    </Tabs>
</Box>
  )
}

export default ClientSprints