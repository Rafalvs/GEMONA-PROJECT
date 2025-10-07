    import React, { useState, useEffect } from 'react';

    export default function Categorys() {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/categorias');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };

        fetchData();
      }, []); // Empty dependency array ensures this runs once on mount

      if (loading) return <p>Loading data...</p>;
      if (error) return <p>Error: {error.message}</p>;

    return (
      <div>
        <ul>
          {data.map(item => (
            <li>
              <h1> {item.name}</h1>  
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}