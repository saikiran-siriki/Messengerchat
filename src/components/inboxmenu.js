import React from 'react'


export default class Imnavigation extends React.Component {
    

    render() {
        const msg_types = [[{title:'All Messages',count:21},{title:'Unread',count:89},{title:'Important',count:6}
    ,{title:'Drafts',count:27}],[{title:'Teams',count:21},{title:'Groups',count:89},{title:'Channels',count:6}
    ,{title:'Locations',count:27},{title:'Media',count:27}],[{title:'Help'},{title:'Settings'}]]

    const display_list = []
    for(let section of msg_types){
        for(let item of section){
            display_list.push(<div class="inbox_item"><p>{item.title}</p><p className="msg_count">{item.count}</p></div>)
        }
        display_list.push(<hr />)
    }
      
      return (
        <div id="inbox_list" style={{backgroundColor:'#1d232a'}}>
            <div id="inbox_top">
                <p>Inbox</p>
                <div>
                    <img id="addicon" src={process.env.PUBLIC_URL+'/icons/inboxmenu/add.png'} alt=""/>
                </div>
                
            </div>
            <div >
                {display_list}
            </div>
        </div>
      );
    }
  }