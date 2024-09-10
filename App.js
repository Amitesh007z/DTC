import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DutyScheduler from './Components/Duty';
import LinkedDutyForm from './Components/Linked';
import UnlinkedDutyForm from './Components/unlinked';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/linked-duty">Linked Duty</Link></li>
              <li><Link to="/unlinked-duty">Unlinked Duty</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<DutyScheduler />} />
          <Route path="/linked-duty" element={<LinkedDutyForm />} />
          <Route path="/unlinked-duty" element={<UnlinkedDutyForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
