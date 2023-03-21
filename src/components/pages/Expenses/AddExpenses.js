import React, { useRef, useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import ExpenseContext from "../../Store/expense-context";
import ExpenseList from "./ExpenseList";

const AddExpenses = () => {
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();

  const expenseCtx = useContext(ExpenseContext);
  const [expenses, setExpenses] = useState(expenseCtx.expenses);

  const addExpenseHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Math.random(),
      amount: amountInputRef.current.value,
      description: descriptionInputRef.current.value,
      category: categoryInputRef.current.value,
    };
    expenseCtx.addExpense(newExpense);
    setExpenses([...expenses, newExpense]); // Add new expense to state

  axios.post('https://expense-tracker-9548b-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json',{
    id: Math.random(),
  amount: amountInputRef.current.value,
  description: descriptionInputRef.current.value,
  category: categoryInputRef.current.value,
})
.then((res)=>{
    console.log(res.data.name);
})
.catch(err=>{
    console.log(err);
})
};

  return (
    <>
      <Container>
        <div>
          <Form onSubmit={addExpenseHandler} className="mt-5">
            <Row>
              <Col xs={2}>
                <Form.Label>Amout Spend</Form.Label>
                <Form.Control
                  placeholder="Amount"
                  type="number"
                  ref={amountInputRef}
                />
              </Col>
              <Col xs={5}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Description"
                  type="text"
                  ref={descriptionInputRef}
                />
              </Col>
              <Col xs={3}>
                <Form.Label>Categeory</Form.Label>
                <Form.Select defaultValue="Choose" ref={categoryInputRef}>
                  <option>Choose...</option>
                  <option>Fuel</option>
                  <option>Medicine</option>
                  <option>Education</option>
                  <option>Entertainment</option>
                  <option>Hosehold</option>
                </Form.Select>
              </Col>
              <Col>
                <Button className="mt-4" type="submit">Add</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <Link to="/welcome"> <Button className="mt-2 mb-4" variant="danger">
          Go to Home
        </Button></Link>
       
        {expenses.length > 0 && <ExpenseList expenses={expenses} />}
      </Container>
    </>
  );
};

export default AddExpenses;
