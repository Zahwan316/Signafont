import { useEffect, useState } from "react";
import FloatingMenuComponent from "../../component/floating_menu";
import { HealthIcon } from "../../component/icon";
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
  const [currHealth, setCurrHealth] = useState<number>(4);
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);

  // helper init / restart game
  const initGame = (lettersCount = 6, random = true, health = 4) => {
    const generated = generateGameCards(lettersCount, random).map((card, idx) => ({
      ...card,
      uniqueId: idx,
    }));
    setCards(shuffle(generated));
    setFlipped([]);
    setMatched([]);
    setCurrHealth(health);
    setIsWin(false);
    setIsLose(false);
  };

  // 🔹 inisialisasi game (sekali saat mount)
  useEffect(() => {
    initGame(6, true, 4); // contoh: 6 huruf acak, nyawa 4
  }, []);

  // 🔹 cek kalau flipped ada 2
  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (first.name === second.name) {
        setMatched((prev) => [...prev, first.name]);
        setFlipped([]);
      } else {
        // sementara disable klik dengan menyimpan flipped, lalu tutup
        setTimeout(() => {
          setFlipped([]);
          setCurrHealth((prev) => prev - 1);
        }, 1000);
      }
    }
  }, [flipped]);

  // 🔹 cek kondisi menang / kalah
  useEffect(() => {
    const uniqueCount = new Set(cards.map((c) => c.name)).size;

    // hanya set win jika cards sudah ter-inisialisasi (uniqueCount > 0)
    if (uniqueCount > 0 && matched.length === uniqueCount) {
      setIsWin(true);
    } else {
      setIsWin(false);
    }

    if (currHealth <= 0) {
      setIsLose(true);
    } else {
      setIsLose(false);
    }
  }, [matched, currHealth, cards]);

  const handleFlip = (card: any) => {
    // jangan allow flip jika game sudah selesai
    if (isWin || isLose) return;

    // jangan allow klik jika sedang menutup pair (flipped length 2 sementara timeout)
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
    <div className="min-h-screen" style={{ backgroundColor: PRIMARY_COLOR }}>
      {/* Health + Restart */}
      <div className="flex flex-row h-[20vh] items-center justify-between p-4">
        <div className="flex gap-2 items-center">
          {Array(currHealth)
            .fill(0)
            .map((_, index) => (
              <HealthIcon key={index} />
            ))}
        </div>

        {/* Tombol restart (opsional) */}
        <div>
          <SecondaryButtonComponent
            onClick={() => initGame(6, true, 4)}
            title='Restart'
          />
        </div>
      </div>

      {/* Board */}
      <div className="w-full h-[60vh] flex flex-row justify-center items-center p-8">
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
      </div>

      {/* Status */}
      {isWin && (
        <div className="text-center text-white text-2xl font-bold mt-4">
          Kamu Menang!
        </div>
      )}
      {isLose && (
        <div className="text-center text-red-500 text-2xl font-bold mt-4">
          Game Over!
        </div>
      )}

      <FloatingMenuComponent />
    </div>
  );
};

export default GameSection;
