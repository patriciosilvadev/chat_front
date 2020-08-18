import React from 'react';

import {AppBar, Toolbar, IconButton, makeStyles, createStyles} from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles(theme => ({
    appBar:{
        top: 'auto',
        bottom: 0,
        position: "fixed",
        width: '100%',        
        [theme.breakpoints.up('sm')]: {
            width: theme.breakpoints.values.sm,
        },
        right: 'auto'
    },
    grow: {
        flexGrow: 1
    },
    toolbar: {
        padding: 0
    },
    icon: {
        fontSize: theme.spacing(3.75)
    },
    textarea: {
        border: '1px solid gray',
        fontFamily: 'inherit',
        fontSize: 'large',    
        padding: '1px 6px',
        backgroundColor: 'white',
        color: 'rgba(0,0,0,0.7)',
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom:  theme.spacing(1),
        maxHeight: theme.spacing(10),
        overflowY: 'auto',
        borderRadius: theme.spacing(0.5),
        marginLeft: theme.spacing(2),
    }
}));


const ChatEditorView = props => {
    const classes = useStyles();

    return (
        <AppBar color="primary"  className={classes.appBar}>
            <Toolbar variant="dense" className={classes.toolbar}>
                <div className={classes.textarea} role="textbox" contentEditable></div>
                <div className={classes.grow} />
                <IconButton color="inherit">
                    <TelegramIcon className={classes.icon}/>
                </IconButton>                
            </Toolbar>
        </AppBar>
    );

}
export default ChatEditorView;