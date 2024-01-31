import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function register(event) {
        event.preventDefault();
        axios.get("http://localhost:4000/test")
    }

    return (
        <div className="flex items-center justify-center">
            <div className="mt-40 p-6 rounded-lg shadow-lg w-80">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4" onSubmit={register}>Register</h1>
                <form className="flex flex-col space-y-4">
                    <input type="name" placeholder="Your Name" className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={name} onChange={(event) => setName(event.target.value)}/>
                    <input type="email" placeholder="your@email.com" className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input type="password" placeholder="Password" className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-400 transition duration-300">Register!</button>
                </form>
                <div className="text-center py-2">Already a member? <Link className="hover:text-emerald-500" to={"/login"}>Login!</Link></div>
            </div>
        </div>
    );
}
