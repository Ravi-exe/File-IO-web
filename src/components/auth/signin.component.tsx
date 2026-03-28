import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { useSignin } from "../../queries/auth.query";
import FormInputText from "../form/formtext.component";
import { useForm } from "react-hook-form";
import {z} from "zod"
// import { AxiosError } from "axios";4
import { zodResolver } from "@hookform/resolvers/zod"


const loginSchema = z.object({
  userid: z.string().min(4).max(12),
  password: z.string().min(8).max(30)
})

type loginFormSchema = z.infer<typeof loginSchema>



export default function Signin() {
  
  const loginMutation = useSignin();

  const navigate = useNavigate();

  const { handleSubmit, setError, control, formState: {errors} } = useForm<loginFormSchema>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema)
  });

  const formSubmit = handleSubmit((data) => {
      loginMutation.mutate({
        UserId: data.userid,
        UserPassword: data.password,
      }, {
        onSuccess: (res) => {console.log(res.status);navigate("/dashboard")},
        onError: (err) => setError("root", { type: "root", message: err.message || "Login failed"})
      });
    });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="sm">

        <Paper elevation={4} sx={{ p: 4 }}>

          <form onSubmit={formSubmit}>
            
            <FormInputText
              name="userid"
              control={control}
              label="User ID"
            />

            <FormInputText 
              name="password" 
              label="Password"
              control={control}
            />
              

            {
               errors.root && <Typography variant="body1" color="error" sx={{m:"1"}}>{
                  errors.root?.message || "Login failed"}
                </Typography> 
            }

            <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in" : "Login"}
            </Button>

            <p className="w-80% d-block m-5">
              Don't have account <Link to="/signup">Signup</Link>{" "}
            </p>
          </form>

        </Paper>
      </Container>
    </Box>
  );
}
