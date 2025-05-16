import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { clusterApiUrl } from '@solana/web3.js';
import { ChakraProvider, Container, VStack, Heading, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';

import { WalletConnection } from '@/components/WalletConnection';
import { RecipientManager } from '@/components/RecipientManager';
import { ChatInterface } from '@/components/ChatInterface';

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

  return (
    <ChakraProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Container maxW="container.lg" py={8}>
              <VStack spacing={8} align="stretch">
                <WalletConnection />
                
                <Heading size="lg" textAlign="center">
                  Solana Payment Agent
                </Heading>

                <Tabs isFitted variant="enclosed">
                  <TabList mb="1em">
                    <Tab>Send Payment</Tab>
                    <Tab>Manage Recipients</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <ChatInterface />
                    </TabPanel>
                    <TabPanel>
                      <RecipientManager />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </VStack>
            </Container>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  );
}
