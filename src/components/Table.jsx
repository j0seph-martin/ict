import React from 'react';
import './style/Table.css';

const ExpenseTable = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Category</th>
            <th>Description</th>
            <th>Expense</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>Breakfast</td>
            <td>100Rs</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Electricity</td>
            <td>February</td>
            <td>2000Rs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
