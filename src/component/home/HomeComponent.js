import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeHeaderComponent from './HomeHeaderComponent';
import HomeFooterComponent from './HomeFooterComponent';
import {Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }

}));







const cards = [{name : "Movies" , image : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-movies-kids-1584724104.jpg"

, description : "join us and watch any movie you want "
,link : "/films"
}, 

{name :"series" , image :"https://vonguru.fr/wp-content/uploads/2019/09/team-vg-series-cineseries-cover-vonguru.jpg"

, description : "we bring to you all the best of series  "
, link : "/series"
}];



 function HomeComponent()  {
  const classes = useStyles();
  return (
    
    <div>
      
    <React.Fragment>
    
     <CssBaseline />
     
    <HomeHeaderComponent/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Our Library
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Feel free to pick whatever you want watch
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
            
                </Grid>
                <Grid item>
              
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Link to={card.link} >See More</Link>
                       
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    <HomeFooterComponent/>

    </React.Fragment>
    </div>
  );
            }


export default HomeComponent


