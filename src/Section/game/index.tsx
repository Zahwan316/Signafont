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
      <div className="flex flex-row h-[12vh] sm:h-[15vh] items-center justify-between px-4 sm:px-6 md:px-8 py-2 sm:py-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">Level {level}</h2>
        {isStarted && (
          <div className="scale-75 sm:scale-90 md:scale-100">
            <SecondaryButtonComponent
              onClick={() => initGame(6 + (level - 1) * 2, true)}
              title="Restart"
            />
          </div>
        )}
      </div>

      {/* Board */}
      <div className="w-full h-[80vh] flex flex-col gap-8 justify-center items-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
        {!isStarted ? (
          <div className="flex flex-col gap-4 sm:gap-6 items-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center">Memory Game</h2>
            <div className="scale-90 sm:scale-100">
              <SecondaryButtonComponent onClick={startGame} title="Start Game" />
            </div>
          </div>
        ) : (
          <div className="bg-white w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto grid gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-lg"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
              '@media (min-width: 640px)': {
                gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))'
              },
              '@media (min-width: 768px)': {
                gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))'
              }
            }}
          >
            {cards.map((card) => {
              const isFlipped = flipped.includes(card) || matched.includes(card.name);
              return (
                <div
                  key={card.uniqueId}
                  className="aspect-square flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150"
                  onClick={() => handleFlip(card)}
                  style={{
                    minHeight: '50px',
                    minWidth: '50px'
                  }}
                >
                  {isFlipped ? (
                    <img 
                      src={card.image} 
                      alt={card.name} 
                      className="w-full h-full object-contain rounded-sm sm:rounded-md" 
                    />
                  ) : (
                    <div className="w-full h-full rounded-sm sm:rounded-md overflow-hidden">
                      <img 
                        src="/img/closed_card.png" 
                        alt="Card back"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Status */}
        {isWin && (
          <div className="flex flex-col items-center gap-3 sm:gap-4 text-center px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Kamu Menang! 🎉</p>
            <div className="scale-90 sm:scale-100">
              <SecondaryButtonComponent onClick={nextLevel} title="Next Level" />
            </div>
          </div>
        )}

      </div>


      <FloatingMenuComponent />
    </div>
  );
};

export default GameSection;