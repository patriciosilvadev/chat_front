import {useSetRecoilState} from 'recoil';
import {loginData, userAvatarState, contactListState, friendsAtom, eraseConversationsWithContacts, view} from '../components/recoil/atoms';
import { useCallback } from 'react';
import socketClient from './socket';
import firebase from './firebase';
const useLogout = () => {

    const setLoginData = useSetRecoilState(loginData);
    const setUserAvatar = useSetRecoilState(userAvatarState);
    const setContactList = useSetRecoilState(contactListState);
    const setFriends = useSetRecoilState(friendsAtom);
    const client = socketClient.getSocket();
    const setView = useSetRecoilState(view.getAtom);

    return useCallback(() => {
        eraseConversationsWithContacts();
        setUserAvatar(null);
        setContactList([]);
        setFriends([]);
        client.emit('logout', {});
        socketClient.close();
        setLoginData(null);
        firebase.auth().signOut();
        setView(view.posibleViews.LOGIN);
    }, []);
}
export default useLogout;