import React, { useEffect} from 'react';
import {useRecoilState, useSetRecoilState, useRecoilValue} from 'recoil';
import {idiomaState, subscribeToEventsState, loginData, userAvatarState, /*newAvatarState,*/ darkModeAtom/*firebaseCurrentUserState, friendSelector, friendsAtom*/, view} from '../../components/recoil/atoms';
import {tourAtom} from '../tour/tour.atoms';
import {friendSelector} from '../../components/recoil/selectors';
import useAxiosHook from '../../utils/axiosHook';
import OS_Notification from '../../utils/OS_NotificationPermission';
import ContactsView from './contacs.view';
import text from './idioma.json';
//import { Dialog } from '@material-ui/core';

//const UpdateAvatarCmp = React.lazy(() => import('./updateAvatar'));
//const AsyncChatCmp = React.lazy(() => import('../chat'));

const ContactsController = props => {

    
    const dark = useRecoilValue(darkModeAtom);
    const setSubscribeToEvents = useSetRecoilState(subscribeToEventsState);
    const [userData, setLoginData] = useRecoilState(loginData);
    const setUserAvatarState = useSetRecoilState(userAvatarState);
    const setView = useSetRecoilState(view.getAtom);
    //const setNewUserAvatarState = useSetRecoilState(newAvatarState);
    //const chatWith = useRecoilValue(activeChatWith);
    const setTourState = useSetRecoilState(tourAtom);
    const {postRequest} = useAxiosHook();
    
    //const [contacts, addContact] = useRecoilState(friendSelector);
    const [contacts, friendDispatcher] = useRecoilState(friendSelector);

    const [idioma, setIdiomaState] = useRecoilState(idiomaState);

    //const [openUpdateAvatar, setOpenUpdateAvatar] = useState(false);

    /*const handleClose = useCallback(() => {
        setOpenUpdateAvatar(false);
    }, []);*/

    const loadData = () => {
        
        postRequest({
            url: '/users/getUserData',
            bodyParams: {
                language: idioma
            },
            doFnAfterSuccess: userResp => {
                if(userResp.status === 200 || userResp.status === 201){
                    const {
                        _id, nickname, firstName,
                        lastName, email, language, avatarUrl/*,avatarChanged, oauthAvatarUrl*/
                    } = userResp.data.user;
                    
                    /*if(avatarChanged){
                        // Lanzar promt de si quiere actualizar su avatar
                        setOpenUpdateAvatar(true);
                        setNewUserAvatarState(oauthAvatarUrl);
                    }*/
                    setLoginData({
                        userId: _id, 
                        nickname: nickname,
                        firstName: firstName,
                        lastName: lastName,
                        email: email
                    });
                    setIdiomaState(language);
                    setUserAvatarState(avatarUrl);
                }
                if(userResp.status === 201){
                    // Si es un usuario nuevo le doy un tour por la app
                    OS_Notification.askNotificationPermission(() => setTourState(true));
                }
            }
        });


        const friendsPromise = postRequest({
            url: '/users/searchFirends'
        })
        .then(friendsResp => {
            if(friendsResp.status === 200){
                friendDispatcher({
                    action: 'initialize', 
                    payload: {
                        friends: friendsResp.data.friends
                    }});
                setSubscribeToEvents(true);
            }
        });

        const friendsDataPromise = postRequest({
            url: '/users/getContactData'
        });

        Promise.all([friendsPromise, friendsDataPromise])
            .then(([friendsResp, friendsDataResp]) => {

                if(friendsDataResp.status === 200){
                    friendDispatcher({
                        action: 'set_message_info',
                        payload: {
                            dataObj: friendsDataResp.data.contactsData
                        }
                    });
                }
            })
            .catch(err => {

            })

    }

    useEffect(() => {
        if(contacts.length === 0 && userData !== null)
            loadData();        
    }, []);

    useEffect(() => {
        if(userData === null){
            setView(view.posibleViews.LOGIN);
        }
    }, [userData]);

    return userData !== null 
            &&  <>
                <ContactsView 
                    idioma={idioma}
                    contacts={contacts}
                    text={text}
                    isDark={dark}
                /> 
            </>
}

export default ContactsController;