import React from 'react';
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
import FilmHeaderComponent from './FilmHeaderComponent';
import FilmFooterComponent from './FilmFooterComponent';
import data from '../../public/feed/sample'








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








 function FilmComponent() {
const classes = useStyles();
 

  const movies  = data.entries.filter(e => e.programType ==="movie").slice(1,22);

  movies.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})



  return (
    
    <div>
      
    <React.Fragment>
    
     <CssBaseline />
     
    <FilmHeaderComponent/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Movies List
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
           Movies world says welcome
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    sign in
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    sign out
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {movies.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.images["Poster Art"].url}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.title }
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <Typography  gutterBottom variant="h5" component="h2">
                      {' release year : <'+ card.releaseYear+'>'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                
                
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    <FilmFooterComponent/>

    </React.Fragment>
    </div>
  );
}

export default FilmComponent