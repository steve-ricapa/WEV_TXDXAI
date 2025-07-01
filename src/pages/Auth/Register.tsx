import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/auth';
import fondo from '../../assets/fondo.png';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    return {
      hasUpperCase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(password),
      hasMinLength: password.length > 9
    };
  };

  const passwordValidations = validatePassword(password);
  const allValid = Object.values(passwordValidations).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!allValid) return;

    try {
      await register({
        username,
        email,
        password,
        company: { name: company },
      });
      navigate('/login');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Registro de Administrador</h2>
        {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Empresa</label>
            <input
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Indíqueme su empresa"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Indíqueme su nombre"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Indíqueme su correo"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Contraseña</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Cree una contraseña segura"
              required
            />
            <label className="flex items-center mt-2 text-sm">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              Mostrar contraseña
            </label>

            {attemptedSubmit && (
              <div className="mt-2 text-sm space-y-1">
                <p className={passwordValidations.hasUpperCase ? 'text-green-600' : 'text-red-600'}>
                  - Debe tener al menos una mayúscula
                </p>
                <p className={passwordValidations.hasNumber ? 'text-green-600' : 'text-red-600'}>
                  - Debe tener al menos un número
                </p>
                <p className={passwordValidations.hasSpecialChar ? 'text-green-600' : 'text-red-600'}>
                  - Debe tener un carácter especial
                </p>
                <p className={passwordValidations.hasMinLength ? 'text-green-600' : 'text-red-600'}>
                  - Debe tener más de 9 caracteres
                </p>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;