import { useForm } from "react-hook-form";
import FormInputText from "../../form/formtext.component";
import { Button, Icon } from "@mui/material";
import { UploadFileRounded } from "@mui/icons-material"




export default function PromptInput() {

    const { control, handleSubmit } = useForm({mode: 'onChange'})

    const submitHandler = handleSubmit(($e) => {
        console.log($e)
    })

    return(
        <div className="w-full h-[20%]">

            <form onSubmit={submitHandler}>
                <FormInputText 
                    label="How can I Help You ?"
                    name="prompt"
                    control={control}
                    />

                <UploadFileRounded />
                
                <Button variant="contained">Submit</Button>

            </form>
            
        </div>
    ) 
}