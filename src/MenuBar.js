import React from 'react';
import { Menu, Add } from 'grommet-icons';
import { Box, Button, Heading, Text } from 'grommet';
const MenuBar = ({props, handleToggle, handleCreate}) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '100' }}
    {...props}
  >
    <Button  onClick={handleCreate}>
      <Box pad="small" direction="row" align="center" gap="small">
        <Add />
        <Text>Add</Text>
      </Box>
    </Button>
    <Heading level='3' margin='none'>Portal</Heading>
    <Button
      icon={<Menu />}
      onClick={handleToggle}
    />
  </Box>
);

export default MenuBar