'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../auth.css';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
//Funcion cada vez que cambia algun valor, se llama 
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar el mensaje de error cuando el usuario escribe
    if (error) setError('');
  };

  //Funcion que recibe todos los datos del input y hace un fetch
  //Manda los datos a la API
  //Solo se ejcuta cuando le doy al boton violeta "Iniciar sesion"
  const handleSubmit = async (e) => {
    // Evita la recarga de la página
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://tp2-backend-htarb0a8gqazcmfh.eastus2-01.azurewebsites.net/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      //Muestro el token en localStorage o manejar la sesión
      console.log(data.token);
      if (data.token) {
        //Guardo el token con el nombre "token"
        // Esta linea lo almacena en el navegador, hasta la expiración o cierre de sesión
        localStorage.setItem('token', data.token);
        // Redirigir al dashboard o página principal
        router.push('/');
      }

    } catch (err) {
      setError(err.message || 'Error al conectar con el servidor');
      //Se ejecuta siempre, si hay error o no
    } finally {
      setIsLoading(false);
    }
  };
    
    return (
    <div className="auth-container">
      <div className="auth-card">
        <div>
          <h2 className="auth-title">
            Iniciar sesión
          </h2>
        </div>
        {/*Solo se muestra si error es != a null o undifined*/}
        {error && (
          <div className="error-alert" role="alert">
            <span>{error}</span>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field top"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input-field bottom"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </div>
        </form>
      </div>
    </div>
    );
}