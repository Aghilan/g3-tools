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

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          backClicked: false,
          tabInitiated: false,
          tableInitated: false,
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
                    <h3>Aden & Anais</h3>
                  </Col>
                  <Col sm="3">
                    <Row>
                      <label><h4>New</h4></label>
                    </Row>
                    <Row>
                      <label><h4>Restricted</h4></label>
                    </Row>
                  </Col>
                  <Col sm="2">
                    <Row>
                      <Col sm="12" className="text-right"><a onClick={() => this.backClick()} style={styles.rightLink}>Return to List</a></Col>
                    </Row>
                    <Row className="float-right ">
                      <div className="dropdown">
                        <button className="dropbtn">...</button>
                        <div className="dropdown-content">
                          <a href="#">Delete Brand</a>
                        </div>
                      </div>
                    </Row>
                  </Col>
                </Row>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Brand Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Research
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '3' })}
                      onClick={() => { this.toggle('3'); }}
                    >
                      Comments
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Form action="" method="" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="2">
                          <Label className="pull-right mt-1" htmlFor="brand_name">Brand name:</Label>
                        </Col>
                        <Col xs="12" md="4">
                          <Input type="text" id="brand_name" name="brand_name" placeholder="Text" />
                        </Col>
                        <Col xs="12" md="1"></Col>
                        <Col xs="10" md="4">
                          <Label className="pull-left">
                            <Label>Internal id: <strong>2353</strong></Label>
                          </Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="2">
                          <Label className="pull-right mt-1" htmlFor="description">Description:</Label>
                        </Col>
                        <Col xs="12" md="4">
                          <Input type="textarea" name="description" id="description" rows="4"
                                placeholder="Content..." />
                        </Col>
                        <Col xs="12" md="1"></Col>
                        <Col xs="12" md="4">
                          <Label className="pull-left">Created: <strong>8/1/2018 4:22 PM</strong>&nbsp;&nbsp;&nbsp; By: <strong>dgarv</strong></Label>
                          <Label className="pull-left">Modified: <strong>8/2/2018 9:52 PM</strong>&nbsp;&nbsp;&nbsp; By: <strong>dgarv</strong></Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="2">
                          <Label className="pull-right mt-1" htmlFor="status">Status:</Label>
                        </Col>
                        <Col xs="12" md="6">
                          <ButtonGroup name="status" id="status">
                            <Button className="active" color="success">New</Button>
                            <Button color="success">Evaluating</Button>
                            <Button color="success">Prospect</Button>
                            <Button color="success">Pursuing</Button>
                            <Button color="success">Buying</Button>
                            <Button color="success">No longer buying</Button>
                            <Button color="success">Rejected</Button>
                          </ButtonGroup>
                        </Col>
                        <Col xs="12" md="1"></Col>
                        <Col xs="12" md="3">
                            <Input className="form-check-input" type="checkbox" id="ck_active" name="ck_active" value="option1" />
                            <Label className="form-check-label" check htmlFor="ck_active">Active (show on brand lists)</Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="2">
                          <Label className="pull-right mt-1" htmlFor="vendor_name">Vendor name:</Label>
                        </Col>
                        <Col xs="12" md="4">
                          <Input type="text" id="vendor_name" name="vendor_name" placeholder="Text" />
                        </Col>
                        <Col xs="12" md="3"></Col>
                        <Col xs="12" md="3">
                            <Input className="form-check-input" type="checkbox" id="ck_quantity" name="ck_quantity" value="option1" />
                            <Label className="form-check-label" check htmlFor="ck_quantity">Scraping quantity</Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="2">
                          <Label className="pull-right mt-1" htmlFor="distributor">Distributor:</Label>
                        </Col>
                        <Col xs="12" md="4">
                          <Input type="text" id="distributor" name="distributor" placeholder="Text" />
                        </Col>
                        <Col xs="12" md="3"></Col>
                        <Col xs="12" md="3" className="scraping_cost">
                            <Input className="form-check-input" type="checkbox" id="ck_cost" name="ck_cost" value="option1" />
                            <Label className="form-check-label" check htmlFor="ck_cost">Scraping cost</Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="2">
                          <Label className="pull-right mt-1" htmlFor="lead_from">Lead from:</Label>
                        </Col>
                        <Col xs="12" md="4">
                          <Input type="text" id="lead_from" name="lead_from" placeholder="Text" />
                        </Col>
                        <Col xs="12" md="3"></Col>
                        <Col xs="12" md="3" className="scraping_upc">
                            <Input className="form-check-input" type="checkbox" id="ck_UPCs" name="ck_UPCs" value="option1" />
                            <Label className="form-check-label" check htmlFor="ck_UPCs">Scraping UPCs</Label>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="2">
                          <Label className="pull-right mt-1" htmlFor="tags">Tags:</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="tags" name="tags" placeholder="Text" />
                        </Col>
                      </FormGroup>
                    </Form>
                    <div ref={el => (this.el = el)} />
                    <Row>
                      <Col md="10"></Col>
                      <Col md="1">
                        <Button color="primary"><a style={{color: 'white'}} href="/#/brands"><i className="icons cui-ban"></i>&nbsp; Cancel</a></Button>{' '}
                      </Col>
                      <Col md="1">
                        <Button color="primary"><a style={{color: 'white'}} href="/#/brands"><i className="fa fa-save"></i>&nbsp; Save</a></Button>{' '}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="6">
                        <Card className="border-info">
                          <CardHeader>
                            Amazon
                          </CardHeader>
                          <CardBody>
                            <Form action="" className="form-horizontal">
                              <FormGroup row>
                                <Col md="3">
                                </Col>
                                <Col xs="12" md="9">
                                  <FormGroup check>
                                    <Label check>
                                      <Input type="checkbox" id="amazone" />
                                      Sold on Amazon
                                    </Label>
                                  </FormGroup>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right">Restricted:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <FormGroup check inline>
                                    <Input className="form-check-input" type="radio" id="res_no" name="inline-radios" value="option1" />
                                    <Label className="form-check-label" check htmlFor="inline-radio1">No</Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Input className="form-check-input" type="radio" id="res_yes" name="inline-radios" value="option2" />
                                    <Label className="form-check-label" check htmlFor="inline-radio2">Yes</Label>
                                  </FormGroup>
                                  <FormGroup check inline>
                                    <Input className="form-check-input" type="radio" id="res_some" name="inline-radios" value="option3" />
                                    <Label className="form-check-label" check htmlFor="inline-radio3">Some</Label>
                                  </FormGroup>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right" htmlFor="description_note">Restricted note:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="textarea" name="description_note" id="description_note" rows="4"
                                        placeholder="Content..." />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1" htmlFor="listings"># Amazon listings:</Label>
                                </Col>
                                <Col xs="12" md="2">
                                  <Input type="text" id="listings" name="listings" placeholder="Text" />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                </Col>
                                <Col xs="12" md="9">
                                  <FormGroup check>
                                    <Label check>
                                      <Input type="checkbox" id="amazone_scan" />
                                      Do Amazon scan
                                    </Label>
                                  </FormGroup>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1">Amazon scan:</Label>
                                </Col>
                                <Col xs="12" md="4">
                                  <InputGroup>
                                    <Input type="text" id="calendar" name="calendar" placeholder="yyyy/mm/dd" />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                        <i className="icons cui-calendar"></i>
                                      </InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1" htmlFor="scan_items"># scan items:</Label>
                                </Col>
                                <Col xs="12" md="2">
                                  <Input type="text" id="scan_items" name="scan_items" placeholder="Text" />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1" htmlFor="category">Categories:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="category" name="category" placeholder="Text" />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1" htmlFor="search">Search url:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="text" id="search" name="search" placeholder="Text" />
                                </Col>
                              </FormGroup>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card className="border-info">
                          <CardHeader>
                            Spec Evaluation
                          </CardHeader>
                          <CardBody>
                            <Form action="" className="form-horizontal">
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1">Initial evaluation:</Label>
                                </Col>
                                <Col xs="12" md="4">
                                  <InputGroup>
                                    <Input type="text" id="init_calendar" name="init_calendar" placeholder="yyyy/mm/dd" />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                        <i className="icons cui-calendar"></i>
                                      </InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1" htmlFor="buy_count">Good buy count:</Label>
                                </Col>
                                <Col xs="12" md="2">
                                  <Input type="text" id="buy_count" name="buy_count" placeholder="Text" />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1" htmlFor="variations"># of variations:</Label>
                                </Col>
                                <Col xs="12" md="2">
                                  <Input type="text" id="variations" name="variations" placeholder="Text" />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right" htmlFor="evaluation_note">Evaluation note:</Label>
                                </Col>
                                <Col xs="12" md="9">
                                  <Input type="textarea" name="evaluation_note" id="evaluation_note" rows="4"
                                        placeholder="Content..." />
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <Col md="3">
                                  <Label className="pull-right mt-1">Initial upload:</Label>
                                </Col>
                                <Col xs="12" md="4">
                                  <InputGroup>
                                    <Input type="text" id="init_upload" name="init_upload" placeholder="yyyy/mm/dd" />
                                    <InputGroupAddon addonType="append">
                                      <InputGroupText>
                                        <i className="icons cui-calendar"></i>
                                      </InputGroupText>
                                    </InputGroupAddon>
                                  </InputGroup>
                                </Col>
                              </FormGroup>
                              <FormGroup row>
                                <br /><br /><br /><br /><br /><br /><br />
                              </FormGroup>
                            </Form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="10"></Col>
                      <Col md="1">
                        <Button color="primary"><i className="icons cui-ban"></i>&nbsp; Cancel</Button>{' '}
                      </Col>
                      <Col md="1">
                        <Button color="primary"><i className="fa fa-save"></i>&nbsp; Save</Button>{' '}
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Card className="border-warning">
                      <CardHeader>
                        <h4 className="ml-3">Comments:</h4>
                        <Button className="pull-right" color="primary"><i className="fa fa-plus"></i>&nbsp; Add Comment</Button>{' '}
                      </CardHeader>
                      <CardBody>
                        <FormGroup row>
                          <Col md="3">
                            <Label className="ml-5" htmlFor="username">My User Name</Label>
                            <p className="ml-5">3 Aug 2018 8:16 AM CDT</p>
                          </Col>
                          <Col md="7">
                            <Input type="text" id="username" name="username" placeholder="Text" />
                          </Col>
                        </FormGroup>
                        <hr />
                        <FormGroup row>
                          <Col md="3">
                            <Label className="ml-5" htmlFor="username">Dan Garvin</Label>
                            <p className="ml-5">2 Aug 2018 .10:24 PM CDT</p>
                            <span className="ml-5"><a href="#"><i className="fa fa-pencil fa-lg"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><i className="fa fa-trash-o fa-lg"></i></a></span>
                          </Col>
                          <Col md="7">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum ut odio non fringilla. Morbi elementum dapibus eleifend. Maecenas molestie justo vitae placerat vehicula. Duis nec mauris dui. Integer luctus enim eget blandit sollicitudin. Aenean non nibh in augue ultricies dignissim. Nam ac ex in lorem sodales convallis. Quisque imperdiet commodo justo, a fermentum augue feugiat et. Mauris rutrum magna ac iaculis maximus. Integer et eleifend ipsum.
                            </p>
                          </Col>
                        </FormGroup>
                      </CardBody>
                    </Card>
                    <Row>
                      <Col md="10"></Col>
                      <Col md="1">
                        <Button color="primary"><i className="icons cui-ban"></i>&nbsp; Cancel</Button>{' '}
                      </Col>
                      <Col md="1">
                        <Button color="primary"><i className="fa fa-save"></i>&nbsp; Save</Button>{' '}
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
            </div>
        );
    }
}
export default BrandDetails;
