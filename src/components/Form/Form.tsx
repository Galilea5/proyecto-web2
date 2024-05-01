import React, { useState } from "react";

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([
        { email: 'a22110067@ceti.mx', password: '22110067' },
        { email: 'a22110055@ceti.mx', password: '22110055' },
        // Puedes agregar más usuarios aquí
    ]);

    const handleInputChange = (setState) => {
        return (event) => {
            setState(event.target.value);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            setIsLoggedIn(true);
        } else {
            alert("Correo electrónico o contraseña incorrectos");
        }
    }

    const handleRegister = () => {
        const newUser = { email, password };
        setUsers([...users, newUser]);
        alert("Usuario registrado correctamente");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="container">
            <h1>¡<span style={{ color: '#007bff' }}>MyPlayList</span>!</h1>
            <p>Ingresa a la nueva MyPlayList</p>
            <hr />
            {!isLoggedIn && (
                <form onSubmit={handleLogin} className="form">
                    <input
                        className="form-input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        required
                    />
                    <input
                        className="form-input"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleInputChange(setPassword)}
                        required
                    />
                    <button className="btn" type="submit">Iniciar Sesión</button>
                    <button className="btn" onClick={handleRegister}>Registrarse</button>
                </form>
            )}
        </div>
    );
}

export default Form;