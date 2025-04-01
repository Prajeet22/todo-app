import { useDispatch, useSelector } from "react-redux";
import { login, logout, setEmail, setShowEmailInput, setShowPopup } from "./store/authSlice";
import "./App.css";
import TodoForm from "./components/todoform/TodoForm";
import Tabs from "./components/tabs/Tabs";
import TodoList from "./components/todolist/TodoList";
import Alert from "./components/alert/Alert";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, email, showEmailInput, showPopup } = useSelector(
    (state) => state.auth
  );

  const handleSignInClick = () => {
    dispatch(setShowEmailInput(true));
  };

  const handleInputChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleSignInSubmit = () => {
    if (email.trim() !== "") {
      dispatch(login(email));
      dispatch(setShowPopup(true));
      setTimeout(() => dispatch(setShowPopup(false)), 2000);
    }
  };

  const handleSignOut = () => {
    dispatch(logout());
    dispatch(setShowPopup(true));
    setTimeout(() => dispatch(setShowPopup(false)), 2000);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="app_title">Todo App</div>
        <div className="auth_section">
          {!isAuthenticated && !showEmailInput && (
            <button className="sign_in_btn" onClick={handleSignInClick}>
              Sign In
            </button>
          )}
          {showEmailInput && (
            <div className="email_input_section">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleInputChange}
              />
              <button className="submit_btn" onClick={handleSignInSubmit}>
                Submit
              </button>
            </div>
          )}
          {isAuthenticated && (
            <button className="sign_out_btn" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          {isAuthenticated ? "Signed In Successfully!" : "Signed Out Successfully!"}
        </div>
      )}
      <Alert />
      {isAuthenticated && (
        <>
          <TodoForm />
          <Tabs />
          <TodoList />
        </>
      )}
    </div>
  );
}

export default App;
