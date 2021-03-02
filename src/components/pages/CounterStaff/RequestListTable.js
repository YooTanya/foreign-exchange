import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'transactionID', label: 'Transaction ID', minWidth: 170 },
  { id: 'customer', label: 'Customer', minWidth: 100 },
  { id: 'owner', label: 'Case Owner', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 }
];

function createData(transactionID, customer, owner, status) {
  return { transactionID, customer, owner, status };
}

const rows = [
  createData('UCL-2702213458', 'Rung Ngansanga', 'Tanya Rimphanitchayakit', 'PENDING'),
  createData('UCL-2702213458', 'Namthip Pratanakrit', 'Tanya Rimphanitchayakit', 'APPROVED'),
  createData('UCL-2702213458', 'Pongsak Kriangkrai', 'Worawut Songkhoal', 'REJECTED'),
  createData('UCL-2702213458', 'Khanit Nuchnoi', 'Srichan Kuthivimol', 'PENDING'),
  createData('UCL-2702213458', 'Suvimon Kunijvanit', 'Tanya Rimphanitchayakit', 'RESUBMITTED'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const RequestListTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        <div
                          className={clsx(
                              { 
                                'badge badge-pill badge-danger': value === 'REJECTED',
                                'badge badge-pill badge-warning':value === 'PENDING',
                                'badge badge-pill badge-primary': value === 'RESUBMITTED',
                                'badge badge-pill badge-success': value === 'APPROVED' 
                              }
                            )}>
                          {value}
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default RequestListTable;

