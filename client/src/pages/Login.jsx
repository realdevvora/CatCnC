import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex items-center justify-center">
            <div className="mt-40 p-6 rounded-lg shadow-lg w-80">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Login</h1>
                <form className="flex flex-col space-y-4">
                    <input type="email" placeholder="Your Email" className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <input type="password" placeholder="Password" className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-400 transition duration-300">Meow!</button>
                </form>
                <div className="text-center py-2">Don't have an account yet? <Link className="hover:text-emerald-500" to={"/register"}>Register Now!</Link></div>
            </div>
        </div>
    );
}
