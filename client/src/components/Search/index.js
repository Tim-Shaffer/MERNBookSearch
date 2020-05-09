import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import { List, ListItem } from "../List";
import SaveBtn from "../SaveBtn"
import ViewBtn from "../ViewBtn";
import "./style.css";
import API from "../../utils/API";
import Footer from "../Footer";


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
    })
    .catch(err => console.log(err));
      
  };

  addBook = (addBook) => {
    const searchBooks = this.state.books;
    API.saveBook(addBook)
    .then(res => {
      const newBooks = searchBooks.filter(book => book.id != addBook.id);
      this.setState({ books: newBooks });
    })
    .catch(err => console.log(err));
  };

  render() {
    let setSticky = this.state.books.length > 0 ? "" : "sticky";
    return (
      <>
      <Container fluid>
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
              {this.state.books.length > 0 ? <div>
                  <h2>Results</h2>
                  <List>
                    {this.state.books.map(book => <ListItem key={book.id}>
                      <Row>
                        <Col size="md-8">
                          <h3>{book.title}</h3>
                          <h6>Written By: {book.authors.map(author => book.authors.length - 1 === book.authors.indexOf(author) ? author : author + ", ")} </h6>
                        </Col>
                        <Col size="md-4">
                          <SaveBtn onClick={() => this.addBook(book)}/>
                          <ViewBtn href={book.link}/>
                        </Col>
                      </Row>
                        <br />
                        <img src={book.image} alt={book.id} className="img img-thumbnail img-responsive float-left"></img>
                        <p>{book.description}</p>
                    </ListItem>)}  
                  </List>
                </div> 
              : 
                <div>
                  <h2>Search For Some Books!</h2>
                </div>
                
              }
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer sticky={setSticky}/>
      </>
    );
  }

}

export default Search;
