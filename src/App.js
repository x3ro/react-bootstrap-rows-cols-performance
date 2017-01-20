import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './App.css';

let numberOfRows = 10000;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {data: this.props.data}
    this.change = this.change.bind(this)
  }

  change() {
    let rowIndex = Math.round((numberOfRows-1) * Math.random())
    // console.log("Changing row with index " + rowIndex)

    this.props.data[rowIndex]["number"] = Math.round(Math.random() * 100);
    this.setState({data: this.props.data})
  }

  render() {
    // return (
    //   <div className="App">
    //     <Button bsStyle="primary" onClick={this.change}>Change a random row</Button>
    //     <div className="container">
    //       {this.state.data.map(({name, number}, i) =>
    //         <Row key={i}>
    //           <Col md={12} >
    //             Name: {name} ({number})
    //           </Col>
    //         </Row>
    //       )}
    //     </div>
    //   </div>
    // );

    return (
      <div className="App">
        <Button bsStyle="primary" onClick={this.change}>Change a random row</Button>
        <div className="container">
          <Row>
            <Col md={12}>
              This makes sure that react-bootstrap is added to the bundle
              but should have no relevant performance impact.
            </Col>
          </Row>

          {this.state.data.map(({name, number}, i) =>
            <div className="row" key={i}>
              <div className="col-md-12">
                Name: {name} ({number})
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

var data = [];
for(var i=0; i<numberOfRows; i++) {
  data.push( {'name': 'Foo', 'number': Math.round(Math.random() * 100000000)} );
}

App.defaultProps = {
        data: data
}

export default App;
