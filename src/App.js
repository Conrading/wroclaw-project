import React, { Component } from 'react'
import Philosophy from './components/philosophy'
import StoryReader from './components/storyReader'
import Author from './components/author'
import './App.css';

class Główna extends Component {
  constructor () {
    super ();
    this.state = {
      contentSwitch: "default",
    }
  }  componentDidMount() {
    this.addShapes();
  }

  addShapes() {
    const container = document.querySelector('.background-upper');
    for (let i = 0; i < 30; i++) { // Create 30 shapes
      const shape = document.createElement('div');
      shape.classList.add('shape');
      container.appendChild(shape);
    }

    // Add final rectangle
    const finalRectangle = document.createElement('div');
    finalRectangle.classList.add('final-rectangle');
    container.appendChild(finalRectangle);
  }
  render () {
    return (
      <body>
        <div className='background-upper'></div>
        <div className='main-container'>
          {this.state.contentSwitch === "default" &&
          <div>
            <div className='project-phone-only-background'></div>
            <div className='project-area'>
              <div onClick={() => {this.setState({contentSwitch: "Philosophy"})}} className="project-eachcard project-eachcard-philosophy">
                <div className='project-title'>the Philosophy</div>
              </div>
              <div onClick={() => {this.setState({contentSwitch: "Story"})}} class="project-eachcard project-eachcard-readStory">
                <div className='project-title'>read the Story</div>
              </div>
              <div onClick={() => {this.setState({contentSwitch: "Author"})}} class="project-eachcard project-eachcard-aboutAuthor">
                <div className='project-title'>about Author</div>
              </div>
            </div>
          </div>}
          {this.state.contentSwitch === "Philosophy" && 
          <div>
            <div className='backGap'></div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <div className='backGap'></div>
            <Philosophy />
          </div>}
          {this.state.contentSwitch === "Story" && 
          <div>
            <div className='backGap'></div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <div className='backGap'></div>
            <StoryReader />
          </div>}
          {this.state.contentSwitch === "Author" && 
          <div>
            <div className='backGap'></div>
            <div onClick={() => {this.setState({contentSwitch: "default"})}} className='contentSwitcher'>Back</div>
            <div className='backGap'></div>
            <Author />
          </div>}
        </div>
        <br />
        <div className='bottom-note'>
          <div>Conrading 是暢又澍 | <a href="https://www.instagram.com/differenceisfine/">@differenceisfine</a></div>          
        </div>
        <br />
      </body>
    )
  }
}

export default Główna;
