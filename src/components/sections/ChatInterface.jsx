import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Box, Input, Button, VStack, Text, useToast } from '@chakra-ui/react';
import { Transaction } from '@solana/web3.js';
import { processTransactionIntent, sendTransaction } from '../../lib/api';
import { createOrGetUser } from '../../lib/api';

export function ChatInterface() {
  const { publicKey, signTransaction } = useWallet();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const toast = useToast();

  // Initialize user when wallet is connected
  useEffect(() => {
    const initializeUser = async () => {
      if (publicKey) {
        try {
          const response = await createOrGetUser(publicKey.toString());
          if (response.success && response.user) {
            setUserId(response.user.id);
          } else {
            throw new Error('Failed to initialize user');
          }
        } catch (error) {
          console.error('Error initializing user:', error);
          toast({
            title: 'Error initializing user',
            description: error.message,
            status: 'error',
            duration: 3000,
          });
        }
      }
    };

    initializeUser();
  }, [publicKey]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message || !publicKey || !userId) {
      toast({
        title: 'Error',
        description: 'Please connect your wallet and enter a message',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    setLoading(true);
    try {
      console.log('Processing payment intent:', {
        userInput: message,
        userId,
        walletAddress: publicKey.toString()
      });

      // Process the payment intent
      const intentResponse = await processTransactionIntent({
        userInput: message,
        userId: userId,
        walletAddress: publicKey.toString()
      });

      if (!intentResponse.success) {
        throw new Error(intentResponse.error || 'Failed to process payment intent');
      }

      // Create and sign transaction
      const transaction = Transaction.from(
        Buffer.from(intentResponse.transaction, 'base64')
      );

      // Request signature from user
      const signedTx = await signTransaction(transaction);

      // Send signed transaction
      const txResult = await sendTransaction({
        signedTransaction: signedTx.serialize().toString('base64')
      });

      if (!txResult.success) {
        throw new Error(txResult.error || 'Failed to send transaction');
      }

      // Format amounts for display
      const formatAmount = (amount) => amount.toFixed(2).replace(/\.?0+$/, '');
      const { amounts, recipient } = intentResponse;
      
      toast({
        title: 'Transaction sent!',
        description: 
          `To: ${recipient.label}\n` +
          `Amount: ${formatAmount(amounts.original.amount)} ${amounts.original.currency}\n` +
          `(≈ ${formatAmount(amounts.sol)} SOL / $${formatAmount(amounts.usd)})\n` +
          `Transaction: ${txResult.signature.slice(0, 8)}...`,
        status: 'success',
        duration: 5000,
      });

      setMessage('');
    } catch (error) {
      console.error('Error processing message:', error);
      toast({
        title: 'Error processing message',
        description: error.message,
        status: 'error',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  if (!publicKey) {
    return (
      <Box p={4}>
        <Text>Please connect your wallet to send messages</Text>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Type your payment command (e.g., Send $50 to mom)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
          <Button
            mt={2}
            colorScheme="blue"
            type="submit"
            isLoading={loading}
            loadingText="Processing"
            width="full"
          >
            Send
          </Button>
        </form>
      </VStack>
    </Box>
  );
} 