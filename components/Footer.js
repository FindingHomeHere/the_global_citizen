import React from 'react';
import Link from 'next/link';
import {
  Grid,
  Heading,
  IconButton,
  GridItem,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';

import { FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <Grid
        py={8}
        px={{ base: 4, md: 16 }}
        templateColumns="repeat(3, 1fr)"
        autoRows
        gap={2}
        bg="primary.700"
        color="primary.50">
        <GridItem
          rowSpan={1}
          mx="auto"
          my="auto"
          borderWidth={1}
          borderRadius="md"
          borderColor="secondary.300"
          p={2}>
          <Heading letterSpacing={1.1} lineHeight={0.8} fontSize="60px">
            The
          </Heading>
          <Heading color="secondary.400" fontSize="36px">
            Global
          </Heading>
          <Heading fontSize="33px">Citizen</Heading>
        </GridItem>
        <GridItem
          rowSpan={1}
          borderColor="alpha.500"
          minW="150px"
          borderLeftWidth={1}
          borderRightWidth={1}>
          <Flex direction="column" align="center" lineHeight={1.8}>
            <Link href="/">
              <Text
                cursor="pointer"
                _hover={{
                  color: 'secondary.400',
                  transform: 'translateY(-10%)',
                  transition: 'all 0.3s ease',
                }}>
                Home
              </Text>
            </Link>
            <Link href="/portfolio">
              <Text
                cursor="pointer"
                _hover={{
                  color: 'secondary.400',
                  transform: 'translateY(-10%)',
                  transition: 'all 0.3s ease',
                }}>
                Portfolio
              </Text>
            </Link>
            <Link href="/portfolio/current">
              <Text
                cursor="pointer"
                _hover={{
                  color: 'secondary.400',
                  transform: 'translateY(-10%)',
                  transition: 'all 0.3s ease',
                }}>
                Recent Projects
              </Text>
            </Link>
            <Link href="/portfolio/past">
              <Text
                cursor="pointer"
                _hover={{
                  color: 'secondary.400',
                  transform: 'translateY(-10%)',
                  transition: 'all 0.3s ease',
                }}>
                Past Projects
              </Text>
            </Link>
            <Link href="/contact">
              <Text
                cursor="pointer"
                _hover={{
                  color: 'secondary.400',
                  transform: 'translateY(-10%)',
                  transition: 'all 0.3s ease',
                }}>
                Contact
              </Text>
            </Link>
          </Flex>
        </GridItem>
        <GridItem rowSpan={1} align="center" justify="space-around">
          <Flex direction="column">
            <Box>
              <Link
                href="https://www.instagram.com/the_global_citizen/"
                passHref>
                <IconButton
                  as="a"
                  variant="ghost"
                  size="lg"
                  target="_blank"
                  icon={<FiInstagram />}
                />
              </Link>
            </Box>
          </Flex>
        </GridItem>
        <GridItem p={4} align="center" colSpan={3}>
          <Text fontSize="md">© 2021, The Global Citizen</Text>
          <Text fontSize="xs">
            Built by{' '}
            <Link href="https://isaacjohnson.dev" passHref>
              <Text
                color="secondary.200"
                as="a"
                _hover={{
                  color: 'secondary.400',
                }}
                target="_blank">
                Isaac Johnson
              </Text>
            </Link>
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Footer;
