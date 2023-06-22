// import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/monikai';
import './Results.scss';

const Results = (props) => {

  // const [data, setData] = useState(props.data);

  // useEffect(() => {
  //   setData(props.data);
  // }, [props.data]);

  return (
    <section>
      {props.loading ? 
      <p>Loading.....</p> :

      <p>
        {props.data ? <ReactJson data={props.data} theme={JSONPrettyMon}></ReactJson> : null}
      </p>
        
        }
    </section>
  );
};

export default Results;
