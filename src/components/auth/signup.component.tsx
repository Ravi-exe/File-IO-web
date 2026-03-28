import { Box, Button, Container, Paper, Typography } from "@mui/material";
import FormInputText from "../form/formtext.component";
import { useForm } from "react-hook-form";
import { useSignup } from "../../queries/auth.query";
import { Link } from "react-router-dom";

export default function Signup() {
  const { control, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const signupMutation = useSignup()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const result = (await signupMutation).mutate({
        ...data
    })
    console.log(result)
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Container maxWidth="md">
        <Paper elevation={4} sx={{ p: 4 }}>
          <form onSubmit={onSubmit}>

            <Typography variant="h6" align="center">Create an account</Typography>
            
            <FormInputText
              name="firstName"
              label="First Name *"
              control={control}
              rules={{
                required: "First Name is required field",
                minLength: {
                    value: 4,
                    message: "firstName length should be between 4 to 12"
                },
                maxLength: {
                    value: 12,
                    message: "firstName length should be between 4 to 12"
                }
              }}
            />

            <FormInputText
              name="lastName"
              label="Last Name"
              control={control}
            />


            <FormInputText
              name="userId"
              label="UserId"
              control={control}
            />

            
            <FormInputText
              name="email"
              label="Email"
              control={control}
            />

            
            <FormInputText
              name="password"
              label="Password"
              control={control}
            />

            <FormInputText
              name="repassword"
              label="Confirm Password"
              control={control}
            />


            <Button fullWidth type="submit" variant="contained" className="my-10px" sx={{marginY: 2}} >
              Submit
            </Button>
          </form>
          <Typography variant="body1" align="center" ><Link to="/login">Click here to Login </Link></Typography>
        </Paper>
      </Container>
    </Box>
  );
}
