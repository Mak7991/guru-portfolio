import React, { useState, useEffect, useCallback } from "react";

const WaveScroll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollDirection, setLastScrollDirection] = useState('down');
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = 6;

  const pagination = useCallback(
    (page, movingUp = false) => {
      if (isScrolling) return;

      setIsScrolling(true);
      setCurrentPage(page);

      // Simulate the transition delay
      setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    },
    [isScrolling]
  );

  const navigateUp = useCallback(() => {
    if (currentPage > 1 && !isScrolling) {
      pagination(currentPage - 1, true);
    }
  }, [currentPage, isScrolling, pagination]);

  const navigateDown = useCallback(() => {
    if (currentPage < totalPages && !isScrolling) {
      pagination(currentPage + 1);
    }
  }, [currentPage, totalPages, isScrolling, pagination]);

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      if (isScrolling) return;

      const scrollDirection = e.deltaY < 0 ? 'up' : 'down';
      
      // Hide/show nav panel based on scroll direction
      if (scrollDirection !== lastScrollDirection) {
        setIsNavVisible(scrollDirection === 'down');
        setLastScrollDirection(scrollDirection);
      }

      if (e.deltaY < 0) {
        navigateUp();
      } else {
        navigateDown();
      }
    },
    [isScrolling, navigateUp, navigateDown, lastScrollDirection]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (isScrolling) return;

      if (e.key === "ArrowUp") {
        navigateUp();
      } else if (e.key === "ArrowDown") {
        navigateDown();
      }
    },
    [isScrolling, navigateUp, navigateDown]
  );

  const handleNavClick = useCallback(
    (page) => {
      if (!isScrolling && page !== currentPage) {
        pagination(page);
      }
    },
    [isScrolling, currentPage, pagination]
  );

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  const pages = [
    {
      id: 1,
      leftBg: "bg6.jpeg",
      rightBg: "bg14.jpeg",
      title: "Young Entrepreneur Summit Award He got the Young Entrepreneur Summit Award in 2019",
      hasText: "right",
    },
    {
      id: 2,
      leftBg: "bg15.jpeg",
      rightBg: "bg16.jpeg",
      title: "National Entrepreneur Challenge Winner of the National Entrepreneur Challenge in 2019-2021",
      hasText: "left",
    },
    {
      id: 3,
      leftBg: "bg17.jpeg",
      rightBg: "bg18.jpeg",
      title: "IQRA University Entrepreneur Awards Four-time winner of the IQRA University Entrepreneur Awards 2019–2022.",
      hasText: "right",
    },
    {
      id: 4,
      leftBg: "bg19.jpeg",
      rightBg: "bg20.jpeg",
      title: "Academic Excellence An MBA and MPhil finished in 2022.",
      hasText: "left",
    },
    {
      id: 5,
      leftBg: "bg19.jpeg",
      rightBg: "bg20.jpeg",
      title: "Sitara-e-Pakistan He s recognized for outstanding contribution to Pakistan’s business sector in 2023",
      hasText: "left",
    },
    {
      id: 6,
      leftBg: "bg19.jpeg",
      rightBg: "bg20.jpeg",
      title: "Digital Entrepreneur Awarded Digital Entrepreneur of the Year (2023) at the South Asian Business Excellence Awards (SAPS) in the Maldives.",
      hasText: "left",
    }
  ];

  return (
    <div className="wave-scroll-container">
      <div className="scene">
        {pages.map((page, index) => (
          <div
            key={page.id}
            className={`page page-${page.id} ${
              currentPage === page.id
                ? "active"
                : currentPage > page.id
                ? "small"
                : currentPage === page.id + 1
                ? "previous"
                : ""
            }`}
          >
            {isMobile ? (
              // Mobile: Full-width single image with vertical sliding
              <div
                className="mobile-page"
                style={{
                  backgroundImage: `url('/images/${page.leftBg}')`,
                  transform:
                    currentPage === page.id
                      ? "translateY(0)"
                      : currentPage > page.id
                      ? "translateY(-100%)"
                      : "translateY(100%)",
                }}
              >
                <div className="mobile-overlay">
                  <h2 className="heading">{page.title}</h2>
                  <p className="reference-link">
                    For reference <a href="https://www.afnanahmedsiddique.com/awards" target="_blank" rel="noopener noreferrer">click here</a>
                  </p>
                  {/* {page.id === 4 && (
                    <p className="check-out">
                      Check out our <a href="#services">services</a>
                    </p>
                  )} */}
                </div>
              </div>
            ) : (
              // Desktop: Split-screen horizontal sliding
              <>
                <div
                  className="half left"
                  style={{
                    backgroundImage: `url('/images/${page.leftBg}')`,
                    transform:
                      currentPage === page.id
                        ? "translateX(0)"
                        : "translateX(-100%)",
                  }}
                >
                  {page.hasText === "left" && (
                    <>
                      <h2 className="heading">{page.title}</h2>
                      <p className="reference-link">
                        For reference <a href="https://www.afnanahmedsiddique.com/awards" target="_blank" rel="noopener noreferrer">click here</a>
                      </p>
                    </>
                  )}
                </div>
                <div
                  className={`half right ${
                    page.hasText === "right" ? "withText" : ""
                  }`}
                  style={{
                    backgroundImage: `url('/images/${page.rightBg}')`,
                    transform:
                      currentPage === page.id
                        ? "translateX(0)"
                        : "translateX(100%)",
                  }}
                >
                  {page.hasText === "right" && (
                    <>
                      <h2 className="heading">{page.title}</h2>
                      <p className="reference-link">
                        For reference <a href="https://www.afnanahmedsiddique.com/awards" target="_blank" rel="noopener noreferrer">click here</a>
                      </p>
                    </>
                  )}
                  {/* {page.id === 6 && (
                    <p className="check-out">
                      Check out our <a href="#services">services</a>
                    </p>
                  )} */}
                </div>
              </>
            )}
          </div>
        ))}

        <div className={`nav-panel ${!isNavVisible ? 'invisible' : ''} ${isMobile ? 'mobile-nav' : ''}`}>
          <div className="scroll-btn up" onClick={navigateUp}></div>
          <div className="scroll-btn down" onClick={navigateDown}></div>
          <nav>
            <ul>
              {pages.map((page) => (
                <li
                  key={page.id}
                  className={`nav-btn nav-page${page.id} ${
                    currentPage === page.id ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(page.id)}
                ></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default WaveScroll;
