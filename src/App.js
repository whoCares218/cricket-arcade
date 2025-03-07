import React from 'react';
import styled from 'styled-components';

const GameCard = styled.a`
  border-radius: 380px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  display: block;
  
  &:hover {
    transform: translateY(-8px);
    
    img {
      transform: scale(1.25);
      border-radius: 12px;
    }
    
    .game-title {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(16, 23, 42, 0) 0%, rgba(16, 23, 42, 0.8) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: 550px;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.3s ease;
`;

const GameTitle = styled.div`
  position: absolute;
  left: 14rem;
  bottom: 2rem;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transform: translateY(20px);
`;

const App = () => {
  const [games] = React.useState([
    {
      id: 1,
      image: "cricket-bingo-logo.webp",
      link: "https://cricket-bingo.netlify.app",
      name: "Cricket Bingo"
    },
    {
      id: 2,
      image: "cricket-higher-lower-logo.webp",
      link: "https://cricket-higher-lower.netlify.app",
      name: "Higher or Lower"
    }
  ]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      fontFamily: "'Inter', sans-serif",
    }}>
      <header style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '3rem', 
          color: '#2dd4bf',
          letterSpacing: '-0.05em'
        }}>
          Cricket Arcade
        </h1>
      </header>

      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '4rem 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginTop: '4rem'
        }}>
          {games.map((game) => (
            <GameCard 
              key={game.id}
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageContainer>
                <GameImage src={game.image} alt={game.name} />
                <GameTitle className="game-title">{game.name}</GameTitle>
              </ImageContainer>
            </GameCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
