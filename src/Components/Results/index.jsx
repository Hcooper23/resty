import React from 'react';
import ReactJson from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
import './Results.scss';

const Results = (props) => {
  return (
    <section>
      {props.loading ? (
        <p>Loading.....</p>
      ) : (
        <p>
          {props.data ? (
            <ReactJson
              data={props.data}
              theme={JSONPrettyMon}
              replacer={(key, value) => {
                // Check if the key is 'count', 'pagination', or 'results'
                if (key === 'count' || key === 'pagination' || key === 'results') {
                  // Format the JSON value with indentation for better readability
                  return JSON.stringify(value, null, 2);
                }
                return value;
              }}
            />
          ) : null}
        </p>
      )}
    </section>
  );
};

export default Results;
