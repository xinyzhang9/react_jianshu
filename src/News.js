import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class News extends Component {
  state = {
    stories:[],
    topStories:[]
  }

  componentDidMount(){
    $.get('http://news-at.zhihu.com/api/4/news/latest').then(res => {
      console.log(res);
      this.setState({
        stories: res.stories,
        topStories: res.top_stories
      })
    })
  }
  render(){
    const { stories, topStories } = this.state;
    console.log(this.state);
    return(
      <div className='latest-news'>

        <section className='part1'>
          <div className='title'>Hottest News</div>
          <div className='container'>
            {
              topStories.map((item,i)=>(
                <div className='item-box' key={i}>
                  <img src={item.image} alt='' />
                  <div className='sub-title'>{ item.title }</div>
                </div>
              ))
            }
          </div>
        </section>

        <section className='part2'>
          <div className='title'>Hot News</div>
          <div className='container'>
            {
              stories.map((item,i)=>(
                <div className='item-box' key={i}>
                  <img src={item.images[0]} alt='' />
                  <div className='sub-title'>{ item.title }</div>
                </div>
              ))
            }
          </div>
        </section>

      </div>
    )
  }
}

export default News;
