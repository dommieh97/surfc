"use client"
import React from "react";

const spans = ['S', 'U', 'R', 'F', 'C'];

const renderSpans = () => {
  const intervals = spans.map((span, index) => index * 80000);

  return spans.map((span, index) => {
    const interval = intervals[index];

    return (
      <span key={index} className="text-span">
        {span}
      </span>
    );
  });
};

const Title = () => {
  React.useEffect(() => {
    const spans = renderSpans();

    spans.forEach((span, index) => {
      setTimeout(() => {
       
      }, index * 80000);
    });
  }, []);

  return (
    <div className="container">
      <div className="text">
        {renderSpans()}
      </div>
    </div>
  );
};

export default Title;