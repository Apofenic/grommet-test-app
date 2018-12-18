import React from 'react';
import { Box, Paragraph } from 'grommet';

const paragraphFiller = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
`;
const Details = ({props}) => {
  console.log(props)
return (
        <Box 
          border={{"all": "medium"}} 
          margin="large" 
          elevation="large"
          pad="large"
        >
        <Box>
        <Paragraph size="small">
        {`Paragraph Small text`}
        {paragraphFiller}
      </Paragraph>
        </Box>  
        </Box>
    );

}

export default Details