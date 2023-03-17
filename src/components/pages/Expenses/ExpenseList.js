import React from "react";
import { Table } from "react-bootstrap";

const ExpenseList = (props) => {
  return (
    <div className="mt-3">
      <Table  striped hover className="p-4" >
        <thead >
          <tr>
            <th className="col-3">Amount Spend</th>
            <th className="col-6">Description</th>
            <th className="col-3">Categeory</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {props.expenses.map((expense) => (
            <tr key={expense.id}>
              <td><b className="text-danger">₹</b>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExpenseList;
