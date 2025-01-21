import { useState, useEffect } from "react";

const BottomData = ({ cards, techLogoImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const getSlidesPerView = () => {
    if (windowWidth >= 1140) return 4;
    if (windowWidth >= 960) return 3;
    if (windowWidth >= 720) return 2;
    return 1;
  };

  const slidesPerView = getSlidesPerView();

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= cards.length - slidesPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - slidesPerView : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwiping) {
        nextSlide();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isSwiping, cards.length, slidesPerView]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setIsSwiping(false);
  };
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsSwiping(true);
  };

  const handleMouseUp = (e) => {
    if (isSwiping) {
      const endX = e.clientX;
      const diff = startX - endX;

      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
      setIsSwiping(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition-transform duration-1000 select-none transform`}
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {cards?.map((singleCard, index) => (
          <div
            key={index}
            className={`pt-12 md:pt-6 pb-12 w-full flex-shrink-0 flex items-center md:items-center gap-6 md:block pl-16 sm:pl-0 sm:text-center
                ${slidesPerView === 4 ? "xl:w-1/4" : ""} 
                ${slidesPerView === 3 ? "lg:w-1/3" : ""} 
                ${slidesPerView === 2 ? "md:w-1/2" : ""} 
                ${slidesPerView === 1 ? "w-full" : ""}`}
          >
            <h6 className={`text-[#0D1B2F] heading-two pt-2`}>
              {singleCard?.number}
            </h6>
            <p className="text-[#0D1B2FCC] paragraph-no-color relative -top-6 sm:top-0">
              {singleCard?.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomData;
