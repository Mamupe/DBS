import './CodeFetchingInput.css';

import React from 'react';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

export const CodeFetchingInput = () => {
  const [filter, setFilter] = useState('Son Goku');
  const [debounceFilter] = useDebounce(filter, 500);
  const [dbsCollection, setDbsCollection] = useState([]);

  useEffect(() => {
    const getDbsFiltered = async () => {
      const dbsList = await fetch(
        `https://dragon-ball-super-api.herokuapp.com/api/characters/${filter}`,
      );
      const dbsListToJson = await dbsList.json();

      return {
        ...dbsListToJson,
        name: dbsListToJson.name,
        image: dbsListToJson.imageUrl,
      };
    };
    getDbsFiltered().then((dbs) => setDbsCollection([dbs]));
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
