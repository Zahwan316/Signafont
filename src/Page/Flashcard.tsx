import { Helmet } from "react-helmet"
import FlashCardSection from "../Section/pengenalan/flashcard"

const FlashCardPage = () => {
  return(
    <>
      <Helmet>
        <title>Flashcard</title>
      </Helmet>

      <FlashCardSection />
    </>
  )
}

export default FlashCardPage;