import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear()); // Initialize the state with the current year

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear()); // Update the year state every second
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return <footer>&copy; {year}</footer>;
};

export default Footer;
