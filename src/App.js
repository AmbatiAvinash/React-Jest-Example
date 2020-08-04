import React from 'react';
import './app.scss';
import Header from './components/header/index';
import Headline from './components/headline/index';
import SharedButton from './components/button/index';
import ListItem from './components/listItem/index';
import {connect} from 'react-redux';
import {fetchPosts} from './actions';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  fetch = () => {
    this.props.fetchPosts();
  }
  render(){

    const {posts} = this.props
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header="Posts" desc={'click the button to render the post'}/>
        <SharedButton {...configButton} />
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
                <ListItem {...configListItem} />
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
