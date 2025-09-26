import { useState } from "react";
import FloatingMenuComponent from "../../../component/floating_menu";
import { PRIMARY_COLOR } from "../../../constant/color";
import { motion } from "motion/react";

// Alphabet data
const AlphabetCard = [
  { id: 1, letter: 'A', letterUrl: '/img/A.png', signUrl: '/img/sign-a.png' },
  { id: 2, letter: 'B', letterUrl: '/img/B.png', signUrl: '/img/sign-b.png' },
  { id: 3, letter: 'C', letterUrl: '/img/C.png', signUrl: '/img/sign-c.png' },
  { id: 4, letter: 'D', letterUrl: '/img/D.png', signUrl: '/img/sign-d.png' },
  { id: 5, letter: 'E', letterUrl: '/img/E.png', signUrl: '/img/sign-e.png' },
  { id: 6, letter: 'F', letterUrl: '/img/F.png', signUrl: '/img/sign-f.png' },
  { id: 7, letter: 'G', letterUrl: '/img/G.png', signUrl: '/img/sign-g.png' },
  { id: 8, letter: 'H', letterUrl: '/img/H.png', signUrl: '/img/sign-h.png' },
  { id: 9, letter: 'I', letterUrl: '/img/I.png', signUrl: '/img/sign-i.png' },
  { id: 10, letter: 'J', letterUrl: '/img/J.png', signUrl: '/img/sign-j.png' },
  { id: 11, letter: 'K', letterUrl: '/img/K.png', signUrl: '/img/sign-k.png' },
  { id: 12, letter: 'L', letterUrl: '/img/L.png', signUrl: '/img/sign-l.png' },
  { id: 13, letter: 'M', letterUrl: '/img/M.png', signUrl: '/img/sign-m.png' },
  { id: 14, letter: 'N', letterUrl: '/img/N.png', signUrl: '/img/sign-n.png' },
  { id: 15, letter: 'O', letterUrl: '/img/O.png', signUrl: '/img/sign-o.png' },
  { id: 16, letter: 'P', letterUrl: '/img/P.png', signUrl: '/img/sign-p.png' },
  { id: 17, letter: 'Q', letterUrl: '/img/Q.png', signUrl: '/img/sign-q.png' },
  { id: 18, letter: 'R', letterUrl: '/img/R.png', signUrl: '/img/sign-r.png' },
  { id: 19, letter: 'S', letterUrl: '/img/S.png', signUrl: '/img/sign-s.png' },
  { id: 20, letter: 'T', letterUrl: '/img/T.png', signUrl: '/img/sign-t.png' },
  { id: 21, letter: 'U', letterUrl: '/img/U.png', signUrl: '/img/sign-u.png' },
  { id: 22, letter: 'V', letterUrl: '/img/V.png', signUrl: '/img/sign-v.png' },
  { id: 23, letter: 'W', letterUrl: '/img/W.png', signUrl: '/img/sign-w.png' },
  { id: 24, letter: 'X', letterUrl: '/img/X.png', signUrl: '/img/sign-x.png' },
  { id: 25, letter: 'Y', letterUrl: '/img/Y.png', signUrl: '/img/sign-y.png' },
  { id: 26, letter: 'Z', letterUrl: '/img/Z.png', signUrl: '/img/sign-z.png' },
];

const FlashCardSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showSign, setShowSign] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const currentCard = AlphabetCard[currentCardIndex];

  const handleCardClick = () => {
    setShowSign(!showSign);
  };

  const handleBottomCardClick = (index: number) => {
    if (flippedCards.has(index)) {
      // If already flipped, select this card
      setCurrentCardIndex(index);
      setShowSign(false);
    } else {
      // Flip the card
      setFlippedCards(prev => new Set([...prev, index]));
    }
  };

  const getVisibleCards = () => {
    const visibleCount = 7;
    let startIndex = Math.max(0, currentCardIndex - Math.floor(visibleCount / 2));
    let endIndex = Math.min(AlphabetCard.length, startIndex + visibleCount);
    
    if (endIndex - startIndex < visibleCount) {
      startIndex = Math.max(0, endIndex - visibleCount);
    }
    
    return AlphabetCard.slice(startIndex, endIndex);
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      {/* Header */}
      <div className="w-full px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-4">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-center text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4">
            FlashCard
          </h2>
          <p className="text-center text-white text-xs sm:text-sm md:text-base max-w-md">
            Peragakan isyaratnya, lalu tekan kartu untuk melihat isyaratnya.
          </p>
        </div>
      </div>

      {/* Main Card Display */}
      <div className="flex-1 flex justify-center items-center px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <motion.div 
          className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 cursor-pointer perspective-1000"
          onClick={handleCardClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="relative w-full h-full preserve-3d"
            animate={{ rotateY: showSign ? 180 : 0 }}
            transition={{ duration: 0.6, type: "tween" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front - Letter */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden bg-white"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img 
                src={currentCard.letterUrl} 
                alt={`Letter ${currentCard.letter}`}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                {currentCard.letter}
              </div>
            </div>

            {/* Back - Sign */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden bg-white"
              style={{ 
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)"
              }}
            >
              <img 
                src={currentCard.signUrl} 
                alt={`Sign for ${currentCard.letter}`}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                Sign {currentCard.letter}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Cards */}
      <div className="w-full px-4 sm:px-6 md:px-8 pb-20 sm:pb-24">
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center gap-1 sm:gap-2">
            {getVisibleCards().map((card, index) => {
              const actualIndex = AlphabetCard.findIndex(c => c.id === card.id);
              const isFlipped = flippedCards.has(actualIndex);
              const isSelected = actualIndex === currentCardIndex;
              
              return (
                <motion.div
                  key={card.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'w-14 h-18 sm:w-16 sm:h-20 md:w-18 md:h-22 z-20 scale-110' 
                      : 'w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 z-10'
                  }`}
                  onClick={() => handleBottomCardClick(actualIndex)}
                  whileHover={{ scale: isSelected ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    rotateY: isFlipped ? 180 : 0,
                    y: isSelected ? -10 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Card Back */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-md overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img 
                      src="/img/back_card.png" 
                      alt="Card back"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Front */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-md overflow-hidden bg-white"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <img 
                      src={card.letterUrl} 
                      alt={`Letter ${card.letter}`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-4">
          <p className="text-white text-xs sm:text-sm opacity-75">
            Klik kartu di bawah untuk membuka huruf, lalu klik untuk memilih
          </p>
        </div>
      </div>

      <FloatingMenuComponent />

      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default FlashCardSection;