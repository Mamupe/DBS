import './CodeFetchingInput.css';

import React from 'react';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export const CodeFetchingInput = () => {
  const [filter, setFilter] = useState('Goten');
  const [debounceFilter] = useDebounce(filter, 1500);
  const [dbsCollection, setDbsCollection] = useState([]);

  useEffect(() => {
    const getDbsFiltered = async () => {
      const dbsList = await fetch(`http://localhost:8080/characters?name=${filter}`);
      const dbsListToJson = await dbsList.json();
      console.log(dbsListToJson);

      return {
        ...dbsListToJson,
        name: dbsListToJson.name,
        image: dbsListToJson.imageUrl,
      };
    };
    getDbsFiltered().then((dbs) => setDbsCollection([dbs[0]]));
  }, [debounceFilter]);

  return (
    <div className="divFinder">
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {dbsCollection.map((dbs) => (
          <li key={dbs.id}>
            <h1>{dbs.name}</h1>
            <img className="finderImg" src={dbs.imageUrl} alt={dbs.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeFetchingInput;
