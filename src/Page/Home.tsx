import { Helmet } from "react-helmet";
import HomeSection from "../Section/home";

const HomePage = () => {
  return(
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <HomeSection />
      </>
    )
}

export default HomePage;