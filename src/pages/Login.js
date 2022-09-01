import { useState } from "react";
import { logIn } from "../firebase";

function Login() {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const handleSubmit = async e => {
      e.preventDefault();
      const user = await logIn(email, password);
      console.log(user);
    }
  return(
    <div>
      <form onSubmit={ handleSubmit } className="max-w-xl mx-auto grid mx-auto gap-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Eposta
      </label>
      <div className="mt-1">
        <input
          type="email"
          placeholder="you@example.com"
          className="shadow-sm focus:ring-indigo-500"
          value={email} onChange={e => setEmail(e.target.value)}
        />   
      </div>
      <label className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="mt-1">
        <input
          type="password"
          placeholder="******"
          className="shadow-sm focus:ring-indigo-500"
          value={password} onChange={e => setPassword(e.target.value)}
        />   
      </div>
      <button type="submit" className="btn border border-sky-500">Giriş Yap</button>
      </form>
    </div>

  )
}
export default Login