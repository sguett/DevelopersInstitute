import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/UserCard';
import CardList from './components/CardList';
// import 'tachyons';
import SearchBox from './components/SearchBox';
// import Scroll from './components/Scroll';
import 'bootstrap/dist/css/bootstrap.min.css';


// const robots = [
//   {
//     id: 1,
//     name: 'samuel',
//     username: 'sam123',
//     email: 'sam@gmail.com'
//   },
//   {
//     id: 2,
//     name: 'simon',
//     username: 'sim123',
//     email: 'simon@gmail.com'
//   },
//   {
//     id: 3,
//     name: 'michel',
//     username: 'michmich',
//     email: 'michel@gmail.com'
//   },
//   {
//     id: 8,
//     name: 'michelle',
//     username: 'michou',
//     email: 'michelle@gmail.com'
//   }
// ]




// convert const to class
// const App = () => {
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchText: '',
      rb: []
    }
    // console.log('constructor', 1);
  }

  componentDidMount() {
    // console.log('componentDidMount', 3);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.setState({ rb: data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    // this.setState({ searchText: event.target.value })
    // only setState call the render
    this.state.searchText = event.target.value;
  }

  onClickButton = () => {
    console.log('clicked on the button');
    this.setState({ searchText: this.state.searchText })
  }

  render() {
    // console.log('render', 2);
    const { searchText, rb } = this.state;
    // console.log('searchText', searchText);
    const filterRobots = rb.filter(item => {
      return item.name.toLowerCase().includes(searchText)
    })
    return (
      <div className="tc ma2 pd2" >
        {/* <Card id={3} name={'samuel'} username={'sam123'} email={'sam@gmail.com'} />
      <Card id={4} name={'simon'} username={'sim123'} email={'simon@gmail.com'} />
      <Card id={5} name={'michel'} username={'michmich'} email={'michel@gmail.com'} /> */}
        {/* <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email} /> */}
        {/* {
        robots.map(item => {
          // return <Card id={item.id} name={item.name} username={item.username} email={item.email} />
          return <Card robot={item} />
        })
      } */}
        <h1> RoboFriends</h1 >
        <SearchBox onSearchChange={this.onSearchChange} onClickButton={this.onClickButton} />
        {/* <Scroll> */}
        <CardList robots={filterRobots} />
        {/* </Scroll> */}

      </div >
    )
  }
}

export default App;
