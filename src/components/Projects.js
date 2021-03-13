import React from 'react';
import { Fade } from 'react-awesome-reveal';
import 'materialize-css';
import { Card, Icon, CardTitle, Row, Col } from 'react-materialize';
import Footer from './Footer';


const list = [
{
  title: 'YelpCamp',
  image: 'https://thedyrt.imgix.net/photo/86958/media/california-holcomb-valley_db4d4fff23dc77f9a5cd745e817f993b.png?ixlib=rb-3.1.1',
  body: 'This project was made with EJS, Express, MongoDB, and Passport.  Works like Yelp for campsites.  Upload images, leave reviews, make comments.  Deployed on Heroku, so please allow 10 to 20 seconds for their servers to load.',
  link: 'https://agile-ocean-66764.herokuapp.com/'
},
{
  title: 'JS JungleGym',
  image: 'https://www.pbs.org/wgbh/nova/media/images/bfcppfu.width-800.png',
  body: 'An npm package serving as an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.',
  link: 'https://www.npmjs.com/package/jsjunglegym'

},
{
  title: 'Surveys-R-Us',
  image: 'https://inboxtranslation.com/wp-content/uploads/2020/09/challenges-translation-surveys.jpg',
  body: 'Customer satisfaction survey using React, Redux, GoogleOAuth2.0, Stripe, Mongo, and Express.  Sendgrid acts as 3rd party mass mailer.  User can email customers and get feedback on a product or service.  Deployed on Heroku, so please allow for server loading time.',
  link: 'https://infinite-journey-44904.herokuapp.com/'

},
{
  title: 'Natours',
  image: 'https://images.unsplash.com/photo-1600417601126-9654823201c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
  body: 'A demonstration of advanced CSS and Sass, complete with media queries to scale to tablets and phones.  Deployed on AWS.',
  link: 'https://main.d2mv1budolvxgk.amplifyapp.com/'
},
{
  title: 'yt-app',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu0e5qToFGb4kMm4jxbj8tWBbeMQ41UKc4g&usqp=CAU',
  body: 'Incorporating YouTube API, users can integrate the code for this app to stream content directly onto their websites.  Deployed on Heroku.',
  link: 'https://mysterious-forest-74819.herokuapp.com/'
},
{
  title: 'Trillio',
  image: 'https://images.unsplash.com/photo-1569369926169-9ee7fb80adeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1644&q=80',
  body: 'A travel site webpage demo.  Showing off some flexbox which makes media queries a breeze.  Deployed on AWS.',
  link: 'https://main.d3s2e9w8pmuhzl.amplifyapp.com/'
}

]




const Projects = () => {

  const renderedCards = (listItem) => (

     <div>
     <Col m={4} s={12}>
     <a key={listItem?.link} href={listItem?.link}>
        <Card
          className="card large"
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={listItem?.image}>{listItem?.title}</CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}
        >

          <span style={{ color: 'black' }}>{listItem?.body}</span>

        </Card>
        </a>
        </Col>
        </div>

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
      <Row>
        <div>
          {list.map(listItem => <div>{renderedCards(listItem)}</div>)}
        </div>
      </Row>
    </div>


  <Footer/>

  </Fade>
  )
}

export default Projects;
