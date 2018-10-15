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
  {title:"Contact Name", field:"contact_name", width:200, headerFilter: true, editor: true},
  {title:"Primary", field:"primary", sorter: "boolean",  headerFilter: true, align:"center", formatter:"tickCross", editor: "tick", width: "input"},
  {title:"Phone", field:"phone", headerFilter: true,  width:200, editor: true},
  {title:"Email", field:"email", headerFilter: true,  editor:true, width: 200},
  {title:"Note", field:"note", headerFilter: true,  editor: true, width: 300}
];

export default columns;
