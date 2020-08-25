import React from 'react';
import {useRecoilValue} from 'recoil';
import {subscribeToEventsState, loginData, activeChatWith} from './components/recoil/atoms';

// --------------------------- New Style --------------------- //
import {Switch, Route, Redirect} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Signin from './view/signin';
import ContactList from './view/contacts';
import MainButton from './view/mainButton';
import MainContainter from './view/main';
import Toolbar from './view/toolbar';
import ChatCmp from './view/chat';
import Signup from './view/signup';
import UiComponents from './components/uiComponents';
import ChangePass from './view/changepass';
import ActivateUser from './view/activateuser';
import NewUserSubscriber from './components/events/newUserSubscriber';
import UserDisconnectSubscriber from './components/events/userDisconnectSubscriber';
import IncomingMsgSubscriber from './components/events/incomingMsgSubscriber';
import DeclinedFriendshipSubscriber from './components/events/declinedFriendshipSubscriber';
import RequestFriendSubscriber from './components/events/requestFriendshipSubscriber';
import AcceptFriendshipSubscriber from './components/events/acceptedFriendshipSubscriber';
import DeletedContactSubscriber from './components/events/deletedContactSubscriber';
import BlokedContactSubscriber from './components/events/blokedContactSubscriber';
import RecibedMessageSubscriber from './components/events/recibedMessageSubscriber';
import {SnackbarProvider} from 'notistack';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import {tokenTimeoutAtom, darkModeAtom} from './components/recoil/atoms';
import useRefreshToken from './utils/useRefreshToken';
import { Container, makeStyles } from '@material-ui/core';
const TimerCmp = () => {

    const refreshToken = useRefreshToken();
    const timeoutData = useRecoilValue(tokenTimeoutAtom);
    
    React.useEffect(() => {
        
        let timeleft = new Date(timeoutData.timeleft).getTime() - new Date().getTime();
        if(timeleft >= 10000){
            setTimeout(()=> {
                refreshToken();
            }, timeleft - 10000);
        }

    }, [timeoutData]);

    return <></>;
}

const themeDark = createMuiTheme({palette: {type: 'dark',}});
const themeDefault = createMuiTheme({});



const App = () => {

    const dark = useRecoilValue(darkModeAtom);
    const subscribe = useRecoilValue(subscribeToEventsState);
    const userData = useRecoilValue(loginData);
    const chatWith = useRecoilValue(activeChatWith);
    const notistackRef = React.createRef();
    const onClickDismiss = key => () => { 
        notistackRef.current.closeSnackbar(key);
    }
  
    const cmp  = userData !== null 
    ? <>
            {
                chatWith 
                ? <ChatCmp />                
                : <Route path="/contacts" exact render={ () => (
                    <ThemeProvider theme={dark ? themeDark : themeDefault}>
                        <Toolbar />
                        <MainButton />
                        <ContactList />
                    </ThemeProvider>
                )} />
            }
        </> 
    : null ;


    return (<ThemeProvider theme={dark ? themeDark : themeDefault}>
       
            <MainContainter>
                <CssBaseline />
                <UiComponents />
                <SnackbarProvider 
                    maxSnack={3} 
                    autoHideDuration={3000}
                    preventDuplicate
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    ref={notistackRef}
                    action={(key) => (
                        <IconButton onClick={onClickDismiss(key)}>
                            <CloseIcon fontSize="small" style={{color: 'white'}} />
                        </IconButton>
                    )}
                >
                    <Switch>
                        <Route path="/" exact component={Signin} />
                        <Route path="/signup" exact component={Signup} />
                        {cmp}
                        <Route path="/changepass/:token" exact component={ChangePass} />
                        <Route path="/activateuser/:token/:nickname" exact component={ActivateUser} /> 
                        <Redirect from='/' to='/' />       
                    </Switch>
                    
                    {subscribe ? <>
                            <NewUserSubscriber />
                            <UserDisconnectSubscriber />
                            <IncomingMsgSubscriber />
                            <RequestFriendSubscriber />
                            <DeclinedFriendshipSubscriber />
                            <AcceptFriendshipSubscriber />
                            <DeletedContactSubscriber />
                            <BlokedContactSubscriber />
                            <RecibedMessageSubscriber />
                        </>: null
                    }
                    <TimerCmp />
                </SnackbarProvider>
            </MainContainter>
        </ThemeProvider>);
}



export default App;
