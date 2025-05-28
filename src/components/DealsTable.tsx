import { Deal } from '../types';

interface Props {
  deals: Deal[];
}

export const DealsTable = ({ deals }: Props) => {
  return (
    <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
      <h3>Dernières Transactions</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd' }}>Startup</th>
            <th style={{ border: '1px solid #ddd' }}>Montant</th>
            <th style={{ border: '1px solid #ddd' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id}>
              <td style={{ border: '1px solid #ddd' }}>{deal.startupName}</td>
              <td style={{ border: '1px solid #ddd' }}>{deal.amount.toLocaleString()} €</td>
              <td style={{ border: '1px solid #ddd' }}>{deal.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};