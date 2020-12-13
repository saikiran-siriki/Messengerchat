import React from 'react'


export default class Chat extends React.Component {
  


    render() {
      const img_path = process.env.PUBLIC_URL + "/icons/chat/";
      const chat_msgs = {from:{name:'Saikiran',img:''},to:{name:'Kirsten',img:''},texts:[{
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
            img:'/book.png',
            rating:4.2,
            title:'Ready to Die',
            subtitle:'The Notorious B.I.G',
            total_ratings:95,
            price_tag:'$12.99'
          }

        },


      ]}

      const chat_items = []
      chat_msgs.texts.forEach((item)=>{
        if(item.type==='msg'){
          if(item.sent_by_owner===1){
            chat_items.push(<div className="to_chat chat_item">{item.text}</div>)
          } else{
            chat_items.push(<div className="from_chat chat_item">{item.text}</div>)
          }

        }
        if(item.type==='book'){
          if(item.sent_by_owner===1){
            const book_item = item.meta
            chat_items.push(<div className="to_chat chat_item">
              <div className="flex-container">
                <img src={img_path+book_item.img} alt=""/>
                <div>
                  <p className="booktitle">{book_item.title}</p>
                  <p className="booksubtitle">{book_item.subtitle}</p>
                  <div className="rating">
                    <div className="stars"></div>
                    <div className="rating_count">{book_item.total_ratings} {book_item.total_ratings>1?'Rating':'Ratings'}</div>

                  </div>
                  <div>
                    <button className="button">{book_item.price_tag} - Buy Now</button>
                  </div>
                </div>
              </div>

            </div>)
          } else{
            chat_items.push(<div className="from_chat chat_item">{item.text}</div>)
          }
        }

      })

      
      return (
        <div id="chat">
          <div id="chat_options">
              <div id="chat_profile_user">
                {chat_msgs.from.name} is typing...
              </div>
              <div id="other_chat_types">
                <div class="chat_option_img"><img src={img_path+'/star.png'} alt=""/></div>
                <div class="chat_option_img"><img src={img_path+'/call.png'} alt=""/></div>
                <div class="chat_option_img"><img src={img_path+'/video_call.png'} alt=""/></div>
              </div>
          </div>
          <div id="chat_msgs">
            {chat_items}

            
          </div>
          <div id="chat_input" style={{height:'4%'}}>
            <div style={{height:'100%'}}>
              <input type="text" id="inp_chat"/>
            </div>

          </div>
            
        </div>
      );
    }
  }