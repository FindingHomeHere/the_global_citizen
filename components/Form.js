import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Flex
        p={12}
        m={12}
        borderRadius="md"
        minW="300px"
        align="center"
        justify="space-evenly"
        boxShadow="2xl"
        bg="primary.700">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xknpapwk"
          method="POST">
          <FormControl isRequired mb={2} id="name">
            <FormLabel color="primary.50" htmlFor="name">
              Name
            </FormLabel>
            <Input
              variant="outline"
              placeholder="Name"
              type="text"
              name="name"
            />
          </FormControl>
          <FormControl isRequired mb={2} id="email">
            <FormLabel color="primary.50" htmlFor="email">
              Email
            </FormLabel>
            <Input
              variant="outline"
              placeholder="Email"
              type="email"
              name="email"
            />
          </FormControl>
          <FormControl isRequired mb={2} id="phone">
            <FormLabel color="primary.50" htmlFor="phone">
              Phone Number
            </FormLabel>
            <Input
              variant="outline"
              placeholder="Phone #"
              type="tel"
              name="Phone"
            />
          </FormControl>
          <FormControl isRequired mb={2} id="message">
            <FormLabel color="primary.50" htmlFor="message">
              Message
            </FormLabel>

            <Input
              variant="outline"
              placeholder="Message"
              type="text"
              name="Message"
            />
          </FormControl>

          {status === 'SUCCESS' ? (
            <Text color="primary.600">Thanks!</Text>
          ) : (
            <Button
              colorScheme="secondary"
              color="white"
              variant="solid"
              type="submit">
              Submit
            </Button>
          )}
          {status === 'ERROR' && (
            <Text color="secondary.600">Ooops! There was an error.</Text>
          )}
        </form>
      </Flex>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
