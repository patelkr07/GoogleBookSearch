import React, { Component } from "react";
// import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
// import Input from "./components/Input"
// import Button from "./components/Button"
// import API from "./utils/API";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import { BookList, BookListItem } from "./components/BookList";
// import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component {Search} />
          <Route path="/saved" component {Saved} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;

























































































// class App extends Component {
//   state = {
//     books: [],
//     bookSearch: ""
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getBooks(this.state.bookSearch)
//     .then(res => this.setState({ books: res.data }))
//     .catch(err => console.log(err));

//   };

//   render() {
//     return (
//       <div>
//         <Nav />
//         <Jumbotron />
//         <Container>
//           <Row>
//             <Col size="md-12">
//               <form>
//                 <Container>
//                   <Row>
//                     <Col size="xs-9 sm-10">
//                       <Input
//                         name="bookSearch"
//                         value={this.state.bookSearch}
//                         onChange={this.handleInputChange}
//                         placeholder="Search for a Book"
//                       />
//                     </Col>
//                     <Col size="xs-3 sm-2">
//                       <Button
//                         onClick={this.handleFormSubmit}
//                         type="success"
//                         className="input-lg"
//                       >
//                         Search
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Container>
//               </form>
//             </Col>
//           </Row>
//             <Col size="xs-12">
//               {!this.state.books.length ? (
//                 <h1 className="text-center">No Books to Display</h1>
//               ) : (
//                 <BookList>
//                   {this.state.books.map(book => {
//                     return (
//                       <BookListItem
//                         key={book.title}
//                         title={book.title}
//                         authors={book.authors}
//                         description={book.description}
//                         image={book.image}
//                         link={book.link}
//                         thumbnail={book.thumbnail}
//                       />
//                     );
//                   })}
//                 </BookList>
//               )}
//             </Col>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;





















































// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import Books from "./pages/Books";
// // import Nav from "./components/Nav"
// // import './App.css';


// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Nav />
// //         <Switch>
// //           <Route exact path="/" component={Books} />
// //           <Route exact path="/books" component={Books} />
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;










// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
