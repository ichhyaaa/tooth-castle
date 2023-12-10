import {TextInput} from "../Components/TextInput";
import {Button} from "../Components/Button";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


export const Login =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email)
    console.log(password)

    const navigate = useNavigate();

    const onLogin = () => {
        console.log("email", email);
    };

    return(
        <div style={styles.container}>
            <div style={styles.loginFormContainer}>
                <div style={styles.loginForm}>
                    <h1 style={{textAlign: "center"}}>LOGIN</h1>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <TextInput
                            type="text"
                            placeholder="Email"
                            value={email}
                            onTextChange={(text) => setEmail(text)}
                        />
                        <TextInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onTextChange={(text) => setPassword(text)}
                        />
                        <Button style={styles.button} onclick={onLogin} label={"LOGIN"} />
                        <div style={{marginTop: 20}}>
                            <div style={{textAlign: "center", marginTop: 10}}>
                                Don't have an accont?
                            </div>
                            <div style={{
                                textAlign: "center",
                                marginTop: 10,
                                textDecoration: "underline",
                                textDecorationColor: "#1567eb",
                                color: "#1567eb",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/signup")}
                            >
                            SIGNUP
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
               
        </div>
        
    );
};


const styles = {
    container: {
      display: "flex",
      flex: 1,
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
    loginFormContainer: {
      display: "flex",
      flex: 1,
      padding: "40px",
      height: "100%",
      backgroundColor: "rgba(24, 92, 205, 0.31)",
      alignItems: "center",
      justifyContent: "center",
    },
    loginForm: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#ffffff",
      width: "60%",
      padding: 20,
      borderRadius: 10,
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    input: {
      marginBottom: "10px",
      padding: "10px",
      fontSize: "16px",
      borderRadius: 5,
    },
    button: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#6315eb",
      color: "white",
      border: "none",
      borderRadius: "4px",
    },
    imageContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "80%",
      height: "60%",
    },
  };
  