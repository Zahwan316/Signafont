import { Helmet } from "react-helmet";
import PengenalanSection from "../Section/pengenalan";

const PengenalanPage = () => {
  return(
    <>
      <Helmet>
        <title>Pengenalan</title>
      </Helmet>

      <PengenalanSection />
    </>
  )
}

export default PengenalanPage;