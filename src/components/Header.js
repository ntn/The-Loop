import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
}));


const Header = ({ title }) => {
  const classes = useStyles();
  const linkStyle = {
    color: 'inherit',
    textDecoration: 'inherit'
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Button color="inherit">
            <Link to="/" style={linkStyle}>Home</Link>
          </Button>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Badge color="secondary" variant="dot">
            <Button color="inherit">
              <Link to="/realtime/coronavirus" style={linkStyle}>COVID-19 Tweets</Link>
            </Button>
          </Badge>
        </Toolbar>
      </AppBar>
      <br></br>
    </div>
  );
};

export default Header;
