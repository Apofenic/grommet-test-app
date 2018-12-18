import React, { Component } from 'react';
import { Box, Grommet,ResponsiveContext } from 'grommet';
import MenuBar from './MenuBar';
import SideBar from './SideBar';
import TestDataTable from './DataTable'
import CreateModal from './CreateModal'

const theme = {
  global: {
    colors: {
      brand: '#DC3A39',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  state = {
    showSidebar: false,
    showDetails: false,
    showCreateModal: false,
  }
  handleToggle=()=>{
    this.setState({ showSidebar: !this.state.showSidebar })
  }
  handleDetails=()=>{
    this.setState({ showDetails: !this.state.showDetails })
  }
  handleCreate = () => {
    this.setState({ showCreateModal: !this.state.showCreateModal })
  }

  render() {
    const { showSidebar, showCreateModal } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <MenuBar 
                props={this.props}
                handleToggle={this.handleToggle}
                handleCreate={this.handleCreate}
              />
              <Box direction='row' flex>
                <Box flex align='center' justify='start'>
                  <TestDataTable
                    hanldDetails={this.showDetails}
                  />
                </Box>
                <SideBar
                  size={size}
                  showSidebar={showSidebar}
                />
              </Box>
              {showCreateModal && <CreateModal/>}
            </Box> 
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
