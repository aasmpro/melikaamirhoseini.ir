import React, { useState, useEffect } from 'react';
import { randomSaadiGhazal } from '../utils/ganjoor';

export const Main = () => {
  const [poem, setPoem] = useState();
  useEffect(() => {
    randomSaadiGhazal().then((data) => {
      setPoem({
        ...data,
        text: Object.entries(data.text)
          .slice(0, 4)
          .map((entry) => entry[1]),
      });
    });
  }, []);
  return (
    <div className="full-screen main">
      <div className="header">
        <div>ملیکا امیرحسینی</div>
        <div>
          <a href="https://twitter.com/mkamirhosseini1/">توئیتر</a>
        </div>
      </div>
      <div className="content">
        <div className="poem-container">
          {poem?.text.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
      <div className="footer">
        <a href={poem?.url}>{poem?.fullName}</a>
      </div>
    </div>
  );
};
