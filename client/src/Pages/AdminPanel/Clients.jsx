import React, { useState, useEffect } from 'react';
import { Box, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spinner, Image, Flex, Text, Input, Select, Button, useToast, Textarea } from '@chakra-ui/react';
// import ClientDetails from './ClientDetails';
import { baseUrl } from '../../Utils/BaseUrl';
import ClientDetails from './ClientDetails';




const Clients = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [displayMode, setDisplayMode] = useState('list');
  const [clientFormData, setClientFormData] = useState({
    name: '',
    brandName:'',
    email:'',
    password:'',
    remarks:''
  });

  const [clients, setClients] = useState([]);
  const [showClientForm, setShowClientForm] = useState(false);
  const toast=useToast()
  // console.log(selectedReport,'re')


const handleClientFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientFormData),
      });
      if (!response.ok) {
        console.log(response)
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      toast({
        title: 'Client Added Successfully',
        description: "",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      fetchClients();
      setClientFormData({
        name: '',
        brandName:'',
        email:'',
        password:''
      });
      setShowClientForm(false);
    } catch (error) {
      console.error('Error submitting influencer form data:', error);
    }
};

const fetchClients = async () => {
try {
    const response = await fetch(`${baseUrl}/user/allUsers`);
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const clientsData = await response.json();
    // console.log(clientsData,'clients')
    setClients(clientsData.data);
} catch (error) {
    console.error('Error fetching influencers:', error);
}
};

useEffect(() => {
fetchClients();
}, []);

  return (
    <>
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
       
     
<div style={{ marginTop: '40px' }}>
        {displayMode === 'list' && (
          <>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            <div>
           <span style={{ fontWeight: 'bold' }}>Clients</span>
         </div>
         <div>
           <button
             onClick={() => setShowClientForm(true)}
             style={{marginLeft: '10px',padding: '10px',backgroundColor: '#4CAF50',color: '#fff',borderRadius: '5px',cursor: 'pointer',border: 'none',fontSize: '14px',}}>
             Add New Client
           </button>
         </div>
         </nav>
          <div style={{ marginTop: '10px' }}>
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
                  {clients.length>0 && clients && clients.map(ele => (
                    <Tr key={ele._id} cursor="pointer" _hover={{ backgroundColor: "#f3f4f6" }}>
                      <Td>{ele.name}</Td>
                      <Td>{ele.brandName}</Td>
                      <Td>{ele.email}</Td>
                      <Td>
                        <Button onClick={() => { setSelectedReport(ele); setDisplayMode('details'); }}>More</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
          </>
        )}
        {displayMode === 'details' && (
          <div>
            <Button onClick={() => setDisplayMode('list')}>Back</Button>
            {selectedReport && <ClientDetails clientDetail={selectedReport} />}
          </div>
        )}
      </div>
    </div>
    {showClientForm && (
      <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        backgroundColor: '#fff',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
      }}
      >
        <form onSubmit={handleClientFormSubmit}>            
            <input
              type="text"
              value={clientFormData.name}
              placeholder='Client Name'
              onChange={(e) => setClientFormData({ ...clientFormData, name: e.target.value })}
              style={{ padding: '8px', fontSize: '14px', width: '47%', boxSizing: 'border-box', margin: '5px',border:'1px solid grey',borderRadius:'5px' }}
            />
            <input
              type="text"
              placeholder='Brand Name'
              value={clientFormData.brandName}
              onChange={(e) => setClientFormData({ ...clientFormData, brandName: e.target.value })}
              style={{ padding: '8px', fontSize: '14px', width: '47%', boxSizing: 'border-box', margin: '5px',border:'1px solid grey',borderRadius:'5px' }}/>
            <input
              type="email"
              placeholder='Email'
              value={clientFormData.email}
              onChange={(e) => setClientFormData({ ...clientFormData, email: e.target.value })}
              style={{ padding: '8px', fontSize: '14px', width: '47%', boxSizing: 'border-box', margin: '5px',border:'1px solid grey',borderRadius:'5px' }}/>
            <input
              type="text"
              placeholder='Password'
              value={clientFormData.password}
              onChange={(e) => setClientFormData({ ...clientFormData, password: e.target.value })}
              style={{ padding: '8px', fontSize: '14px', width: '47%', boxSizing: 'border-box', margin: '5px',border:'1px solid grey',borderRadius:'5px' }}/>          
            <Textarea
              type="textarea"
              placeholder='Remarks (any other requirements)'
              value={clientFormData.remarks}
              onChange={(e) => setClientFormData({ ...clientFormData, remarks: e.target.value })}
              style={{ padding: '8px', fontSize: '14px', width: '96%', boxSizing: 'border-box', marginTop: '5px',border:'1px solid grey',borderRadius:'5px',marginBottom:'5px' }}              />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <button
              type="submit"
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
              onClick={() => setShowClientForm(false)}
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
  );
};

export default Clients