import React, { useState, useEffect, useReducer } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import './App.scss';

const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  apiHistory: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_REQUEST_PARAMS':
      return { ...state, requestParams: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'ADD_API_HISTORY':
      return { ...state, apiHistory: [...state.apiHistory, action.payload] };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApi = async (requestParams) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });

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

      dispatch({ type: 'SET_DATA', payload: responseData });
      dispatch({ type: 'SET_LOADING', payload: false });

      const apiCall = {
        url: requestParams.url,
        method: requestParams.method,
        headers: response.headers,
        result: responseData,
      };
      dispatch({ type: 'ADD_API_HISTORY', payload: apiCall });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'SET_DATA', payload: null });
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  useEffect(() => {
    if (Object.keys(state.requestParams).length !== 0) {
      callApi(state.requestParams);
    }
  }, [state.requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={(requestData) => dispatch({ type: 'SET_REQUEST_PARAMS', payload: requestData })} />
      <Results data={state.data} loading={state.loading} />
      <div>
        <h2>Previous API Calls</h2>
        {state.apiHistory.map((apiCall, index) => (
          <div key={index}>
            <h3>API Call {index + 1}</h3>
            <div>URL: {apiCall.url}</div>
            <div>Method: {apiCall.method}</div>
            <div>Headers: {JSON.stringify(apiCall.headers, null, 2)}</div>
            <div>Result: {JSON.stringify(apiCall.result, null, 2)}</div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
