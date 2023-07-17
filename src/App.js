import React, { Component } from 'react'
import './App.css';


class Główna extends Component {
  constructor () {
    super ();
    this.state = {
      background: false,
      story: false, 
      poster: false,
      opisIntroduction: false,

      posters: [
        {
          src: "https://pbs.twimg.com/media/FxI5jgLX0AMa4-l?format=jpg&name=small", 
          size: '30x40 cm / 12x16"', type: "Canvas", name: "nyska-190633"
        },
        {
          src: "https://pbs.twimg.com/media/FxKw4YbWIAA2j1i?format=jpg&name=small", 
          size: '30x40 cm / 12x16"', type: "Canvas", name: "świdnicka-311293"
        },
        {
          src: "https://pbs.twimg.com/media/FxKxsNEXgAALboN?format=jpg&name=small", 
          size: '30x40 cm / 12x16"', type: "Canvas", name: "prudnicka-513239"
        }
      ]
    }
  }
  render () {
    let plakat = this.state.posters.map( i => {
      return(
        <div className='opis-poster-phoneview'>
          <img className='opis-poster-example' alt='canvas' src={i.src}/>
          <div className='opis-poster-about'>{i.size}</div>
          <div className='opis-poster-about'>{i.type}</div>
          <div className='opis-poster-about'>{i.name}</div>
        </div>
      )
    } )
    return (
      <body>
        <div className='head-frame'>
          <div className='head-title'>Conrading</div>
          <a className='head-icon' href="https://www.instagram.com/_conrading_/" target="_blank" rel="noopener noreferrer">
            <img className='head-icon-img' alt="instagram" src="https://cdn3.iconfinder.com/data/icons/social-media-2208/64/Instagram-512.png"/>
          </a>
        </div>
        <div className='main-claim-background'>
          <div className='main-claim'><span>Purchase </span><span>the Canvas</span></div>
        </div>
        <div className='project-area'>
          <div className="project-eachcard">
            <div onClick={() => {this.setState({
                    background: true,
                    story: false, 
                    poster: false,
                  })}} className='project-title'>Background</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>Motivation</div>
          </div>
          <div class="project-eachcard">
            <div onClick={() => {this.setState({
                    background: false,
                    story: true, 
                    poster: false,
                    opisIntroduction: false
                  })}} className='project-title'>Story</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>Brief the story</div>
          </div>
          <div class="project-eachcard">
            <div onClick={() => {this.setState({
                    background: false,
                    story: false, 
                    poster: true,
                    opisIntroduction: false
                  })}} className='project-title'>Canvas</div>
            <div className='limit-width-sieben'><hr /></div>
            <div className='project-brief'>posters/canvas about the story</div>
          </div>
        </div>
        <div className='opis-frame'>
          {this.state.background === true && 
          <div>
            <iframe className='video-centering'
              src="https://www.youtube.com/embed/TcdcQefoEWE" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen="allowfullscreen">
            </iframe>
            <div className='opis'>
              <b>Humans are ultimate version of machine</b>,
            </div>
            <div className='opis'>
              based on this hypothesis, I have finished a story, <b>'Difference is Fine'</b>,
            </div>
            <div className='opis'>
              AI couldn't reconstruct the story by any means,
              particularly if AI literally has consciousness.
              In other words, this story shows the difference between humans and current AI,
              which perhaps further show the value of humans and AI.
            </div>
            <div className='opis'>
              I am currently <b>collecting fund</b> for translation, 
              then you can read the story, watch the story.
            </div>
            <div className='opis'>
              I wouldn't do this if I am machine.
              I do this, because I am humans.
            </div>
            <div className='opis-about' onClick={() => {this.setState({opisIntroduction: !this.state.opisIntroduction})}}>
              {this.state.opisIntroduction === false && <div>-about the Writer-</div>}
              {this.state.opisIntroduction === true && <div>-close-</div>}
            </div>
            {this.state.opisIntroduction === true &&
            <div className='opis-introduction-frame'>
              <div><img className='opis-introduction-photo' src='https://pbs.twimg.com/media/FvjIH-eWYAIcGI4?format=jpg&name=small' alt='zdjędzie'/></div>
              <div>
                <div className='opis-introduction-line'>
                  my name is Conrading, I am from Taiwan, currently living in Wrocław in Poland.
                </div>
                <div className='opis-introduction-line'>
                  I am passionate about writing story and <a href='https://soundcloud.com/sichangyozu'>music</a>. 
                </div>
                <div className='opis-introduction-line'>
                  I was once semiconductor engineer, then switched to patent field, study law, also do some programming. 
                </div>
              </div>
            </div>}
          </div>}
          {this.state.story === true && 
          <div>
            <div className='opis'>
              A boy wants to save his friend from gangster trouble, 
              but the more he tries the worse it is, 
              and they both involve deeper. 
              Meanwhile, his family cannot help him. his father just got bankrupt, 
              older brother suicide, and mother is in hospital.
            </div>
            <div className='opis'>
              While the boy is struggling to find a solution, 
              he is also wondering whether he should sacrifice, 
              what he should sacrifice, and how much he should sacrifice.
            </div>
            <div className='opis'>
              We all have a price in our mind about our self, 
              and we act according to the price, 
              choose a life, choose a job, choose a career, choose a family, all based on the price. 
              Now the boy needs to act, and he would act, 
              once he decides the value about himself and the friendship, 
              he would absolutely act, and his action would redefine himself, in a most unexpectedly and extreme way.
            </div>
          </div>}
          {this.state.poster === true && 
          <div>
            <div className='opis'>
              write to me, sichangyozu@gmail.com
            </div>
            <div className='center-object'>
              <div className='opis-poster-frame'>{plakat}</div>
            </div>  
          </div>}
        </div>
        <br />
        <div className='bottom-note'>
          <div>Conrading | All Rights Reserved 2023</div>
        </div>
        <br />
      </body>
    )
  }
}

export default Główna;
