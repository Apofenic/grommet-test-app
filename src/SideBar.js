import React from 'react';
import {FormClose} from 'grommet-icons';
import { Box, Button, Collapsible, Layer } from 'grommet';
import SideBarMenu from './SideBarMenu';
const SideBar = ({size, showSidebar}) => {
  console.log({size}, {showSidebar});
  return (
  <React.Fragment>
       {(!showSidebar || size !== 'small') ? (
      <Collapsible direction="horizontal" open={showSidebar}>
        <Box
          flex
          pad={{"top":"large"}}
          width='medium'
          background='light-2'
          elevation='small'
          align='center'
          justify='start'
          animation={{
            "type": "zoomIn",
            "delay": 0,
            "duration": 1000,
            
          }
            
            }
        >
          <SideBarMenu/>
        </Box>
      </Collapsible>
      ): (
        <Layer>
          <Box
            background='light-2'
            tag='header'
            justify='end'
            align='center'
            direction='row'
          >
          <Button
            icon={<FormClose />}
            onClick={() => this.setState({ showSidebar: false })}
          />
          </Box>
          <Box
            fill
            background='light-2'
            align='center'
            justify='center'
          >
          <SideBarMenu/>
          </Box>
        </Layer>
    )}
  </React.Fragment>
 )
}
export default SideBar