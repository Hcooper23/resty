import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import './App.scss';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    try {
      setLoading(true);
      const requestOptions = {
        method: requestParams.method,
      };

      if (requestParams.method !== 'GET') {
        requestOptions.headers = { 'Content-Type': 'application/json' };
        requestOptions.body = JSON.stringify(requestParams.body);
      }

      const response = await fetch(requestParams.url, requestOptions);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setData(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(requestParams).length !== 0) {
      callApi(requestParams);
    }
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={setRequestParams} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
};

export default App;
