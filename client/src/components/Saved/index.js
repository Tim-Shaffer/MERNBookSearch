import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import ViewBtn from "../ViewBtn";
import API from "../../utils/API";
import Footer from "../Footer";
import DeleteBtn from "../DeleteBtn";

class Saved extends Component {
  
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    API.savedBooks()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    let setSticky = this.state.books.length > 1 ? "" : "sticky";
    return (
      <>
      <Container fluid>
        <Container fluid>
          <Row>
            <Col size="md-12">
              {this.state.books.length > 0 ? <div>
                  <h2>Saved Books</h2>
                  <List>
                    {this.state.books.map(book => <ListItem key={book.id}>
                      <Row>
                        <Col size="md-8">
                          <h3>{book.title}</h3>
                          <h6>Written By: {book.authors.map(author => book.authors.length - 1 === book.authors.indexOf(author) ? author : author + ", ")} </h6>
                        </Col>
                        <Col size="md-4">
                          <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                          <ViewBtn href={book.link}/>
                        </Col>
                      </Row>
                        <br />
                        <img src={book.image} alt={book.id} className="img img-thumbnail img-responsive float-left"></img>
                        <p>{book.description}</p>
                    </ListItem>)}  
                  </List>
                </div> 
              : <div>
                  <h2>No Books Have Been Saved</h2>
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

export default Saved;
