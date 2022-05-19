import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";
import "./table.scss";

const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81lDOtJRTkL._AC_SL1500_.jpg",
    customer: "John Smith",
    date: "23 May",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/71lS2lcZNLL._SL1500_.jpg",
    customer: "Michael Doe",
    date: "24 May",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71EMEQKULsL._AC_SL1500_.jpg",
    customer: "Mary Williams",
    date: "12 May",
    amount: 35,
    method: "Cash on Delivery",
    status: "pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/61-ODJrgv6L._AC_SL1500_.jpg",
    customer: "Smith White",
    date: "23 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SL1500_.jpg",
    customer: "Luka Garang",
    date: "03 April",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 4332412,
    product: "MacBook Pro 16-inch (Touch Bar and Touch ID)",
    img: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
    customer: "Sonny Sangha",
    date: "20 May",
    amount: 2799.99,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 3242234,
    product: "SAMSUNG 49 Odyssey Neo G9 G95NA Gaming Monitor",
    img: "https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SL1500_.jpg",
    customer: "Emmanuel Abi",
    date: "23 May",
    amount: 1525,
    method: "Cash on Delivery",
    status: "Approved",
  },
];

function BasicTable() {
  return (
    <div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt={row.product} />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BasicTable;
