import { Redirect } from 'react-router-dom'

var deleteIcon = function(value, data, cell, row, options){ //plain text value
  return "<i class='fa fa-trash'></i>"
};

var editIcon = function(value, data, cell, row, options){ //plain text value
  return "<a href='/#/brands'><i class='fa fa-edit'></i></a>"
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
  {title:"Source", field:"source", width:200, editor: true},
  {title:"Primary", field:"primary", sorter: "boolean", align:"center", formatter:"tickCross", editor: "tick", width: "input"},
  {title:"Discount Note", field:"discount_note", width:200, editor: true},
  {title:"Categories", field:"categories", editor:true, width: 200},
  {title:"b2b Site", field:"b2b_site", editor: true, width: 180},
  {title:"User Id", field:"user_id", editor: true, width: 100 },
  {title:"Password", field:"password", editor: true, width: 100},
];

export default columns;
