import React from 'react';
import { Flex, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';

const BottomLink = () => {
  const StickyBanner = styled(Flex)`
    position: fixed;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    width: 100%;
    backdrop-filter: blur(20px);
    @media screen and (max-width: 810px) {
      display: none;
    }
  `;
  return (
    <StickyBanner
      py={2}
      px={12}
      bgGradient="linear(to-l, alpha.800, secondaryAlpha.700)">
      <Heading size="md" color="white">
        Ready to book?
      </Heading>
      <Link href="/contact">
        <Button colorScheme="primary" color="white" variant="contrastReverse">
          Contact
        </Button>
      </Link>
    </StickyBanner>
  );
};

export default BottomLink;
