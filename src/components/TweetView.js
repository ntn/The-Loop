import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  pos: {
    marginBottom: 12,
  },
}));

const TweetView = ({ id, name, profilePic, createdDate, text }) => {
  const classes = useStyles();

  return (
    <div key={name}>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar alt={name} src={profilePic} className={classes.avatar}>
                {name}
              </Avatar>
            }
            action={
              <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${name}/status/${id}`}>
                <IconButton aria-label="settings">
                </IconButton>
              </a>
            }
            title={name}
            subheader={createdDate}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </Card>
        <br></br>
      </Container>
    </div>
  );
};

export default TweetView;
