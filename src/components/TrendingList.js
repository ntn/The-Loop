import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const TrendingList = props => {
  const classes = useStyles();
  const trendingTags = () => {
    return props.trending;
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {trendingTags().map(trendingTag =>
        <div key={trendingTag.name}>
          <Container maxWidth="sm">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Trending
                </Typography>
                <Typography variant="h5" component="h2">
                  {trendingTag.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                has {trendingTag.tweet_volume} tweets
                </Typography>
                <Typography variant="body2" component="p">
                small summary
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">See Tweets</Button>
              </CardActions>
            </Card>
            <br></br>
          </Container>
        </div>
      )}
    </div>
  );
};

export default TrendingList;
