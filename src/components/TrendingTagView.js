import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TrendingTagView = ({ name, tweetVolume }) => {
  const classes = useStyles();
  const linkStyle = {
    color: 'inherit',
    textDecoration: 'inherit'
  };

  return (
    <div key={name}>
      <Container maxWidth="sm">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            Trending
            </Typography>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            has {tweetVolume} tweets
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <Link to={`/tweets/${name.substr(1)}`} style={linkStyle}>See Tweets</Link>
            </Button>
          </CardActions>
        </Card>
        <br></br>
      </Container>
    </div>
  );
};

export default TrendingTagView;
