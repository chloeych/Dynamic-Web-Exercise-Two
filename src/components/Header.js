import React from 'react';

function Header(){

return(
  <header className="Header">
    <h2>Weather App</h2>
    <div className="CitiesNav">
      <a href="/?city=shanghai">Shanghai</a>
      {/* url parameter with the name of the city */}
      <a href="/?city=singapore">Singapore</a>
      <a href="/?city=sydney">Sydney</a>
      <a href="/?city=tokyo">Tokyo</a>
    </div>
  </header>
      )
    }

export default Header;
