import React, { Component } from "react";
import { Grommet, Box, DataTable, Meter, Text, Button } from "grommet";
import { grommet } from "grommet/themes";
import {locations , DATA} from "./testData";
import Details from "./Details";

const amountFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});
const rowButton = (name) => {
  console.log({name})
  return (
    <React.Fragment>
      <Button onClick={() => {console.log("hello")}}>
        <Text weight="500">{name}</Text>
      </Button>
    </React.Fragment> 
  )
}
const columns = [
  {
    property: "name",
    header: <Text>Name</Text>,
    primary: true,
    footer: "Total"
  },
  {
    property: "location",
    header: "Location"
  },
  {
    property: "date",
    header: "Date",
    render: datum =>
      datum.date && new Date(datum.date).toLocaleDateString("en-US"),
    align: "end"
  },
  {
    property: "percent",
    header: "Percent Complete",
    render: datum => (
      <Box pad={{ vertical: "xsmall" }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    )
  },
  {
    property: "paid",
    header: "Paid",
    render: datum => amountFormatter.format(datum.paid / 100),
    align: "end",
    aggregate: "sum",
    footer: { aggregate: true }
  }
];



class TestDataTable extends Component {
  state = { data: DATA };

  onSearch = search => {
    let nextData;
    if (search) {
      const expressions = Object.keys(search).map(property => ({
        property,
        exp: new RegExp(search[property], "i")
      }));
      nextData = DATA.filter(
        d => !expressions.some(e => !e.exp.test(d[e.property]))
      );
    } else {
      nextData = DATA;
    }
    this.setState({ data: nextData });
  };

  render() {
    const {showDetails}=this.props;
    console.log({showDetails})
    const { data:servedData } = this.state;
    const newServedData = servedData.map(set => {
      const newSet = {
        name: rowButton(set.name),  
        location: set.location,
        date: set.date,
        percent: set.percent,
        paid: set.paid
      }
      return newSet
    }) 
    console.log({newServedData})
    return (
      <React.Fragment>
        <Box 
          border={{"all": "medium"}} 
          margin="large" 
          elevation="large"
          pad="large"
        >
          <DataTable
            columns={columns.map(column => ({
              ...column,
              search:
                column.property === "name" || column.property === "location"
            }))}
            sortable
            size="medium"
            data={newServedData}
            onSearch={this.onSearch} 
          />
        </Box>
        {showDetails && <Details/>}
      </React.Fragment>
        

    );
  }
}

export default TestDataTable