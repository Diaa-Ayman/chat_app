
import {PhoneIcon,  VideoCameraIcon,SpeakerWaveIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'
import Chat from './Chat'
function ChatInfo() {

    const classes = 'cursor-pointer hover:bg-indigo-400 rounded-xl p-1 w-fit bg-indigo-500'
    return <div className="">
        <div className ="flex flex-bottom flex-col bg-indigo-600 p-4  m-2 rounded-xl">
            <div className='hover:bg-indigo-500 cursor-pointer p-1 rounded-xl'>
            <Chat className='bg-indigo-600 hover:bg-indigo-500 p-0'/>
            </div>
            <div className="flex items-center space-x-3  mt-4">
                <div className = {classes}>
                <PhoneIcon className="header-icon text-white" />
                </div>
                <div className = {classes}>
                <VideoCameraIcon className = "header-icon text-white" /> 
                </div>
                <div className = {classes}>
                <SpeakerWaveIcon className=  'header-icon text-white' />
                </div>
                <div className = {classes}>
                <ShoppingBagIcon className=  'header-icon text-white' />
                </div>
            </div>
        </div>
        <div className='data'>
            <div>Attachments</div>
            <div>Links</div>
        </div>
    </div>
}

export default ChatInfo