import { Investor } from '../types';

interface Props {
  investors: Investor[];
}

export const InvestorsList = ({ investors }: Props) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
      <h3>Tous les Investisseurs</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {investors.map((investor) => (
          <li key={investor.id} style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            {investor.name} - <strong>{investor.specialization}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};