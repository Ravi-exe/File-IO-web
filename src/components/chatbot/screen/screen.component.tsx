



type TypePromptComponents = {
    content: string
}


export default function PromptChatScreen({prompt}: {prompt: TypePromptComponents[]}) {

    return(
            <div className="w-full h-[60%]">

                {
                    prompt.map((k, ind) => <p key={ind}>{k.content}</p>)
                }
                
            </div>
    ) 
}