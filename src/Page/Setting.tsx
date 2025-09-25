import { Helmet } from "react-helmet";
import SettingSection from "../Section/setting";

const SettingPage = () => {
  return(
    <>
      <Helmet>
        <title>Setting</title>
      </Helmet>

      <SettingSection />
    </>
  )
}

export default SettingPage;