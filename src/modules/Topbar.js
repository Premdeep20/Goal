import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    style: {
        backgroundColor: '#FFFFFF',
    },
    image: {
        marginLeft: theme.spacing(4),
    }
}));

export default function Topbar() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.style}>
            <Toolbar>
                <img src={logo} className={classes.image} />
            </Toolbar>
        </AppBar>
    )
}
