import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Box, Text, useToast } from '@chakra-ui/react';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useEffect } from 'react';
import { createOrGetUser } from '../lib/api';

export function WalletConnection() {
  const { publicKey } = useWallet();
  const toast = useToast();

  useEffect(() => {
    const initializeUser = async () => {
      if (publicKey) {
        try {
          await createOrGetUser(publicKey.toString());
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
    <Box p={4} display="flex" alignItems="center" justifyContent="flex-end" bg="gray.100">
      {publicKey && (
        <Text mr={4} fontSize="sm">
          Connected: {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
        </Text>
      )}
      <WalletMultiButton />
    </Box>
  );
} 