import React from 'react';
import { Box, Button, Text } from 'grommet';
const SideBarMenu = ({props, handleToggle, handleCreate}) => (
  <React.Fragment>
    <Button  onClick={handleCreate}>
      <Box pad="small" direction="row" align="center" gap="small">
        <Text>My Organization</Text>
      </Box>
    </Button>
    <Button  onClick={handleCreate}>
      <Box pad="small" direction="row" align="center" gap="small">
        <Text>My Campaigns</Text>
      </Box>
    </Button>
    <Button  onClick={handleCreate}>
      <Box pad="small" direction="row" align="center" gap="small">
        <Text>My Users</Text>
      </Box>
    </Button>
  </React.Fragment>  
);

export default SideBarMenu