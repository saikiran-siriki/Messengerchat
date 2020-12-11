import React from 'react'


export default class Chat extends React.Component {
  


    render() {
      const chat_msgs = [{
          text:'It goes a little something like this',
          sent_by_owner:0,
          media:0,
          type:'msg'
        },
        {
          text:'It was all of a dream, I used to read Word up Magazine. Saltinpega and Heavy D up in the limousine',
          sent_by_owner:0,
          media:0,
          type:'msg'
        },
        {
          text:'Did you ever hang pictures on your wall?',
          sent_by_owner:1,
          media:0,
          type:'msg'
        },
        {
          text:'Yes I did! Every Saturday! Rap Attack, Mr. Magic, Marley Marl. ',
          sent_by_owner:0,
          media:0,
          type:'msg'
        },
        {
          text:'Haha awesome,  I think I know the album your looking. for. ',
          sent_by_owner:1,
          media:0,
          type:'msg'
        },
       
        {
          sent_by_owner:1,
          media:0,
          type:'book',
          meta:{
            img:'',
            rating:4.2,
            title:'Ready to Die',
            subtitle:'The Notorious B.I.G',
            total_ratings:95,
            price_tag:'$12.99'
          }

        },


      ]

      
      return (
        <div id="chat">
          <div>

          </div>
            
        </div>
      );
    }
  }