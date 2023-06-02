import React from 'react'
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import { useSelector } from 'react-redux';

function Chat(){
    const currentUser = useSelector(state => state.Auth.token); 
    return (
        <div style= {{ display: 'flex'}}>
            <div style= {{witdh: '300px'}}>
                <SidePanel key = {currentUser && currentUser.user_id}
                /> 
                
            </div>
            <div style = {{ width: '100%'}}> 
            <MainPanel />
            </div>
        </div>
    )
}

export default Chat; 