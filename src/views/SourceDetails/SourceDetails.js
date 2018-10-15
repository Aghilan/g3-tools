import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
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
  CustomInput,
  Row,
  Form,
  FormGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardText,
  Label,
  Input,
  FormText,
  Table
} from 'reactstrap';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import classnames from 'classnames';
import Tabulator from "tabulator-tables";
import columns from "./data-columns";
import data from "./data";

const styles = {
  labelWidth: {
    width: 180
  },
  rightLink: {
    lineHeight: 3,
    cursor: "pointer"
  },
  handCursor: {
    cursor: "pointer"
  }
}

class BrandDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.backClick = this.backClick.bind(this);

    this.state = {
      activeTab: '1',
      backClicked: false,
      tabInitiated: false,
      tableInitiated: false,
      key: 1,
      dropdownOpen: []
    };
    this.el = null;
    this.tabulator = null; //variable to hold your table
    this.columns = columns
    this.data = data //data for table to display
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
      },
      alpha: 22
    });
    console.log(this.tabulator);
    this.setState({tableInitiated: true})
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSelect(key) {
    this.setState({ key });
  }

  backClick() {
    this.setState({backClicked: true});
  }

  renderRedirect() {
    if(this.state.backClicked)
      return <Redirect to='/brands' />
    //global.isLoggedIn = true; console.log(global.isLoggedIn);
    //return <Redirect to='/dashboard' />
  }
  na

  // toggle(i) {
  //   const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
  //   this.setState({
  //     dropdownOpen: newArray,
  //   });
  // }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Row>
          <Col sm="7">
            <h3>Karl</h3>
          </Col>
          <Col sm="3">
            <Row>
              <label><h4>Active</h4></label>
            </Row>
          </Col>
          <Col sm="2">
            <Row>
              <Col sm="12" className="text-right"><a onClick={() => this.backClick()} style={styles.rightLink}>Return to List</a></Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Form action="" method="" encType="multipart/form-data" className="form-horizontal">
          <FormGroup row>
            <Col md="2">
              <Label className="pull-right mt-1" htmlFor="brand_name">Source name:</Label>
            </Col>
            <Col xs="12" md="4">
              <Input type="text" id="brand_name" name="brand_name" placeholder="Text" defaultValue="Karl" />
            </Col>
            <Col xs="12" md="1"></Col>
            <Col xs="10" md="4">
              <Label className="pull-left">
                <Label>Internal id: <strong>14</strong></Label>
              </Label>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2"/>
            <Col xs="12" md="4">
              <Input type="checkbox" defaultValue="true" />
              <Label> Active </Label>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label className="pull-right mt-1" htmlFor="description">Organiazation Name:</Label>
            </Col>
            <Col xs="12" md="4">
              <Input type="text" id="vendor_name" name="vendor_name" placeholder="Text" defaultValue="KarGo Promotions"/>
            </Col>
            <Col xs="12" md="1"></Col>
            <Col xs="12" md="4" className="created_date">
              <Label className="pull-left">Created: <strong>8/1/2018 4:22 PM</strong>&nbsp;&nbsp;&nbsp; By: <strong>dgarv</strong></Label>
              <Label className="pull-left">Modified: <strong>8/2/2018 9:52 PM</strong>&nbsp;&nbsp;&nbsp; By: <strong>dgarv</strong></Label>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label className="pull-right mt-1" htmlFor="upline_source">Upline source:</Label>
            </Col>
            <Col xs="12" md="4">
              <Input type="select" id="upline_source" name="upline_source" value="0">
                <option value="all">List of Source already defined</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="2">
              <Label className="pull-right mt-1" htmlFor="distributor">Note:</Label>
            </Col>
            <Col xs="12" md="10">
              <Input type="textarea" name="organization" id="organization" rows="4"
                     placeholder="Content..." defaultValue="Friend of Sean. Independent Sale Rep who buys larger quantities of products and sells to customer in Asia" />
            </Col>
          </FormGroup>
        </Form>
        <hr />
        <Row>
          <Col md="2">
            <Label className="pull-right mt-1">Contacts:</Label>
          </Col>
          <div ref={el => (this.el = el)} />
        </Row>
        <hr />
        <Row>
          <Col md="1">
            <Button color="primary"><a style={{color: 'white'}} href="/#/brands"><i className="icons cui-ban"></i>&nbsp; Delete</a></Button>{' '}
          </Col>
          <Col md="8"></Col>
          <Col md="1">
            <Button color="primary"><a style={{color: 'white'}} href="/#/brands"><i className="icons cui-ban"></i>&nbsp; Cancel</a></Button>{' '}
          </Col>&nbsp;&nbsp;
          <Col md="1">
            <Button color="primary"><a style={{color: 'white'}} href="/#/brands"><i className="fa fa-save"></i>&nbsp; Save</a></Button>{' '}
          </Col>
        </Row>
      </div>
    );
  }
}
export default BrandDetails;
