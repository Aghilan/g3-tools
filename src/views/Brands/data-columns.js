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
  {title:"Name", headerFilter:true, field:"name", editor: true},
  {title:"Status", headerFilter:true, field:"status", editor:true},
  {title:"Active", headerFilter:true, field:"is_active", sorter: "boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input"},
  {title:"Primary Source", headerFilter:true, field:"primary_source", editor:true},
  {title:"Sold on Amazon", headerFilter:true, field:"is_sold_on_amazon", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: 'input', widthShrink: 2},
  {title:"Amazon Listing", headerFilter:true, field:"amazon_listing", align:"right", editor:true, widthShrink: 2},
  {title:"Scan Amazon", headerFilter:true, field:"is_scan_amazon", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input", widthShrink: 2},
  {title:"Restricted", headerFilter:true, field:"restricted", align:"center", editor:"select", editorParams:{"Y":"Yes", "N":"No"}},
  {title:"Good buys", headerFilter:true, field:"is_good_buys", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input", widthShrink: 2},
  {title:"Scraping", headerFilter:true, field:"is_scraping", sorter:"boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input", widthShrink: 2, variableHeight: true},
];

export default columns;
