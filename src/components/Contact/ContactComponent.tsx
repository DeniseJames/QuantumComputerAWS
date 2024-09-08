import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';
import './ContactComponent.module.css'; // Import your custom CSS file

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://w5574xwipbd4tfluh7ml5yfb4i.appsync-api.us-east-2.amazonaws.com/graphql" }),
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': "3n576r4r4rem3h7vekphtjikd4",
  },
});

const createContactMutation = gql`
  mutation CreateContact($email: String!, $name: String!, $comment: String!) {
    createContact(input: { email: $email, name: $name, comment: $comment }) {
      id
      email
      name
      comment
    }
  }
`;

const ContactComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { email, name, comment };

    try {
      const result = await client.mutate({
        mutation: createContactMutation,
        variables: data,
      });
      console.log('Form submitted successfully:', result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group mb-4">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label>Comment:</label>
          <textarea
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactComponent;
