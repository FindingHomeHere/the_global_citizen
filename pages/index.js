import Head from 'next/head';

import { AspectRatio, Flex, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
  const ServiceBox = styled(Flex)`
    flex-direction: row;
    position: relative;
    background: linear-gradient(
        to bottom,
        hsla(228, 100%, 4%, 0.93),
        hsla(228, 100%, 4%, 0.93)
      ),
      url('./img/1.jpg');

    background-position: top;
    background-size: cover;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <Head>
        <title>Home | The Global Citizen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        image={1}
        title="Book your next Session"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequuntur velit, ipsa natus magnam perferendis facere magni blanditiis iste cupiditate ullam neque reprehenderit asperiores totam esse nesciunt atque assumenda in?"
        buttonText="See my work"
        to="/portfolio"
      />
      <ServiceBox px="auto" py={{ base: 0, md: 12, lg: 16 }}>
        <Services />
      </ServiceBox>
    </>
  );
}
