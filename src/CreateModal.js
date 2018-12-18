import React, { Component } from 'react';
import { Add, Close, FormClose, StatusGood, Trash } from "grommet-icons";
import {
  Box,
  Button,
  FormField,
  Grommet,
  Heading,
  Layer,
  Select,
  Text,
  TextArea,
  TextInput
} from "grommet";

import { grommet } from "grommet/themes";

  class CreateModal extends Component {

    state = { 
      open: false, 
      select: "" 
    };
  
    onOpen = () => this.setState({ open: true });
  
    onClose = () => {
      this.setState({ open: undefined });
    };
  
    render() {
      const { select } = this.state;
      return (
        <React.Fragment>
              <Layer 
                position="left"
                modal
                onClickOutside={this.onClose}
                onEsc={this.onClose}
              >
                <Box
                  alignSelf="center"
                  justify="center"
                  as="form"
                  overflow="auto"
                  width="xlarge"
                  onSubmit={this.onClose}
                >
                 
                </Box>
              </Layer>
        </React.Fragment>
      );
    }
  }

export default CreateModal