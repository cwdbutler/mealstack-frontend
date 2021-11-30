import './Home.css';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('You have submitted the form.');
  };

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
    </div>
  );
}
