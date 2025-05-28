import { Startup } from '../types';

interface Props {
  startups: Startup[];
  onSelect: (startup: Startup) => void;
}

export const StartupsGrid = ({ startups, onSelect }: Props) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
      <h3>Startups Disponibles</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {startups.map((startup) => (
          <li 
            key={startup.id}
            onClick={() => onSelect(startup)}
            style={{ 
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#f5f5f5',
              cursor: 'pointer'
            }}
          >
            {startup.name} <em>({startup.sector})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};