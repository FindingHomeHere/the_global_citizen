import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Navbar = () => {
  const StickyNav = styled(Flex)`
    position: fixed;
    height: 80px;
    width: 100%;
    backdrop-filter: blur(20px) saturate(80%);
    z-index: 10;
  `;
  const NavLink = ({ children, to = '/', ...rest }) => {
    return (
      <Link href={to}>
        <Button
          variant="ghost"
          _hover={{
            bgGradient: 'linear(to-r, secondary.600, secondaryAlpha.300)',
          }}
          {...rest}>
          {children}
        </Button>
      </Link>
    );
  };

  return (
    <>
      <StickyNav
        boxShadow="0 1rem 2rem rgba(0, 0, 0, 0.14)"
        px={[2, 4, 6, 10]}
        wrap="nowrap"
        align="center"
        justify={['center', 'center', 'space-between', 'space-between']}
        bgGradient="linear(to-r, alpha.600, alpha.400)"
        direction={{ base: 'column', md: 'row' }}
        color="primary.50">
        <Flex>
          <Link href="/">
            <Heading
              _hover={{
                bgGradient: 'linear(to-r, secondary.500, secondaryAlpha.200)',
                bgClip: 'text',
              }}
              cursor="pointer"
              letterSpacing={2}
              size="lg">
              The Global Citizen
            </Heading>
          </Link>
        </Flex>
        <Stack
          spacing={[2, 4, 8, 12]}
          direction={{ base: 'vertical', md: 'horizontal' }}>
          <NavLink>Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Stack>
      </StickyNav>
      <Flex bg="black" w="100vw" h="80px"></Flex>
    </>
  );
};

export default Navbar;
