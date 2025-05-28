interface RankedInvestor {
    id: string;
    name: string;
    score: number;
    reasons: string[];
  }
  
  interface Props {
    startupId: string;
  }
  
  export const RankedInvestors = ({ startupId }: Props) => {
    const rankedInvestors: RankedInvestor[] = [
      { id: '1', name: 'Sophie VC', score: 0.95, reasons: ['Secteur correspondant', 'Historique positif'] },
      { id: '2', name: 'Marc Angels', score: 0.82, reasons: ['Ticket moyen similaire'] }
    ];
  
    return (
      <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd' }}>Nom</th>
              <th style={{ border: '1px solid #ddd' }}>Score</th>
              <th style={{ border: '1px solid #ddd' }}>Critères</th>
            </tr>
          </thead>
          <tbody>
            {rankedInvestors.map((investor) => (
              <tr key={investor.id}>
                <td style={{ border: '1px solid #ddd' }}>{investor.name}</td>
                <td style={{ border: '1px solid #ddd' }}>{investor.score.toFixed(2)}</td>
                <td style={{ border: '1px solid #ddd' }}>{investor.reasons.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };