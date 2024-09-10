import React, { useState } from 'react';
import axios from 'axios';

const UnlinkedDutyForm = () => {
  const [crewIds, setCrewIds] = useState(['']);
  const [tripCount, setTripCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/assign-unlinked-duty', {
       
        crewIds,
        tripCount
      });
      console.log(response.data);
      alert('Unlinked Duty Assigned Successfully!');
    } catch (error) {
      console.error('Error assigning unlinked duty', error);
    }
  };

  const handleCrewChange = (index, value) => {
    const newCrewIds = [...crewIds];
    newCrewIds[index] = value;
    setCrewIds(newCrewIds);
  };

  const addCrewField = () => {
    setCrewIds([...crewIds, '']);
  };

  return (
    <div className="form-container">
      <h2>Assign Unlinked Duty</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Number of Trips:</label>
          <input
            type="number"
            value={tripCount}
            onChange={(e) => setTripCount(e.target.value)}
            required
          />
        </div>
        {crewIds.map((crew, index) => (
          <div key={index}>
            <label>Crew ID (Trip {index + 1}):</label>
            <input
              type="text"
              value={crew}
              onChange={(e) => handleCrewChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addCrewField}>Add Another Crew</button>
        <button type="submit">Assign Duty</button>
      </form>
    </div>
  );
};

export default UnlinkedDutyForm;
