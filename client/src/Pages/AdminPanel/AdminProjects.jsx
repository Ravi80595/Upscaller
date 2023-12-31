// import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Box, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spinner, Image, Flex, Text, Input, Select, Button, useToast, Textarea } from '@chakra-ui/react';
import { baseUrl } from '../../Utils/BaseUrl';
import ProjectDetails from './ProjectDetails';
import axios from 'axios';




const AdminProjects = () => {
  const [projects,setProjects]=useState([])
  const [displayMode,setDisplayMode]=useState('list')
  const [selectedReport,setSelectedReport]=useState('')


const fetchProjects = async () => {
  try {
    const response = await axios.get(`${baseUrl}/project/projects`);
    setProjects(response.data);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
  }
};


useEffect(()=>{
  fetchProjects()
},[])
console.log(projects,'projjects')

return (
<div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <div style={{ marginTop: '40px' }}>
      {displayMode === 'list' && (
        <div style={{ marginTop: '40px' }}>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Project Name</Th>
                  <Th>Client Name</Th>
                  <Th>Sprints</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projects.length>0 && projects && projects.map(ele => (
                  <Tr key={ele._id} cursor="pointer" _hover={{ backgroundColor: "#f3f4f6" }}>
                    <Td>{ele.title}</Td>
                    <Td>{ele.client.name}</Td>
                    <Td>{ele.sprints.length}</Td>
                    <Td>
                      <Button onClick={() => { setSelectedReport(ele); setDisplayMode('details'); }}>More</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
      {displayMode === 'details' && (
        <div>
          <Button onClick={() => setDisplayMode('list')}>Back</Button>
          {selectedReport && <ProjectDetails clientDetail={selectedReport} />}
        </div>
      )}
    </div>
  </div>
  )
}

export default AdminProjects