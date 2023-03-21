import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ExpenseContext from "../../Store/expense-context";

const ExpenseList = (props) => {

    const expenseCtx = useContext(ExpenseContext);

    useEffect(()=>{
        axios
         .get(
           "https://expense-tracker-9548b-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json"
         )
         .then((res) => {
           console.log(res.data);
           if(res.status===200){
               expenseCtx.expenselist(res.data);
           }
   
   
         })
         .catch((err) => {
           console.log(err);
         });
       },[])
   

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
