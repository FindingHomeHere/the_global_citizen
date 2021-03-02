import React from 'react';
import Link from 'next/link';
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  IconButton,
  HStack,
  Image,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

const ImageSlide = ({ url }) => {
  const Photo = styled(Box)`
    background-image: url('${url}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: 50%;
  `;
  return <Photo />;
};

const SlideButton = styled(Button)`
  padding: 0;
  margin: 0;
`;

// const SlideImage = styled(Image)`
//   padding-top: 71.43%;
// `;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
    this.imgURL = this.props.imgURL;
    this.heading = this.props.heading;
    this.href = this.props.href;
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.activeImage = this.activeImage.bind(this);
  }

  activeImage(e) {
    e.preventDefault();
    this.setState({
      currentImageIndex: +e.target.dataset.index,
    });
  }

  previousSlide() {
    const lastIndex = this.imgURL.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  nextSlide() {
    const lastIndex = this.imgURL.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    return (
      <Flex
        maxW="1600px"
        mx="auto"
        direction="column"
        style={{
          transition: 'all 0.3s ease',
        }}>
        <Box px={16} bg="primary.100">
          <Box
            borderTopWidth="1px"
            borderTopColor="alpha.900"
            bg="primary.100"
            py={12}>
            <Link href={this.href}>
              <Heading
                w="317px"
                bgGradient="linear(to-r, primary.500, secondary.300)"
                bgClip="text"
                _hover={{
                  cursor: 'pointer',
                  bgGradient: 'linear(to-l, primary.500, secondary.300)',
                  transform: 'translateY(-3px)',
                  // boxShadow: 'lg',
                  transition: 'all 0.3s ease',
                }}>
                {this.heading} <ArrowForwardIcon color="secondary.300" />
              </Heading>
            </Link>
          </Box>
        </Box>
        <Flex w="100%" justify="space-between" align="center">
          <IconButton
            variant="solid"
            colorScheme="primary"
            isRound="true"
            size="md"
            zIndex="1"
            position="absolute"
            left={{ base: 4, lg: 20 }}
            onClick={this.previousSlide}
            icon={<ArrowBackIcon />}
          />
          <ImageSlide
            url={
              this.imgURL[this.state.currentImageIndex] ||
              this.state.currentImageURL
            }
          />
          <IconButton
            variant="solid"
            colorScheme="primary"
            isRound="true"
            size="md"
            zIndex="1"
            position="absolute"
            right={{ base: 4, lg: 20 }}
            onClick={this.nextSlide}
            icon={<ArrowForwardIcon />}
          />
        </Flex>
        <HStack
          align="center"
          justify="center"
          wrap="false"
          py={4}
          spacing={{ base: 0, lg: 4 }}>
          {this.imgURL.map((img, i) => {
            return (
              <SlideButton
                _hover={{
                  transform: 'scale(1.5)',
                  zIndex: 1,
                }}
                key={i + img}
                onClick={this.activeImage}>
                <AspectRatio width="50px" ratio={7 / 5}>
                  <Image data-index={i} src={img} />
                </AspectRatio>
              </SlideButton>
            );
          })}
        </HStack>
      </Flex>
    );
  }
}
export default Gallery;
