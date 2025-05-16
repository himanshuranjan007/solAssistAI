import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Box, Text, useToast, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useEffect } from 'react';
import { createOrGetUser } from '../../lib/api';

export function WalletConnection() {
  const { publicKey } = useWallet();
  const toast = useToast();

  useEffect(() => {
    const initializeUser = async () => {
      if (publicKey) {
        try {
          await createOrGetUser(publicKey.toString());
          
          // Show network instructions when wallet connects
          toast({
            position: 'top',
            duration: 10000,
            isClosable: true,
            render: () => (
              <Alert
                status="info"
                variant="solid"
                flexDirection="column"
                alignItems="start"
                borderRadius="md"
                p={4}
                bg="blue.600"
              >
                <AlertIcon color="white" />
                <AlertTitle color="white" mb={2}>Welcome to SolAssistAI!</AlertTitle>
                <AlertDescription color="white">
                  This app is currently on Solana Devnet. Please:
                  <br />
                  1. Change your Phantom wallet network to Solana Devnet
                  <br />
                  2. Use the "Receive Airdrop" button to get test SOL
                </AlertDescription>
              </Alert>
            )
          });
        } catch (error) {
          toast({
            title: 'Error',
            description: 'Failed to initialize user',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      }
    };

    initializeUser();
  }, [publicKey, toast]);

  return (
    <Box p={4} display="flex" alignItems="center" justifyContent="flex-end" >
      {publicKey && (
        <Text mr={4} fontSize="sm">
          Connected: {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
        </Text>
      )}
      <WalletMultiButton />
    </Box>
  );
} 