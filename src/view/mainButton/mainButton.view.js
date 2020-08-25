import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import text from './idioma.json'

const useStyles = makeStyles((theme) => ({
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    icon: {
        color: theme.palette.text.secondary
    }
  }));

const MainButtonView = ({idioma, handleOpen, handleClose, open, openAddContactView}) => {

  const classes = useStyles();
  

    return (
      <>
        <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            className={classes.speedDial}            
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
          <SpeedDialAction
            key='add'
            icon={<PersonAddIcon className={classes.icon}/>}
            tooltipTitle={text.addContact[idioma]}
            tooltipOpen
            onClick={openAddContactView}
          />
          <SpeedDialAction
            key='addgroup'
            icon={<CallSplitIcon className={classes.icon}/>}
            tooltipTitle={text.sendAll[idioma]}
            tooltipOpen
            onClick={() => {
              console.log('Enviar mensaje de difusion');
              alert('Not implemented!')
            }}
          />
          {/*<SpeedDialAction
            key='addgroup'
            icon={<GroupAddIcon className={classes.icon}/>}
            tooltipTitle={text.addGroup[idioma]}
            tooltipOpen
            onClick={() => {
              console.log('Crear un grupo');
              alert('Not implemented!')
            }}
          />
          <SpeedDialAction
            key='send'
            icon={<MessageIcon className={classes.icon}/>}
            tooltipTitle={text.sendMsg[idioma]}
            tooltipOpen
            onClick={() => {
              console.log('Enviar mensaje a un contacto que no esta en tu lista de contacto');
              alert('Not implemented!')
            }}
          />
          <SpeedDialAction
            key='share'
            icon={<ShareIcon className={classes.icon}/>}
            tooltipTitle={text.shareMsg[idioma]}
            tooltipOpen
            onClick={() => {
              console.log('Compartir la aplicacion por correo electronivo');
              alert('Not implemented!')
            }}
          />*/}
        </SpeedDial>
      </>
    );

}
export default MainButtonView;