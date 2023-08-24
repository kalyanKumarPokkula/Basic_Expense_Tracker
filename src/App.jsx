import React from "react";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import SignIn from "./components/SignPages/SignIn";
import SignUp from "./components/SignPages/SignUp";
import LandingPage from "./components/LandingPage/LandingPage";
import ExpensesLayout from "./components/ExpenseLayout/ExpensesLayout";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseUpdate from "./components/Update/ExpenseUpdate";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [user, setUser] = useState(null);
  // const navigator = useNavigate();

  useEffect(() => {
    async function getUser() {
      try {
        let response = await axios.get("http://127.0.0.1:3001/api/v1/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data.data);
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    }

    getUser();
  }, []);

  return (
    <div>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/" element={<LandingPage user={user} />} />
          <Route path="/expenses" element={<ExpensesLayout />} />
          <Route path="/expense" element={<NewExpense />} />
          <Route path="/expense/:id" element={<ExpenseUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
