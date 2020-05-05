import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="jumbotron searchform">
      <h3>Book Search</h3>
      <form>
        <div className="form-group">
          <label for="booksearch">Book</label>
          <input type="text" className="form-control" id="booksearch" placeholder="Enter Book Name" />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
