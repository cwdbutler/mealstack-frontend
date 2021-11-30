// import { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('You have submitted the form.');
  };

  // const fetchBackend = () => {
  //   fetch('url')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Form</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Protein</p>
            <input name="protein" />
          </label>
          <label>
            <p>Fats</p>
            <input name="fats" />
          </label>
          <label>
            <p>Carbs</p>
            <input name="carbs" />
          </label>
          <label>
            <p>Calories</p>
            <input name="calories" />
          </label>
        </fieldset>
        <button type="submit">Search</button>
      </form>
      {/* <button onClick={() => fetchBackend()}>Fetch</button> */}
    </div>
  );
}
