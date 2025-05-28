interface Startup {
  id: string;
  name: string;
  score: number;  // Ex: 0.87 (score ML)
}

export const RankingTable = ({ startups }: { startups: Startup[] }) => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Classement des Startups</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nom</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Score ML</th>
          </tr>
        </thead>
        <tbody>
          {startups.map((startup) => (
            <tr key={startup.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{startup.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{startup.score.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};