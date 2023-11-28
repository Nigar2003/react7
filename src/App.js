// App.js
import React from 'react';
import FeedbackForm from './FeedbackForm';

const App = () => {
  const handleFormSubmit = (formData) => {
    // Handle the form submission, you can send the data to a server or perform other actions
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <FeedbackForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
