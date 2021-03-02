import React from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { CloseIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      visibility: 'none',
    };
    this.imgURL = this.props.imgURL;
    this.heading = this.props.heading;
    this.handleClick = this.handleClick.bind(this);
    this.ModalWindow = this.ModalWindow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.key === 'Escape') {
        e.preventDefault();
        this.handleClose(e);
      }
      if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        this.previousSlide();
      }
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      currentImageIndex: +e.target.dataset.index,
      visibility: 'flex',
    });
  }

  handleClose = (e) => {
    this.setState({
      visibility: 'none',
    });
  };

  previousSlide = () => {
    const lastIndex = this.imgURL.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  };

  nextSlide = () => {
    const lastIndex = this.imgURL.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
    });
  };

  ModalWindow({ imgURL, visibility }) {
    const Modal = styled(Box)`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);
      z-index: 200;
      transition: all 0.5s;
      background: rgba(0, 0, 0, 0.5);
      display: ${visibility};
    `;
    const ModalOverlay = styled(Flex)`
      width: 100vw;
      height: 100vh;
      z-index: 10;
      position: fixed;
      cursor: pointer;
      backdrop-filter: blur(20px);
      display: ${visibility};
      top: 0;
    `;
    const ModalCloseButton = styled(IconButton)`
      position: fixed;
      top: 0;
      right: 0;
      display: ${visibility};
      &:hover {
      }
    `;
    const ModalImg = styled(Image)`
      width: 100%;
      height: 100%;
      object-fit: contain;
    `;

    return (
      <>
        <Modal
          borderRadius="md"
          h={{ base: '100%', md: '90vh' }}
          w={{ base: '100%', md: '90vw' }}>
          <ModalCloseButton
            variant="solid"
            size="lg"
            bg="secondaryAlpha.800"
            color="white"
            onClick={(e) => this.handleClose(e)}
            _hover={{
              bg: 'alpha.900',
              color: 'secondaryAlpha.300',
            }}
            icon={<CloseIcon />}
          />
          <Box>
            <IconButton
              variant="solid"
              bg="secondary.900"
              color="primary.50"
              isRound="true"
              _hover={{
                bg: 'secondaryAlpha.700',
                color: 'alpha.50',
              }}
              size="md"
              zIndex="12"
              position="fixed"
              left={{ base: 4, lg: 20 }}
              top="50%"
              onClick={(e) => this.previousSlide(e)}
              icon={<ArrowBackIcon />}
            />
            <ModalImg maxH="95vh" src={imgURL} />
            <IconButton
              variant="solid"
              bg="secondary.900"
              color="primary.50"
              isRound="true"
              _hover={{
                bg: 'secondaryAlpha.700',
                color: 'alpha.50',
              }}
              size="md"
              zIndex="12"
              position="fixed"
              right={{ base: 4, lg: 20 }}
              top="50%"
              onClick={(e) => this.nextSlide(e)}
              icon={<ArrowForwardIcon />}
            />
          </Box>
        </Modal>
        <ModalOverlay bg="alpha.800" onClick={(e) => this.handleClose(e)} />
      </>
    );
  }

  render() {
    const GalleryImage = styled(Image)`
      cursor: pointer;
      max-width: 1300px;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.03);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
      }
    `;

    return (
      <>
        <Flex
          direction="column"
          maxW="1300px"
          mx="auto"
          bg="primary.100"
          style={{
            transition: 'all 0.3s ease',
          }}>
          <Box px={16} bg="primary.100">
            <Box
              borderTopWidth="1px"
              borderTopColor="alpha.900"
              bg="primary.100"
              py={12}>
              <Heading
                bgGradient="linear(to-r, primary.500, secondary.300)"
                bgClip="text">
                {this.heading}
              </Heading>
            </Box>
          </Box>
          <SimpleGrid spacing={2} columns={1}>
            {this.imgURL.map((el, i) => {
              return (
                <AspectRatio key={i} ratio={4 / 3}>
                  <GalleryImage
                    onClick={this.handleClick}
                    data-index={i}
                    src={el}
                  />
                </AspectRatio>
              );
            })}
          </SimpleGrid>
        </Flex>
        <this.ModalWindow
          visibility={this.state.visibility}
          imgURL={this.imgURL[this.state.currentImageIndex]}
        />
      </>
    );
  }
}
export default Gallery;
