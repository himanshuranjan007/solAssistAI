import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { clusterApiUrl } from '@solana/web3.js';
import { ChakraProvider, Box, Container, Flex, useColorModeValue } from '@chakra-ui/react';

import { WalletConnection } from '../components/sections/WalletConnection'
import { RecipientManager } from '../components/sections/RecipientManager';
import { ChatInterface } from '../components/sections/ChatInterface';
import { AirdropButton } from '../components/sections/AirdropButton';

// Polyfill Buffer for browser
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default function Home() {
  // Set up Solana network connection
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  // Set up wallet adapters
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    [] 
  );

  const bgColor = useColorModeValue('rgba(255, 253, 247, 1)', 'gray.900');
  const commandCenterBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <ChakraProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Box 
              minH="100vh" 
              bg={bgColor} 
              py={8}
              position="relative"
            >
              {/* Airdrop Button - Top Left */}
              <Box 
                position="absolute" 
                top={4} 
                left={4}
              >
                <AirdropButton />
              </Box>

              {/* Wallet Connection - Top Right */}
              <Box 
                position="absolute" 
                top={4} 
                right={4}
              >
                <WalletConnection />
              </Box>

              <Container maxW="container.xl">
                <Flex direction="column" gap={6}>
                  {/* Command Center */}
                  <Box
                    mt={16}
                    bg={commandCenterBg}
                    borderRadius="xl"
                    boxShadow="lg"
                    p={6}
                    border="1px solid"
                    borderColor={borderColor}
                  >
                    <Flex direction="column" gap={6}>
                      {/* Chat Interface */}
                      <Box
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        p={4}
                        borderRadius="lg"
                        minH="200px"
                      >
                        <ChatInterface />
                      </Box>

                      {/* Recipients Section */}
                      <Box
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        p={4}
                        borderRadius="lg"
                        minH="200px"
                      >
                        <RecipientManager />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Container>
            </Box>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  );
}
