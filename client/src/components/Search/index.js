import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import "./style.css";
import API from "../../utils/API";

class Search extends Component {
  
  state = {
    books: [],
    search: "",
    apiKey: `${process.env.REACT_APP_API_KEY}`
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles and update the articles state
    event.preventDefault();

    API.getBooks(this.state.search, this.state.apiKey)
    .then(res => {
      const searchBooks = []
      for (var i=0; i < res.data.items.length; i++) {
        searchBooks.push(
          { id: res.data.items[i].id,
            title: res.data.items[i].volumeInfo.title,
            description: res.data.items[i].volumeInfo.description,
            image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
            link: res.data.items[i].volumeInfo.infoLink,
            authors: res.data.items[i].volumeInfo.authors
          })
      }
      this.setState({ books: searchBooks, search: ""});
      console.log(this.state.books)
    })
    .catch(err => console.log(err));
      
  };

  render() {
    return (
      <Container>
        <Container fluid searchform>  
          <Row>
            <Col size="md-12">
              <h1>Book Search</h1>

              <form >
                <Input value={this.state.search} onChange={this.handleInputChange} name="search" placeholder="Search (required)" />

                <FormBtn disabled={!(this.state.search)} onClick={this.handleFormSubmit}>
                  Search 
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col size="md-12">
              {this.state.books.length ? <div>
                  <h2>Results</h2>
                  <List>
                    {this.state.books.map(book => <ListItem key={book.id}>
                        <a target="_blank" href={book.link} rel="noopener">
                          <strong>{book.title}</strong>
                        </a>
                        <br />
                        <img src={book.image} alt={book.id} className="img img-thumbnail img-responsive float-left"></img>
                        <p>{book.description}</p>
                      </ListItem>)}
                  </List>
                </div> : <h3>{this.state.searchClicked ? 'No Results Found' : ''} </h3>}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

}

export default Search;
