import React, { useState } from 'react';
import s from "./style.module.css"

const EntityComponent = () => {
  // Стейт с массивом объектов сущностей
  const [entities, setEntities] = useState([
    { id: 1, name: 'Entity 1', description: 'Description 1' },
    { id: 2, name: 'Entity 2', description: 'Description 2' },
    { id: 3, name: 'Entity 3', description: 'Description 3' }
  ]);

  // Функция для добавления новой сущности
  const addEntity = () => {
    const newEntity = {
      id: entities.length + 1, // Генерация уникального id
      name: `Entity ${entities.length + 1}`,
      description: `Description ${entities.length + 1}`
    };
    setEntities([...entities, newEntity]); // Добавление новой сущности в массив
  };

  return (
    <div>
      <h2>Entities</h2>
      <button onClick={addEntity}>Add Entity</button>
      <ul>
        {entities.map(entity => (
          <li key={entity.id}  className={s.task}>
            <p>{entity.name}</p>: {entity.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntityComponent;
