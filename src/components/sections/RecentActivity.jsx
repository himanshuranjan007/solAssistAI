import { Box, VStack, Text, Link, Flex, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const RecentActivity = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  // This would typically come from your transaction history state/store
  const mockTransactions = [
    {
      recipient: "john.sol",
      amount: 1.5,
      timestamp: "2024-03-20 14:30",
      txHash: "3xyz...abc",
    },
    {
      recipient: "alice.sol",
      amount: 0.5,
      timestamp: "2024-03-20 13:15",
      txHash: "4def...xyz",
    },
  ];

  return (
    <Box>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>
        Recent Activity
      </Text>
      <VStack spacing={2} align="stretch">
        {mockTransactions.map((tx, index) => (
          <Box
            key={index}
            p={3}
            borderRadius="md"
            border="1px solid"
            borderColor={borderColor}
            _hover={{ bg: hoverBg }}
            transition="background 0.2s"
          >
            <Flex justify="space-between" align="center">
              <VStack align="start" spacing={1}>
                <Text fontSize="sm" fontWeight="medium">
                  Sent {tx.amount} SOL to {tx.recipient}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {tx.timestamp}
                </Text>
              </VStack>
              <Link
                href={`https://solscan.io/tx/${tx.txHash}`}
                isExternal
                fontSize="xs"
                color="blue.500"
                display="flex"
                alignItems="center"
              >
                View <ExternalLinkIcon mx={1} />
              </Link>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}; 