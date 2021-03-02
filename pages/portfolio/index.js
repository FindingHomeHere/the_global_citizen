import { Box } from '@chakra-ui/react';
import Head from 'next/head';

import Gallery from '../../components/Gallery';
import Hero from '../../components/Hero';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        image={2}
        title="Book your next Session"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae consequuntur velit, ipsa natus magnam perferendis facere magni blanditiis iste cupiditate ullam neque reprehenderit asperiores totam esse nesciunt atque assumenda in?"
        buttonText="See my work"
        to="/portfolio"
      />
      <Box bg="primary.100" pb={16}>
        <Gallery
          heading="Current Projects"
          href="/portfolio/current"
          imgURL={[
            './img/Test/_DSC6021.jpg',
            './img/Test/_DSC6023.jpg',
            './img/Test/_DSC6036.jpg',
            './img/Test/_DSC6062.jpg',
            './img/Test/_DSC6089.jpg',
            './img/Test/_DSC6104.jpg',
            './img/Test/_DSC6122.jpg',
            './img/Test/_DSC6150.jpg',
            './img/Test/_DSC6179.jpg',
            './img/Test/_DSC6225.jpg',
            './img/Test/_DSC6249.jpg',
            './img/Test/_DSC6264.jpg',
            './img/Test/_DSC6272.jpg',
            './img/Test/_DSC6326.jpg',
          ]}
        />
        <Gallery
          heading="Past Projects"
          href="/portfolio/past"
          imgURL={[
            './img/Test/_DSC6021.jpg',
            './img/Test/_DSC6023.jpg',
            './img/Test/_DSC6036.jpg',
            './img/Test/_DSC6062.jpg',
            './img/Test/_DSC6089.jpg',
            './img/Test/_DSC6104.jpg',
            './img/Test/_DSC6122.jpg',
            './img/Test/_DSC6150.jpg',
            './img/Test/_DSC6179.jpg',
            './img/Test/_DSC6225.jpg',
            './img/Test/_DSC6249.jpg',
            './img/Test/_DSC6264.jpg',
            './img/Test/_DSC6272.jpg',
            './img/Test/_DSC6326.jpg',
          ]}
        />
        {/* <Slider slides={slides} /> */}
      </Box>
    </>
  );
}
