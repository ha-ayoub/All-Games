import { useState } from 'react';
import '../../styles/Home.css';
import HomeHeader from './HomeHeader';
import HomeGamesSection from './HomeGamesSection';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="home-container">
      <HomeHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HomeGamesSection searchTerm={searchTerm}/>
    </div>
  );
}

export default Home;