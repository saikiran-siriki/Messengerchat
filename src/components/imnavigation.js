import React from 'react'


export default class Imnavigation extends React.Component {

    render() {
      const img_path = process.env.PUBLIC_URL+'/icons/imnavigation/'
      const available_app_imgs = ['W.png','FB.png','V.png','S.png','N.png']
      const available_list = []
      for(let item of available_app_imgs){
          available_list.push(<div className="nav_icon"><img src={img_path+item} key={item} alt={item}/></div>)
      }
      return (
        <div id="navigation_list">
            <img style={{height:'1em'}} src={img_path+'Hamburger_Menu_Icon.png'} alt=""/>
          <div id="imnavigation_icons">
            {available_list}
          </div>
        </div>
      );
    }
  }