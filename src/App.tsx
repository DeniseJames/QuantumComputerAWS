import React, { Suspense } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from '../src/components/NavBar/NavBarComponent';
import './App.css'; // Import your CSS file

// Lazy load the components

const MachineLearningComponent = React.lazy(() => import('../src/components/MachineLearning/MachineLearningComponent'));
const WebDesignComponent = React.lazy(() => import('../src/components/WebDesign/WebDesignComponent'));
const TrainingComponent = React.lazy(() => import('../src/components/Training/TrainingComponent'));
const LoginComponent = React.lazy(() => import('./components/LogIn/LoginComponent'));

function App() {
  return (
    <Authenticator.Provider>
      <Router>
        <NavbarComponent />
        <div className="content-wrapper"> {/* Add this wrapper */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route path="/login" element={<LoginComponent />} />
              <Route path="/machine-learning" element={<MachineLearningComponent />} />
              <Route path="/web-design" element={<WebDesignComponent />} />
              <Route path="/training" element={<TrainingComponent />} />
        
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Authenticator.Provider>
  );
}

export default App;
