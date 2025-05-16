import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Box, Button, Input, VStack, HStack, Text, useToast, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { createOrGetUser, getRecipients, addRecipient as apiAddRecipient, deleteRecipient as apiDeleteRecipient } from '../../lib/api';
import { Heading } from '@chakra-ui/react';
export function RecipientManager() {
  const { publicKey } = useWallet();
  const [recipients, setRecipients] = useState([]);
  const [newLabel, setNewLabel] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const toast = useToast();
  const [userId, setUserId] = useState(null);

  // Initialize user and load recipients when wallet is connected
  useEffect(() => {
    const initializeUserAndLoadRecipients = async () => {
      if (publicKey) {
        try {
          const response = await createOrGetUser(publicKey.toString());
          console.log('User response:', response);
          
          if (response.success && response.user) {
            setUserId(response.user.id);
            await loadRecipients(response.user.id);
          } else {
            throw new Error('Failed to initialize user');
          }
        } catch (error) {
          console.error('Error initializing:', error);
          toast({
            title: 'Error initializing',
            description: error.message,
            status: 'error',
            duration: 3000,
          });
        }
      }
    };

    initializeUserAndLoadRecipients();
  }, [publicKey]);

  async function loadRecipients(currentUserId) {
    if (!currentUserId) {
      console.error('No user ID provided to loadRecipients');
      return;
    }

    try {
      const response = await getRecipients(currentUserId);
      console.log('Recipients response:', response);

      if (response.success && Array.isArray(response.recipients)) {
        // Ensure each recipient has the required fields
        const validRecipients = response.recipients.map(recipient => ({
          label: recipient.label || '',
          walletAddress: recipient.wallet_address || recipient.walletAddress || ''
        }));
        setRecipients(validRecipients);
      } else {
        setRecipients([]);
        if (!response.success) {
          throw new Error(response.error || 'Failed to load recipients');
        }
      }
    } catch (error) {
      console.error('Error loading recipients:', error);
      toast({
        title: 'Error loading recipients',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
      setRecipients([]);
    }
  }

  async function handleAddRecipient(e) {
    e.preventDefault();
    if (!newLabel || !newAddress || !userId) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields and ensure wallet is connected',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    try {
      const response = await apiAddRecipient({
        userId,
        label: newLabel,
        walletAddress: newAddress
      });

      if (response.success) {
        setNewLabel('');
        setNewAddress('');
        await loadRecipients(userId);
        
        toast({
          title: 'Recipient added',
          status: 'success',
          duration: 3000,
        });
      } else {
        throw new Error(response.error || 'Failed to add recipient');
      }
    } catch (error) {
      console.error('Error adding recipient:', error);
      toast({
        title: 'Error adding recipient',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    }
  }

  async function handleDeleteRecipient(label) {
    if (!userId) {
      toast({
        title: 'Error',
        description: 'No user ID available',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    try {
      const response = await apiDeleteRecipient(userId, label);
      
      if (response.success) {
        await loadRecipients(userId);
        toast({
          title: 'Recipient deleted',
          status: 'success',
          duration: 3000,
        });
      } else {
        throw new Error(response.error || 'Failed to delete recipient');
      }
    } catch (error) {
      console.error('Error deleting recipient:', error);
      toast({
        title: 'Error deleting recipient',
        description: error.message,
        status: 'error',
        duration: 3000,
      });
    }
  }

  const formatWalletAddress = (address) => {
    if (!address) return 'Invalid Address';
    if (address.length < 8) return address;
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (!publicKey) {
    return (
      <Box p={4}>
        <Text>Please connect your wallet to manage recipients</Text>
      </Box>
    );
  }

  return (
    <Box p={4}>
     <Text fontSize="lg" fontWeight="semibold" mb={3}>
        Manage Recipients
      </Text>
      <VStack spacing={4} align="stretch">
        <form onSubmit={handleAddRecipient}>
          <HStack spacing={4}>
            <Input
              placeholder="Recipient Label (e.g., mom)"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
            />
            <Input
              placeholder="Wallet Address"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <Button type="submit" colorScheme="blue">
              Add
            </Button>
          </HStack>
        </form>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Label</Th>
              <Th>Wallet Address</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.isArray(recipients) && recipients.map((recipient) => (
              <Tr key={recipient.label}>
                <Td>{recipient.label}</Td>
                <Td>{formatWalletAddress(recipient.walletAddress)}</Td>
                <Td>
                  <IconButton
                    aria-label="Delete recipient"
                    icon={<DeleteIcon />}
                    onClick={() => handleDeleteRecipient(recipient.label)}
                    colorScheme="red"
                    size="sm"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
} 