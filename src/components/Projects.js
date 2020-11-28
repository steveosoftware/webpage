import React from 'react';
import { Fade } from 'react-awesome-reveal';
import 'materialize-css';
import { Card, Row, Col, Icon, CardTitle } from 'react-materialize';


const list = [{
  title: 'Surveys-R-Us',
  image: 'https://sharpencx.com/wp-content/uploads/2019/02/22_7-Ways-to-Encourage-Customers_0219-01-3.png',
  body: 'Customer satisfaction survey using React/Redux/GoogleOAuth2.0/Stripe/Mongo/Express.  User can email customers and get feedback on a product or service.',
  link: 'https://infinite-journey-44904.herokuapp.com/surveys'
},
{
  title: 'YelpCamp',
  image: 'https://thedyrt.imgix.net/photo/86958/media/california-holcomb-valley_db4d4fff23dc77f9a5cd745e817f993b.png?ixlib=rb-3.1.1',
  body: 'This project was made with EJS/Express/Mongo/Passport.  Works like Yelp for campsites.  Upload images, leave reviews, make comments.',
  link: 'https://agile-ocean-66764.herokuapp.com/'
},
]




const Projects = () => {

  const renderedCards = (listItem) => {
        <Card
          actions={[
            <a key={listItem?.link} href={listItem?.link}>Link</a>
          ]}
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image={listItem?.image}>${listItem?.title}</CardTitle>}
          revealIcon={<Icon>more_vert</Icon>}
        >
          {listItem?.body}
        </Card>
      }

return (
  <Fade duration={2000}>
    <nav className="nav-extended nav-full-header black " style={{ display: 'inline-block', textAlign: 'center'}}>
      <div className="nav-header">
        <div >
          <h1 className="center-align">Projects</h1>
        </div>
      </div>
    </nav>

    <div style={{ marginTop: '50px'}}>
      <div className="row">
        {list.map(listItem => {
          <div className="col m4">{renderedCards(listItem)}</div>
        })}
      </div>
    </div>

  </Fade>
  )
}

export default Projects;
