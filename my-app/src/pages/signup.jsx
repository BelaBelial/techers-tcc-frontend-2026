import "./styles/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signup(){

    const [username, setUsername] = useState("");
    const [senha, setsenha] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://cosmic-bookhoard.vercel.app/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, senha }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                alert(data.message || "User successfully created!");
                navigate("/login"); //redirect para o login dps de criar a conta
            } else {
                alert(data.message || "Error creating account.");
            }
        } catch (error) {
            console.error("Erro no cadastro:", error);
            alert("Could not connect to the server.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="form-container">
                <h1>Create An Account</h1>
                <form action="" className="form" onSubmit={handleSignup}>
                    <div className="data-container">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="fillin" name="username" placeholder="Type in your Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    <div className="data-container">
                        <label htmlFor="senha">Password</label>
                        <input type="password" className="fillin" name="senha" placeholder="Enter your password" value={senha} onChange={(e) => setsenha(e.target.value)} required/>
                    </div>
                    <div className="adendos">
                        <span>Already have an account?</span>
                        <Link to="/login">Log In</Link>
                    </div>
                    <input type="submit" className="sub-but" value={isLoading ? "Creating..." : "Sign Up"} disabled={isLoading}/>
                </form>
            </div>
        </div>
    );
}