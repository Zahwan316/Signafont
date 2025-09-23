import { Helmet } from "react-helmet"
import LoginSection from "../Section/login"

const LoginPage = () => {
  return(
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <LoginSection />
    </>
  )
}

export default LoginPage