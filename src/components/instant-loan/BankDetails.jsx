import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { bankLoanDetails } from './BankLoanDetails';
import { getMonthlyEmi } from '@/app/libs/getMonthlyEmi';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BankDetails({
    amount = 2000000,
    tenure = 10,
    onNext
}) {
  return (
    <div>
        <div className='py-2 px-4 flex justify-between items-center text-gray-400 ' >
            <div className='flex gap-4 items-center '>
                <span className='px-4 border-r border-r-gray-400  font-medium textarea-lg'>
                    Modify Search
                </span>

                <span className='px-4 border-r border-r-gray-400  font-medium textarea-lg'>
                    Loan Amount: 
                    <span className="text-black font-semibold">
                    ₹{amount}
                    </span>
                </span>
                <span className='px-4 border-r border-r-gray-400  font-medium textarea-lg'>
                    Tenure:
                    <span className="text-black font-semibold">
                    {tenure} Years
                    </span>
                </span>
                <span className='pl-4 font-medium textarea-lg' 
             
                >
                    <button className="text-blue-600 bg-white text-lg font-bold"
                    onClick={() => onNext('back')}
                    >
                        Change Details
                    </button>
                </span>

            </div>
            <div>

            </div>
        </div>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Bank Name</TableCell>
            <TableCell align="right">Rate Of Interest</TableCell>
            <TableCell align="right">Processing Fees&nbsp;(g)</TableCell>
            <TableCell align="right">EMI&nbsp;(g)</TableCell>
            <TableCell align="right">Max Loan Amount&nbsp;(g)</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bankLoanDetails.map((bank, index) => (
            <TableRow TableRow
              key={bank.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
                {bank.name}
              </TableCell>
              <TableCell align="right">{bank.roi}%</TableCell>
              <TableCell align="right">{bank.fees}</TableCell>
              <TableCell align="right">
              ₹{getMonthlyEmi(amount, bank.roi, tenure)[0]}
              </TableCell>
              <TableCell align="right">{bank.maxLoan}%</TableCell>
              <TableCell align="left" className="flex gap-4 items-center">
                <span>
                    Email Me
                </span>

                <button className='bg-blue-500 text-white px-4 py-2 roudned shadow'>
                    Get Me This Deal
                </button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}