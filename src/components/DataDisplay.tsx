interface DataItem {
    id: string;
    text: string;
    date: string;
  }
  
  export const DataDisplay = ({ data }: { data: DataItem[] }) => {
    return (
      <div style={{ margin: '20px' }}>
        <h2>Données Reçues</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {data.map((item) => (
            <li key={item.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
              <strong>{item.date}</strong>: {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };