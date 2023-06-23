import React from 'react';
import ReactJson from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
import './Results.scss';

const Results = (props) => {
  return (
    <section className="results">
      {props.loading ? (
        <p>Loading.....</p>
      ) : (
        <div className="content">
          {props.data ? (
            <ReactJson
              data={props.data}
              theme={JSONPrettyMon}
              replacer={(key, value) => {
                if (key === 'count' || key === 'pagination' || key === 'results') {
                  return JSON.stringify(value, null, 2);
                }
                return value;
              }}
            />
          ) : null}
        </div>
      )}
    </section>
  );
};

export default Results;
