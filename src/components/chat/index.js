// css component
import './chat.css'
// components
import ChatHeader from './ChatHeader'
import Message from './Message'
// icons
import {AddCircle, CardGiftcard, Gif, EmojiEmotions} from '@material-ui/icons'

// FIXME: me quede en el minuto 1:35hrs - estabamos empezando a crear el componente de Message


const Chat = () => {
    return ( 
        <main className='chat'>
            <ChatHeader/>

            <div className="chat__messages">
               <Message/>
               <Message/>
               <Message/>
            </div>

            <div className="chat__input">
               <AddCircle fontSize='large'/>
               <form>
                   <input type="text" placeholder={`Message #TESTCHANNEL`}/>
                   <button className="chat__inputButton" type='submit'>Send Message</button>
               </form>

               <div className="chat__inputIcons">
                   <CardGiftcard/>
                   <Gif/>
                   <EmojiEmotions/>
               </div>
            </div>
            
        </main>
     );
}
 
export default Chat;