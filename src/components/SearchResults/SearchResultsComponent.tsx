import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';
  
  // Example content to search through

  const content = [
    { id: 1, title: 'Denise R. James', description: 'Experienced automotive robotic machine learning leader.' },
    { id: 2, title: 'Machine Learning Products', description: 'Innovative machine learning products for the automotive industry.' },
    { id: 3, title: 'Training', description: 'Comprehensive training programs for machine learning and embedded electronics.' },
    { id: 4, title: 'React Web Design', description: 'Professional web design services using React.' },
    { id: 5, title: 'Contact QCL', description: 'Get in touch with Quantum Computer Learning.' }
  ];

  // Filter content based on the query
  
  const results = content.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
