import { Button, useToast } from '@chakra-ui/react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export const AirdropButton = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const toast = useToast();

  const handleAirdrop = async () => {
    if (!publicKey) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet first',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const signature = await connection.requestAirdrop(
        publicKey,
        LAMPORTS_PER_SOL
      );
      
      toast({
        title: 'Airdrop requested',
        description: 'Processing your airdrop...',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });

      // Wait for confirmation
      await connection.confirmTransaction(signature);

      toast({
        title: 'Airdrop successful',
        description: 'You received 1 SOL',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Airdrop error:', error);
      toast({
        title: 'Airdrop failed',
        description: 'Please try again later',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Button
      size="md"
      colorScheme="purple"
      onClick={handleAirdrop}
      isDisabled={!publicKey}
      _hover={{ bg: 'purple.600' }}
    >
      Receive Airdrop
    </Button>
  );
};

