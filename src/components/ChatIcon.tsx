import chat from '../assets/icons/chat.png'

const ChatIcon = () => {
  return (
    <div className='z-50 fixed right-12 bottom-12 flex flex-row items-center justify-center w-16 h-16 rounded-full bg-slate-200 cursor-pointer'>
        <img src={chat} className='h-8 w-8' />
    </div>
  )
}

export default ChatIcon