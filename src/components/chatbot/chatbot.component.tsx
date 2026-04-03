import PromptHeader from "./header/header.component";
import PromptInput from "./prompt/prompt.component";
import PromptChatScreen from "./screen/screen.component";



type ChatBotType = {
    width?: string,
    height?: string
}

export default function ChatBot({width = "100%", height = "100%"}: ChatBotType) {



    return (

        <div className={`w-[${width}] h-[${height}] flex `}>
            <PromptHeader />
            <PromptChatScreen prompt={[]} />
            <PromptInput />
        </div>

    )
}