import React, { useState } from 'react';
import './Form.scss';

const Form = (props) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('get');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.id.toUpperCase());
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input name="url" type="text" value={url} onChange={handleUrlChange} />
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <span
          id="get"
          className={method === 'GET' ? 'active' : ''}
          onClick={handleMethodChange}
        >
          GET
        </span>
        <span
          id="post"
          className={method === 'POST' ? 'active' : ''}
          onClick={handleMethodChange}
        >
          POST
        </span>
        <span
          id="put"
          className={method === 'PUT' ? 'active' : ''}
          onClick={handleMethodChange}
        >
          PUT
        </span>
        <span
          id="delete"
          className={method === 'DELETE' ? 'active' : ''}
          onClick={handleMethodChange}
        >
          DELETE
        </span>
      </label>
    </form>
  );
};

export default Form;
