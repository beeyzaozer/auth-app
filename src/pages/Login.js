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
    <div className="h-screen bg-gradient-to-r from-teal-600 to-teal-100 opacity-70 via-orange-100 flex items-center grid justify-items-center font-mono">
      <div className="flex justify-items-between border-2 bg-slate-50 h-[600px] w-full container">
        <div className="invisible md:visible">
          <img src="https://i.pinimg.com/736x/d7/e5/ef/d7e5ef9f09474ce528913ac5ed1a233e.jpg" alt="coderGirl" className="w-full h-[596px] object-cover" />
        </div>
        <div className="flex items-center grid justify-items-center md:w-7/12 w-full">
            <h1 className="text-4xl font-semibold tracking-wide text-teal-800">LOG IN</h1>
            <div className="h-full max-w-xl  w-96">
              <form onSubmit={ handleSubmit } className="space-y-7">
                <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                 </label>
                 <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Password
                </span>
                <input type="password" name="email" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="******" />
                 </label>
                <button type="submit" className="bg-teal-700 px-8 py-3 rounded-full mt-2 text-white ml-32 hover:bg-teal-800">Giriş Yap</button>
              </form> 
            </div>
        </div>
     </div>
    </div>

  )
}
export default Login