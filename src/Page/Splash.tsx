import { Helmet } from "react-helmet";
import SplashSection from "../Section/splash";

const SplashPage = () => {
  return(
    <>
      <Helmet>
        <title>Splash Screen</title>
      </Helmet>

      <SplashSection />
    </>
  )
}

export default SplashPage;