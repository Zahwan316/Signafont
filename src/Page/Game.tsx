import { Helmet } from "react-helmet";
import GameSection from "../Section/game";

const GamePage = () => {
  return(
    <>
      <Helmet>
        <title>Game</title>
      </Helmet>

      <GameSection />
    </>
  )
}

export default GamePage;