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
  {title:"Source", headerFilter:true, field:"source", editor: true},
  {title:"Organization", headerFilter:true, field:"organization", editor:true},
  {title:"Upline", headerFilter:true, field:"upline", editor: true},
  {title:"Primary Contact", headerFilter:true, field:"primaryContact", editor:true},

];

export default columns;
