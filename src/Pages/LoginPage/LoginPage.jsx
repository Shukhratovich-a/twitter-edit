import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <section className="login">
      <h2 className="login__heading">Log in to Twitter</h2>
      <form className="login__form">
        <input
          className="login__input"
          type="text"
          name="user-name"
          placeholder="Phone number, email address"
        />
        <input
          className="login__input"
          type="password"
          name="user-password"
          placeholder="Password"
        />
        <button className="login__button">Log In</button>
      </form>

      <div className="login__bottom">
        <button>Forgot password?</button>
        <button>Sign up to Twitter?</button>
      </div>
    </section>
  );
};

export default LoginPage;
