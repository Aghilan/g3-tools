import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
//import { BrandDetails } from '../BrandDetails';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Form,
  FormGroup,
  Table
} from 'reactstrap';

const styles = {
  button: {
    marginLeft: 10
  },
  titleLabel: {
    marginRight: 10
  },
  radioTop: {
    paddingTop: 4
  },
  handCursor: {
    cursor: "pointer"
  }
};

const brandData = new Array();

//brandData.push({"#": "", "Name": "110%", "S...": "110%", "D...": "Evaluating", ""});

class Brands extends Component {
  constructor(props) {
    super(props);

    this.BrandTable = this.BrandTable.bind(this);
    this.rowClick = this.rowClick.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);

    this.state = {rowClicked: false};

    //const BrandTableElement = <BrandTable data={brandData}/>;
  }

  BrandTable(props) {
  
    return (
      <table className="table table-bordered table-striped table-hover" id="brandsTable" style={styles.handCursor}>
        <thead align="center">
          <tr>
            <th>#</th>
            <th width="30%">Name</th>
            <th>S...</th>
            <th>D...</th>
            <th width="15%">Primary Source</th>
            <th>Amazon Listings</th>
            <th>Sold on Amazon</th>
            <th>Scan Amazon</th>
            <th>Restricted</th>
            <th>Good Buys</th>
            <th>Scraping</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr onClick={(e) => this.rowClick("brand_0")} id="brand_0">
            <td></td>
            <td>110%</td>
            <td>Evaluating</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>SBS</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>455</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>No</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td><input name="table-check" type="checkbox" /></td>
          </tr>
          <tr onClick={() => this.rowClick("brand_1")} id="brand_1">
            <td></td>
            <td>110%</td>
            <td>Evaluating</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>SBS</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>455</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>No</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td><input name="table-check" type="checkbox" /></td>
          </tr>
          <tr onClick={() => this.rowClick("brand_2")} id="brand_2">
            <td></td>
            <td>110%</td>
            <td>Evaluating</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>SBS</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>455</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>No</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td><input name="table-check" type="checkbox" /></td>
          </tr>
          <tr onClick={() => this.rowClick("brand_3")} id="brand_3">
            <td></td>
            <td>110%</td>
            <td>Evaluating</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>SBS</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>455</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>No</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td><input name="table-check" type="checkbox" /></td>
          </tr>
          <tr onClick={() => this.rowClick("brand_4")} id="brand_4">
            <td></td>
            <td>110%</td>
            <td>Evaluating</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>SBS</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>455</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td>No</td>
            <td><input name="table-check" type="checkbox" /></td>
            <td><input name="table-check" type="checkbox" /></td>
          </tr>
        </tbody>
      </table>
    );
  }

  rowClick(brand_id) {
    this.setState({rowClicked: true});
  }

  renderRedirect() {
    if(this.state.rowClicked)
      return <Redirect to='/branddetails' />
  }

  render() {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col sm="4">
              <h2>Brand Management</h2>
            </Col>
            <Col sm="3">
              <div className="input-group md-form form-sm form-2 pl-0">
                <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <Button className="input-group-text red lighten-3" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true"></i></Button>
                </div>
              </div>
            </Col>
            <Col sm="5">
              <ButtonGroup className="pull-right">
                <button type="button" className="btn btn-square btn-primary" style={styles.button}>Manage Views</button>
                <button type="button" className="btn btn-square btn-danger" style={styles.button}>Export</button>
                <button type="button" className="btn btn-square btn-success" style={styles.button}>Add Brand</button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row className="form-group mt-3">
            <Col md="4" style={styles.radioTop}>
              <div className="form-check form-check-inline">
                <label className="form-check-label form-check-label">Filter:</label>
              </div>
              <div className="form-check form-check-inline">
                <input id="inline-radio1" name="inline-radios" type="radio" className="form-check-input form-check-input" value="option1" />
                <label className="form-check-label form-check-label ">Unrestricted</label>
              </div>
              <div className="form-check form-check-inline">
                <input id="inline-radio2" name="inline-radios" type="radio" className="form-check-input form-check-input" value="option2" />
                <label className="form-check-label form-check-label ">Restricted</label>
              </div>
              <div className="form-check form-check-inline">
                <input id="inline-radio3" name="inline-radios" type="radio" className="form-check-input form-check-input" value="option3" />
                <label className="form-check-label form-check-label ">All</label>
              </div>
            </Col>
            <Col md="3">
              <div className="form form-inline">
                <label className="form form-label" style={styles.titleLabel}>By status:</label>
                <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                  <option value="0">All</option>
                  <option value="1">New</option>
                  <option value="2">Evaluating</option>
                  <option value="3">Prospect/option></option>
                  <option value="4">Pursuing</option>
                  <option value="5">Buying5</option>
                  <option value="6">No longer buying</option>
                  <option value="7">Rejected</option>
                </select>
              </div>
            </Col>
            <Col md="3">
              <div className="form form-inline">
                <label className="form form-label" style={styles.titleLabel}>By status:</label>
                <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                  <option value="0">Please select</option>
                  <option value="1">Option Option Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                  <option value="4">Option #4</option>
                  <option value="5">Option #5</option>
                </select>
              </div>
            </Col>
            <Col md="2">
              <div className="form form-inline pull-right">
                <a href="#" style={styles.button}>Update</a>
                <a href="#" style={styles.button}>Save as</a>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md="12">
              {this.renderRedirect()}
              {this.BrandTable()}
            </Col>
          </Row>
        </div>
      );
    }
}
export default Brands;