import React from 'react';
import { Heading, Circle, Grid, Container, Icon, Flex } from '@chakra-ui/react';

import { IoCameraSharp, IoFlashSharp } from 'react-icons/io5';
import { RiUser3Fill } from 'react-icons/ri';

const Services = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={12}
      borderLeftWidth={8}
      borderColor="secondary.300"
      borderRadius={{ base: 0, md: 'md' }}
      boxShadow="md"
      bg="alpha.50"
      mx={[0, 0, 2, 12]}
      w={{ base: '100%', lg: '768px' }}
      maxW="768px">
      <Heading gridColumn={1} mb={8}>
        Services:
      </Heading>
      <Grid
        gridColumn={1}
        align="first baseline"
        gap={8}
        templateColumns={{ base: '0 100%', lg: '40px 530px' }}>
        <Circle size="35px" gridColumn={1} bg="primary.300">
          <Icon as={IoCameraSharp} color="primary.50" />
        </Circle>
        <Container gridColumn={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          ducimus excepturi, iste perferendis suscipit sit accusamus iure
          officia illo eaque eligendi eius commodi. Libero quibusdam
          exercitationem natus, ullam totam nostrum.
        </Container>
        <Circle size="35px" gridColumn={1} bg="primary.300">
          <Icon as={IoFlashSharp} color="primary.50" />
        </Circle>
        <Container gridColumn={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          ducimus excepturi, iste perferendis suscipit sit accusamus iure
          officia illo eaque eligendi eius commodi. Libero quibusdam
          exercitationem natus, ullam totam nostrum.
        </Container>
        <Circle size="35px" gridColumn={1} bg="primary.300">
          <Icon as={RiUser3Fill} color="primary.50" />
        </Circle>
        <Container gridColumn={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          ducimus excepturi, iste perferendis suscipit sit accusamus iure
          officia illo eaque eligendi eius commodi. Libero quibusdam
          exercitationem natus, ullam totam nostrum.
        </Container>
      </Grid>
    </Flex>
  );
};

export default Services;
