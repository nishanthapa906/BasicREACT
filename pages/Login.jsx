import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  // Step 2: create state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 3: handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2>Sign in with E-mail</h2>

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Get Started
        </button>
        <NavLink to = '/register'  style={styles.button1}> Register</NavLink>

         
      </form>
    </div>
  );
}

export default Login;

//styles
const styles = {
  container: {
    height: "90vh",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    background: "#eaf6ff",
    padding: "200px",
    marginLeft: "0px",
   
   
    
  },
  card: {
    background: "#87aee0ff",
    padding: "50px",
    borderRadius: "30px",
    width: "100%",
    maxWidth: "470px",
    // height:"360px",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(10, 194, 199, 100)",
    fontsize: "16px",

  },
  input: {
    marginTop:"30px",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    fontWeight: "bold",
    fontsize:"16px",
    borderRadius:"20px",
  },
  button: {
    marginTop:"20px",
    width: "100%",
    padding: "10px",
    background: "#1a66a5ff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginBottom: "15px",
    fontWeight:"bold",
    fontsize: "16px",
    borderRadius:"20px",
  },


button1: {
  
  margin: "auto ",
  width:"100px",
  padding: "10px",
  background: "#35c228ff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontWeight:"bold",
  display:"block",
  border:"2px solid white",
  borderRadius:"20px"
},

};
