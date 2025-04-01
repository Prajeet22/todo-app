import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todoform/TodoForm";
import Tabs from "./components/tabs/Tabs";
import TodoList from "./components/todolist/TodoList";
import Alert from "./components/alert/Alert";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSignInClick = () => {
    setShowEmailInput(true);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignInSubmit = () => {
    if (email.trim() !== "") {
      setIsSignedIn(true);
      setShowEmailInput(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setEmail("");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="app_title">Todo App</div>
        <div className="auth_section">
          {!isSignedIn && !showEmailInput && (
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
          {isSignedIn && (
            <button className="sign_out_btn" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </div>
      {showPopup && (
        <div className="popup">{isSignedIn ? "Signed In Successfully!" : "Signed Out Successfully!"}</div>
      )}
      <Alert />
      <TodoForm />
      <Tabs />
      <TodoList />
    </div>
  );
}

export default App;
