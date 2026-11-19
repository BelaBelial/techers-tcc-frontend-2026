import "./styles/login.css";
import { Link } from "react-router-dom";

export function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Ajuste a porta e rota conforme seu backend
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                localStorage.setItem('usuarioLogado', JSON.stringify(data.user));
                alert(data.message);
                navigate('/'); //redirect pra home
            }
            else {
                alert(data.message || 'Invalid credentials.');
            }
        }
        catch (error) {
            console.error('Erro no login:', error);
            alert('Could not connect to the server.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="form-container">
                <h1>Log In To Your Account</h1>
                <form action="" className="form" onSubmit={handleLogin}>
                    <div className="data-container">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            value={username}
                            className="fillin"
                            name="username" 
                            placeholder="Type in your Username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="data-container">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="fillin" 
                            name="password"
                            id="passoword"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="adendos">
                        <span>Don't have an account?</span>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <button type="submit" className="sub-but" value="Log In" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Log In'}
                    </button>
                </form>
            </div>
        </div>
    );
}