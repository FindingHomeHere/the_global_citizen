import React from 'react';
import {
  Button,
  Heading,
  Flex,
  Text,
  Image,
  AspectRatio,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Hero = ({ image, title, text, buttonText, to = '/' }) => {
  const HeroContainer = styled(Flex)`
    backdrop-filter: blur(10px);
    align-items: flex-start;
    // position: relative;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  `;
  return (
    <Box boxSizing="border-box">
      <AspectRatio ratio={{ base: 7 / 5, xl: 16 / 9 }}>
        <Image src={`./img/${image}.jpg`} />
      </AspectRatio>
      <HeroContainer
        borderLeftWidth={8}
        borderColor="secondary.300"
        borderRadius={{ base: 0, lg: 'md' }}
        position={{ base: 'static', lg: 'absolute' }}
        maxW={{ base: '100%', lg: '38rem' }}
        px={10}
        py={6}
        top={{ base: 0, lg: '60vh', xl: '63vh' }}
        mx={{ base: 0, lg: 12 }}
        h="contain"
        w="100vw"
        bg="alpha.50">
        <Heading size="2xl" mb={2}>
          {title}
        </Heading>
        <Text maxW="30rem" lineHeight={1.6} mb={2} fontSize="lg">
          {text}
        </Text>
        <Link href={to}>
          <Button variant="contrast">{buttonText}</Button>
        </Link>
      </HeroContainer>
      <Flex
        align="center"
        direction="row-reverse"
        borderBottomWidth="1px"
        px={{ base: 8, lg: 20, xl: '12rem' }}
        w="100%"
        textAlign="right"
        bg="primary.100">
        <Heading
          size="2xl"
          bgGradient="linear(to-r, primary.500, secondary.300)"
          bgClip="text"
          letterSpacing={{ base: 1, lg: 4 }}
          py={{ base: 8, lg: 12 }}>
          The Global Citizen
        </Heading>
      </Flex>
    </Box>
  );
};

export default Hero;
