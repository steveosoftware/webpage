import React from 'react';
import { Fade } from 'react-awesome-reveal';
import 'materialize-css';
import { Card, Icon, CardTitle } from 'react-materialize';
import Footer from './Footer';

const list = [{
  title: 'Surveys-R-Us',
  image: 'https://inboxtranslation.com/wp-content/uploads/2020/09/challenges-translation-surveys.jpg',
  body: 'Customer satisfaction survey using React, Redux, GoogleOAuth2.0, Stripe, Mongo, and Express.  Sendgrid acts as 3rd party mass mailer.  User can email customers and get feedback on a product or service.  Deployed on Heroku.',
  link: 'https://infinite-journey-44904.herokuapp.com/surveys'

},
{
  title: 'YelpCamp',
  image: 'https://thedyrt.imgix.net/photo/86958/media/california-holcomb-valley_db4d4fff23dc77f9a5cd745e817f993b.png?ixlib=rb-3.1.1',
  body: 'This project was made with EJS, Express, MongoDB, and Passport.  Works like Yelp for campsites.  Upload images, leave reviews, make comments.  Deployed on Heroku.',
  link: 'https://agile-ocean-66764.herokuapp.com/'
},
{
  title: 'yt-app',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu0e5qToFGb4kMm4jxbj8tWBbeMQ41UKc4g&usqp=CAU',
  body: 'Incorporating YouTube API, users can integrate the code for this app to stream content directly onto their websites.',
  link: 'https://mysterious-forest-74819.herokuapp.com/'
}
]




const Projects = () => {

  const renderedCards = (listItem) => (
    <a key={listItem?.link} href={listItem?.link}>
        <Card
          className="card medium"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={listItem?.image}>{listItem?.title}</CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}
        >

          <span style={{ color: 'black' }}>{listItem?.body}</span>
        </Card>
        </a>
      )

return (
  <Fade duration={2000}>
    <nav className="nav-extended nav-full-header black " style={{ display: 'inline-block', textAlign: 'center'}}>
      <div className="nav-header">
        <div >
          <h1 className="center-align">Projects</h1>
        </div>
      </div>
    </nav>

    <div style={{ marginTop: '100px', marginBottom: '240px'}}>
      <div className="row">
        {list.map(listItem => <div className="col m4">{renderedCards(listItem)}</div>)}
      </div>
    </div>


  <Footer/>

  </Fade>
  )
}

export default Projects;
