import ChatBot from "../../components/chatbot/chatbot.component";
import PermanentDrawerLeft from "../../components/sidebar/sidebar.component";




export default function Dashboard() {


    return (
        <div className="w-full h-full">

            <PermanentDrawerLeft />

            <ChatBot />

        </div>
    )
}