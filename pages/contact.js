// import { Button, Heading, Flex, Text } from '@chakra-ui/react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import ContactForm from '../components/Form';

import Hero from '../components/Hero';
import Prices from '../components/Prices';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | The Global Citizen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        image={3}
        title="Book your next Session"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequuntur velit, ipsa natus magnam perferendis facere magni blanditiis iste cupiditate ullam neque reprehenderit asperiores totam esse nesciunt atque assumenda in?"
        buttonText="See my work"
        to="/portfolio"
      />
      <Flex
        bg="primary.100"
        align="center"
        justify="center"
        p={{ base: 0, md: 16 }}>
        <Flex
          bg="primary.50"
          maxW="1100px"
          w={{ base: '100%', lg: '90%' }}
          direction={{ base: 'column', lg: 'row' }}
          justify="space-between"
          borderRadius={{ base: 0, md: 'md' }}
          borderLeftWidth={8}
          borderColor="secondary.300"
          boxShadow="lg">
          <Prices />
          <ContactForm />
        </Flex>
      </Flex>
    </>
  );
}
