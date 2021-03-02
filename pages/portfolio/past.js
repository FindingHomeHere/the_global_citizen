import React from 'react';
import Head from 'next/head';

import ModalGallery from '../../components/ModalGallery';
import { Box } from '@chakra-ui/react';
import BottomLink from '../../components/BottomLink';

const Current = () => {
  const slides = [
    './../img/Test/_DSC6021.jpg',
    './../img/Test/_DSC6023.jpg',
    './../img/Test/_DSC6036.jpg',
    './../img/Test/_DSC6062.jpg',
    './../img/Test/_DSC6089.jpg',
    './../img/Test/_DSC6104.jpg',
    './../img/Test/_DSC6122.jpg',
    './../img/Test/_DSC6150.jpg',
    './../img/Test/_DSC6179.jpg',
    './../img/Test/_DSC6225.jpg',
    './../img/Test/_DSC6249.jpg',
    './../img/Test/_DSC6264.jpg',
    './../img/Test/_DSC6272.jpg',
    './../img/Test/_DSC6326.jpg',
  ];
  return (
    <>
      <Head>
        <title>Past Projects | The Global Citizen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="primary.100">
        <ModalGallery heading="Past Projects" imgURL={slides} />
      </Box>
      <BottomLink />
    </>
  );
};

export default Current;
