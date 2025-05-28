import { useState } from 'react';
import { DataDisplay } from './components/DataDisplay';
import { RankingTable } from './components/RankingTable';
import { StartupsGrid } from './components/StartupsGrid';
import { InvestorsList } from './components/InvestorsList';
import { DealsTable } from './components/DealsTable';
import { RankedInvestors } from './components/RankedInvestors';
import { Startup, Investor, Deal } from './types'; // Import des types depuis le nouveau fichier

// Données mockées
const mockCrawlerData = [
  { id: '1', text: 'BTC +5% aujourd\'hui', date: '2025-04-25' },
  { id: '2', text: 'Nouvelle startup AI', date: '2025-04-24' }
];

const mockStartups: Startup[] = [
  { id: '1', name: 'AI Tech', sector: 'IA', score: 0.92 },
  { id: '2', name: 'BlockChain Co', sector: 'Finance', score: 0.87 }
];

const mockInvestors: Investor[] = [
  { id: '1', name: 'Sophie VC', specialization: 'Deep Tech' },
  { id: '2', name: 'Marc Angels', specialization: 'Fintech' }
];

const mockDeals: Deal[] = [
  { id: '1', startupName: 'AI Tech', amount: 500000, date: '2025-03-15' }
];

function App() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  return (
    <div className="App">
      <h1>Plateforme d'Investissement</h1>
      
      <DataDisplay data={mockCrawlerData} />

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        marginTop: '30px'
      }}>
        {/* Colonne gauche */}
        <div>
          <StartupsGrid 
            startups={mockStartups}
            onSelect={(startup: Startup) => setSelectedStartup(startup)}
          />
          <DealsTable deals={mockDeals} />
        </div>

        {/* Colonne droite */}
        <div>
          {selectedStartup ? (
            <div>
              <h3>Investisseurs pour {selectedStartup.name}</h3>
              <RankedInvestors startupId={selectedStartup.id} />
            </div>
          ) : (
            <InvestorsList investors={mockInvestors} />
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <RankingTable startups={mockStartups} />
      </div>
    </div>
  );
}

export default App;