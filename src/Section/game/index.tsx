import { useEffect, useState } from "react";
import FloatingMenuComponent from "../../component/floating_menu";
import { PRIMARY_COLOR } from "../../constant/color";
import { generateGameCards } from "../../data/game";
import SecondaryButtonComponent from "../../component/button/secondary";

function shuffle(array: any[]) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

const GameSection = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<any[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [isWin, setIsWin] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [level, setLevel] = useState(1);

  // helper init / restart game
  const initGame = (lettersCount = 6, random = true) => {
    const generated = generateGameCards(lettersCount, random).map((card, idx) => ({
      ...card,
      uniqueId: idx,
    }));
    setCards(shuffle(generated));
    setFlipped([]);
    setMatched([]);
    setIsWin(false);
  };

  // mulai game pertama kali setelah klik tombol start
  const startGame = () => {
    setLevel(1);
    initGame(6, true);
    setIsStarted(true);
  };

  // lanjut ke level berikutnya
  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    initGame(6 + (newLevel - 1) * 2, true); // jumlah kartu bertambah setiap level
  };

  // cek kalau flipped ada 2
  useEffect(() => {
    if (!isStarted) return;
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (first.name === second.name) {
        setMatched((prev) => [...prev, first.name]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
  }, [flipped, isStarted]);

  // cek kondisi menang
  useEffect(() => {
    if (!isStarted) return;
    const uniqueCount = new Set(cards.map((c) => c.name)).size;
    if (uniqueCount > 0 && matched.length === uniqueCount) {
      setIsWin(true);
    }
  }, [matched, cards, isStarted]);

  const handleFlip = (card: any) => {
    if (!isStarted || isWin) return; // ⛔ jangan allow flip kalau belum start atau sudah menang
    if (flipped.length === 2) return;
    if (
      flipped.length < 2 &&
      !flipped.includes(card) &&
      !matched.includes(card.name)
    ) {
      setFlipped((prev) => [...prev, card]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: PRIMARY_COLOR }}>
      {/* Top bar */}
      <div className="flex flex-row h-[15vh] items-center justify-between p-4">
        <h2 className="text-white text-xl font-bold">Level {level}</h2>
        {isStarted && (
          <SecondaryButtonComponent
            onClick={() => initGame(6 + (level - 1) * 2, true)}
            title="Restart"
          />
        )}
      </div>

      {/* Board */}
      <div className="w-full flex justify-center items-center p-8">
        {!isStarted ? (
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-white text-2xl font-bold">Memory Game</h2>
            <SecondaryButtonComponent onClick={startGame} title="Start Game" />
          </div>
        ) : (
          <div className="bg-white w-4/5 h-auto grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-4 p-6 rounded-xl justify-start">
            {cards.map((card) => {
              const isFlipped = flipped.includes(card) || matched.includes(card.name);
              return (
                <div
                  key={card.uniqueId}
                  className="h-16 w-16 flex items-center justify-center cursor-pointer"
                  onClick={() => handleFlip(card)}
                >
                  {isFlipped ? (
                    <img src={card.image} alt={card.name} className="w-full h-full" />
                  ) : (
                    <div className="w-full h-full rounded">
                      <img src="/img/closed_card.png" className="w-full h-full" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Status */}
      {isWin && (
        <div className="flex flex-col items-center gap-4 text-center mt-4">
          <p className="text-white text-2xl font-bold">Kamu Menang! 🎉</p>
          <SecondaryButtonComponent onClick={nextLevel} title="Next Level" />
        </div>
      )}

      <FloatingMenuComponent />
    </div>
  );
};

export default GameSection;
