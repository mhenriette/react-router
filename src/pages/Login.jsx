import React, { useState } from "react";
import { Heading2, Heading1 } from "../components/ui/Typography";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api";
export const loader = ({ request }) => new URL(request.url).searchParams.get("message")
const Login = () => {
    const message = useLoaderData()
    const [formData, setFormData] = useState({ email: "", password: "" })
    const getCredential = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(formData)
            .then(data => console.log(data))

    }
    return <div className="absolute top-0 h-full flex justify-center items-center w-full ">
        <div className="text-center p-5">
            {message && <Heading1 className="my-10 text-red-500">{message}</Heading1>}
            <Heading2>Sign in to your account</Heading2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mt-6 ">
                    <input placeholder="Email address" name="email" value={formData.email} type="email" className="text-[#4D4D4D] py-2 pl-2 rounded-md border border-[#8f8d8d] outline-none" onChange={getCredential} />
                    <input placeholder="Password" value={formData.password} name="password" type="password" className="text-[#4D4D4D] py-2 pl-2 rounded-md border border-t-0 border-[#8f8d8d] outline-none" onChange={getCredential} />
                </div>
                <button className="text-center rounded-md px-[22px] py-2 w-full font-semibold mt-6 mb-3 bg-[#FF8C38] text-white">Sign in</button>
            </form>
            <div>Don’t have an account? Create one now</div>
        </div>
    </div>;
};

export default Login;
