import { Redirect } from 'react-router-dom'

var deleteIcon = function(value, data, cell, row, options){ //plain text value
  return "<i class='fa fa-trash'></i>"
};

var editIcon = function(value, data, cell, row, options){ //plain text value
  return "<a href='/#/branddetails'><i class='fa fa-edit'></i></a>"
};

function customFilter(data, filterParams){
  return data.id !== filterParams.id; //must return a boolean, true if it passes the filter.
}

const columns = [
  {
    title:"" ,
    field: "id",
    sortable:false,
    align: 'center',
    formatter:editIcon,
    cellClick: function (e, cell) {
      let table = cell.getTable();
      console.log(table);
      console.log(table.options);
      let rowId = cell.getRow().getData().id;
      // return (<Redirect to='/branddetails' />);
    }
  },
  {
    title:"" ,
    field: "id",
    sortable:false,
    align: 'center',
    formatter: deleteIcon,
    cellClick: function (e, cell) {
      let table = cell.getTable();
      let rowId = cell.getRow().getData().id;
      table.addFilter(customFilter, {id: rowId})

    }
  },
  {title:"Name", field:"name", width:250, editor: true},
  {title:"Status", field:"status", width: 100, editor:true},
  {title:"Active", field:"is_active", sorter: "boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input"},
  {title:"Primary Source", field:"primary_source", editor:true, width: 150},
  {title:"Sold on Amazon", field:"is_sold_on_amazon", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: 'input', widthShrink: 2, width: 70},
  {title:"Amazon Listing", field:"amazon_listing", align:"right", editor:true, widthShrink: 2, width: 70},
  {title:"Scan Amazon", field:"is_scan_amazon", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input", widthShrink: 2, width: 70},
  {title:"Restricted", field:"restricted", align:"center", editor:"select", editorParams:{"Y":"Yes", "N":"No"},  width: 75},
  {title:"Good buys", field:"is_good_buys", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input", widthShrink: 2, width: 70},
  {title:"Scraping", field:"is_scraping", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input", widthShrink: 2, width: 70, variableHeight: true},
];

export default columns;
