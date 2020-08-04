import React from 'react';
import './app.scss';
import Header from './components/header/index';
import Headline from './components/headline/index';
import SharedButton from './components/button/index';
import ListItem from './components/listItem/index';
import {connect} from 'react-redux';
import {fetchPosts} from './actions';

const initialState = {
  hideBtn: false
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      ...initialState
    }
  }

  fetch = () => {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState = () => {
    const {hideBtn} = this.state;
    this.setState({
      hideBtn: !hideBtn
    }) 
  }

  exampleMethod_returnAValue = (number) => {
    return number + 1;
  }
  render(){

    const {posts} = this.props;
    const {hideBtn} = this.state;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }
  return (
    <div className="App" data-test='appComponent'>
      <Header />
      <section className='main'>
        <Headline header="Posts" desc={'click the button to render the post'}/>
        {!hideBtn &&
        <SharedButton {...configButton} /> }
        {
          posts.length > 0 && 
          <div>
            {posts.map((post, index) => {
              const {title, body} = post;
              const configListItem ={
                title,
                desc: body
              };
              return(
                <ListItem {...configListItem} key={index} />
              )
            })}
          </div>
        }
      </section>
    </div>
  )};
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, {fetchPosts})(App);
