import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <form className="form">
          <h1 className="form__heading">Sign In</h1>
          <label for="email" className="form__label">Email</label>
          <input id="email" type="email" required placeholder="tony7989@gmail.com" className="form__input"></input>
          <label for="password" className="form__label">Password</label>
          <input id="password" type="password" required className="form__input"></input>
          <button type="submit" className="form__button">Sign In</button>
          <a href="/forgot-password" className="form__link">Forgot password?</a>
        </form>
      </div>
    </main>
  );
}

export default App;