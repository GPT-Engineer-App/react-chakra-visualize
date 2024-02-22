// Complete the Index page component here
import React from "react";
import { ChakraProvider, Box, Text, Heading, VStack, Code, Link, Button, Divider, useColorMode, IconButton, Flex, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaReact } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Box p={5}>
        <Flex justify="space-between" align="center" mb={6}>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} isRound size="lg" alignSelf="flex-start" aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} />
          <Image src="https://images.unsplash.com/photo-1655196601100-8bfb26cf99e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSZWFjdCUyMExvZ298ZW58MHx8fHwxNzA4NjMxNjA1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
        </Flex>
        <VStack spacing={8}>
          <Box>
            <Heading mb={4}>Introduction</Heading>
            <Text>React is a powerful JavaScript library for building user interfaces, and Chakra UI is a modern React UI framework that offers an extensive suite of accessible components. Combining these tools can significantly enhance the development experience. Visual aids can be immensely helpful in understanding how these technologies work.</Text>
          </Box>
          <Divider />
          <Box>
            <Heading mb={4}>Visual Example Section</Heading>
            <Text mb={4}>Below are interactive components showcasing the features of React and Chakra UI.</Text>
            <Box p={5} shadow="md" borderWidth="1px">
              <Button colorScheme="teal">Click me!</Button>
            </Box>
            <Box mt={5}>
              <Text>This button demonstrates a basic interaction in React using Chakra UI.</Text>
              <Code p={3} children={`<Button colorScheme="teal">Click me!</Button>`} />
            </Box>
          </Box>
          <Divider />
          <Box>
            <Heading mb={4}>Getting Started</Heading>
            <Text mb={4}>To start using React with Chakra UI, you'll need to set up a new React project and install Chakra UI.</Text>
            <Text>
              <Code>npm create react-app my-app</Code> <br />
              <Code>cd my-app</Code> <br />
              <Code>npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion</Code>
            </Text>
            <Link href="https://chakra-ui.com/docs/getting-started" isExternal color="teal.500">
              Learn more about setting up Chakra UI
            </Link>
          </Box>
          <Divider />
          <Box>
            <Heading mb={4}>Conclusion</Heading>
            <Text mb={4}>We hope this visual guide helps you better understand and utilize the powerful features of React and Chakra UI. Remember, the best way to learn is by doing, so don't hesitate to experiment with the code snippets provided and explore further.</Text>
            <Button rightIcon={<FaReact />} colorScheme="blue" variant="solid">
              Explore React
            </Button>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
