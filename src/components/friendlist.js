import React from "react";

export default class Friendlist extends React.Component {
  render() {
    const img_path = process.env.PUBLIC_URL + "/icons/friendlist/";
    const friends_arr = [
      {
        img: "pp1.png",
        name: "Matt Thompson",
        msg_preview: "Thanks again you have been ...",
        last_msg: "5mins",
      },
      {
        img: "pp2.png",
        name: "Matt Thompson",
        msg_preview: "Thanks again you have been ...",
        last_msg: "5mins",
      },
      {
        img: "pp3.png",
        name: "Matt Thompson",
        msg_preview: "Thanks again you have been ...",
        last_msg: "5mins",
      },
      {
        img: "pp4.png",
        name: "Matt Thompson",
        msg_preview: "Thanks again you have been ...",
        last_msg: "5mins",
      },
      {
        img: "pp5.png",
        name: "Matt Thompson",
        msg_preview: "Thanks again you have been ...",
        last_msg: "5mins",
      },
      {
        img: "pp6.png",
        name: "Matt Thompson",
        msg_preview: "Thanks again you have been ...",
        last_msg: "5mins",
      },
    ];
    const friend_msg_items = [];
    for (var item of friends_arr) {
      friend_msg_items.push(
        <div className="flex-container friendlist_item">
          <div>
            <img src={img_path + item.img} class="pp" />
          </div>
          <div style={{paddingLeft:'1em'}}>
            <div className="flex-container" style={{justifyContent:'space-between'}}>
              <div  className="pp-left">
                <p className="pp_name">{item.name}</p>
              </div>
              <div className="pp-right">
                <img src={img_path + "more.png"} alt="" />
              </div>
            </div>
            <div className="flex-container">
              <div className="pp-left">
                <p className="msg_preview">{item.msg_preview}</p>
              </div>
              <div className="last_msg pp-right">{item.last_msg}</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div id="friend_list">
        <div id="search_section">
          
          <input type="text" placeholder="Search" />
          <img src={img_path+'search.png'} style={{position:'absolute',top:'30%',left:'10%'}} alt=""/>
        </div>
        <div id="friend_section">{friend_msg_items}</div>
      </div>
    );
  }
}
