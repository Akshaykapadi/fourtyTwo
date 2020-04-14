import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Search from './Search.js';

import Data from '../data.json';
import moment from 'moment';

const columns = [
  { 
    id: 'name', 
    label: 'Username' 
},
  { 
      id: 'mobile', 
      label: 'Mobile'
    },
  {
    id: 'factor',
    label: '2-Factor Status',
  },
  {
    id: 'maker',
    label: 'Maker',
  },
  {
    id: 'approvalstatus',
    label: 'Approval Status',
  },
  {
    id: 'comments',
    label: 'Comments',
  },
  {
    id: 'userstatus',
    label: 'User Status',
  },
  {
    id: 'fullname',
    label: 'FullName',
  },
  {
    id: 'created_at',
    label: 'Created At',
  },
  {
    id: 'modified_at',
    label: 'Modified At',
  },
  {
    id: 'checkercomments',
    label: 'Checker Comments',
  },
  {
    id: 'action_type',
    label: 'Action type',
  },
];




const useStyles = makeStyles({
  root: {
    width: '97%',
    marginTop:10,
    marginLeft:'2%',
    
  },
  container: {
    maxHeight: 400,
    marginTop:10
  },
  heading:{
    paddingLeft:20,
    paddingTop:20
  }
  
});

export default function Audit() {
    
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [dataCount,setDataCount] = React.useState(0);
  const [query,setQuery] = React.useState('');
  const [tempData, setTempData] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };


  const onClickFilter = () => {
    

    if(query){
 
        var  searchedData = [];

        Data.map((val,index)=>{
            if(query === val.mobile){
                searchedData.push(val);
            }
           
        });
        setTempData(searchedData);
        setDataCount(searchedData.length);
      }else{
        setTempData(Data);
        setDataCount(Data.length);
      }
   
  };

  React.useEffect(() => {
    onClickFilter();
  },[]);

 

  return (
    
    <Paper className={classes.root}>
    <h2 className={classes.heading} > Audit Trail Page</h2>
    <hr/>
    <Search query={onQueryChange} filter={onClickFilter}/>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {
              tempData.length ?  tempData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => {
            
                var create_date = moment(data.dateTimeCreated).format("DD/MM/YYYY hh:MM A");
                var modified_date = moment(data.dateTimeModified).format("DD/MM/YYYY hh:MM A");
                
                return (
                  <TableRow hover tabIndex={-1} key={data.code}>
                      
                     <TableCell>{data.username}</TableCell>
                     <TableCell>{data.mobile}</TableCell>
                     <TableCell>{data.twoFactorStatus}</TableCell>
                     <TableCell>{data.maker}</TableCell>
                     <TableCell>{data.approvalStatus}</TableCell>
                     <TableCell>{data.comments}</TableCell>
                     <TableCell>{data.userStatus}</TableCell>
                     <TableCell>{data.fullName}</TableCell>
                      <TableCell>{create_date}</TableCell>
                     <TableCell>{modified_date}</TableCell>
                     <TableCell></TableCell>
                     <TableCell>{data.actionType}</TableCell>
                  </TableRow>
                );
              }):<TableRow >
                  <TableCell colSpan={12} style={{textAlign:'center'}}>No Records Found</TableCell>
              </TableRow>
              
          } 
         
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    
   
    
  );
}
