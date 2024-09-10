import React, { useState } from 'react';
import axios from 'axios';

const LinkedDutyForm = () => {
  const [crewId, setCrewId] = useState('');
  const [shift, setShift] = useState('morning');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/assign-linked-duty', {
        crewId,
        shift
      });
      console.log(response.data);
      alert('Linked Duty Assigned Successfully!');
    } catch (error) {
      console.error('Error assigning duty', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Assign Linked Duty</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Crew ID:</label>
          <input
            type="text"
            value={crewId}
            onChange={(e) => setCrewId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Shift:</label>
          <select value={shift} onChange={(e) => setShift(e.target.value)}>
            <option value="morning">Morning</option>
            <option value="night">Night</option>
          </select>
        </div>
        <button type="submit">Assign Duty</button>
      </form>
    </div>
  );
};

export default LinkedDutyForm;
