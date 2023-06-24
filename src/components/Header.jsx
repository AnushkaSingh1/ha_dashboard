import React from 'react';

const Header = ({ category, title }) => (
  <div className=" m">
    <p className="t">{category}</p>
    <p className="tx">
      {title}
    </p>
  </div>
);

export default Header;