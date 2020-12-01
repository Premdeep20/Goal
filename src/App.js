import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from './modules/Topbar';
import Typography from '@material-ui/core/Typography';
import GoalCard from './modules/Card';

import './App.css';

const useStyles = makeStyles((theme) => ({
  rootBackground: {
    backgroundColor: '#F4F8FA',
    height: '100%',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.rootBackground}>
      <Topbar />
      <div className="page-body">
        <Typography className="heading-text">
          Let's plan your saving goal.
        </Typography>
        <GoalCard />
      </div>
    </div>
  );
}

