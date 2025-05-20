function Login() {
  let isLoggedIn = false;

  if (isLoggedIn) {
    return (
      <>
        <h2> welcome , user!</h2>
        <button>log out</button>
      </>
    );
  } else {
    return (
      <>
        <h2>Please log in</h2>
        <button>Login</button>
      </>
    );
  }
}

export default Login;
