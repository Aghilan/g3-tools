import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
//import { BrandDetails } from '../BrandDetails';
import Tabulator from "tabulator-tables"; //import Tabulator library
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
import moment from 'moment';
import $ from 'jquery';
import {
  Button,
  ButtonGroup,
  Col,
  Row,
} from 'reactstrap';

import columns from './data-columns';
import data from './data';

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
    this.rowClick = this.rowClick.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);

    this.state = {rowClicked: false, tableInitiated: false};
    this.el = null;
    this.tabulator = null; //variable to hold your table
    this.columns = columns
    this.data = data//data for table to display

    //const BrandTableElement = <BrandTable data={brandData}/>;
  }


  componentDidMount() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.el, {
      data: this.data, //link data to table
      columns: this.columns,
      layoutColumnsOnNewData: true,
      resizableRows:true,
      pagination:"local",
      paginationSize:10,
      redirectToDetails: function() {
        this.setState({
          rowClick: true
        })
      }
    });
    console.log(this.tabulator);
    this.setState({tableInitiated: true})
  }

  rowClick(brand_id) {
    this.setState({rowClicked: true});
  }

  renderRedirect() {
    if(this.state.rowClicked)
      return <Redirect to='/branddetails' />
  }

  listRestriction (data, customOptions) {
    if (customOptions.restriction === "All") {
      return true;
    }
    return data.restricted === customOptions.restriction;
  }

  setRestriction(e) {
    let restriction = e.target.value;
    this.tabulator.setFilter(this.listRestriction, {restriction})
  }

  listStatus (data, customOptions) {
    return data.status === customOptions.status
  }

  setStatus (e) {
    console.log(e.target.value);
    let status = e.target.value
    this.tabulator.setFilter(this.listStatus, {status});
  }

  render() {
      var statuses = [];
      if(this.tabulator) {
        var tableData = this.tabulator.getData();
        tableData.map(item => {
          console.log(item.status);
          if (statuses.indexOf(item.status) === -1) {
            statuses.push(item.status)
          }
        });

      }

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
            <Col md="4" style={styles.radioTop} onChange={this.setRestriction.bind(this)}>
              <div className="form-check form-check-inline">
                <label className="form-check-label form-check-label">Filter:</label>
              </div>
              <div className="form-check form-check-inline">
                <input id="inline-radio1" name="inline-radios" type="radio" className="form-check-input form-check-input" value="No" />
                <label className="form-check-label form-check-label ">Unrestricted</label>
              </div>
              <div className="form-check form-check-inline">
                <input id="inline-radio2" name="inline-radios" type="radio" className="form-check-input form-check-input" value="Yes" />
                <label className="form-check-label form-check-label ">Restricted</label>
              </div>
              <div className="form-check form-check-inline">
                <input id="inline-radio3" name="inline-radios" type="radio" className="form-check-input form-check-input" value="All" />
                <label className="form-check-label form-check-label ">All</label>
              </div>
            </Col>
            <Col md="3">
              <div className="form form-inline">
                <label className="form form-label" style={styles.titleLabel}>By status:</label>
                <select name="selectSm" id="SelectLm" className="form-control-sm form-control" onChange={this.setStatus.bind(this)}>
                  {
                    statuses.map((status, index) => {
                      return (<option key={index} value={status}>{status}</option>)
                    })
                  }
                </select>
              </div>
            </Col>
            <Col md="3">
              <div className="form form-inline">
                <label className="form form-label" style={styles.titleLabel}>View</label>
                <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                  <option value="0">All brands, all status</option>
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
              <div ref={el => (this.el = el)} />
            </Col>
          </Row>
        </div>
      );
    }
}
export default Brands;
