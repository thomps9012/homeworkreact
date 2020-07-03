import React from 'react';
import "../styles/SearchBox.css";


//unsure about the handleSearchChange functionality
function SearchBox(props) {
    return (
      <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type in an employee name"
          id="employee"
        />
        <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    );
  }
  export default SearchBox;
  
  