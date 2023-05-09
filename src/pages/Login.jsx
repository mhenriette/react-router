import { loginUser } from "../api";
import { Heading2 } from "../components/ui/Typography";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
export const loader = ({ request }) => new URL(request.url).searchParams.get("message")
export const action = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("logged", true)
    } catch (err) {
        return err.message
    }
    return redirect("/host")
}
const Login = () => {
    const message = useLoaderData()
    const errorMessage = useActionData()
    // const [formData, setFormData] = useState({ email: "", password: "" })
    // const [submit, setSubmit] = useState("idle")
    // const [error, setError] = useState(null)
    // const getCredential = (e) => {
    //     const { name, value } = e.target
    //     setFormData(prev => ({ ...prev, [name]: value }))
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setSubmit("submitting")
    //     setError(null)
    //     loginUser(formData)
    //         .then(data => console.log(data))
    //         .catch(error => setError(error))
    //         .finally(() => setSubmit("idle"))

    // }
    return <div className="absolute top-0 h-full flex justify-center items-center w-full ">
        <div className="text-center p-5">
            {message && <Heading2 className="my-10 text-red-500">{message}</Heading2>}
            {errorMessage && <Heading2 className="my-10 text-red-500">{errorMessage}</Heading2>}
            <Heading2>Sign in to your account</Heading2>
            <Form method="POST" replace>
                <div className="flex flex-col mt-6 ">
                    <input placeholder="Email address" name="email" type="email" className="text-[#4D4D4D] py-2 pl-2 rounded-md border border-[#8f8d8d] outline-none" />
                    <input placeholder="Password" name="password" type="password" className="text-[#4D4D4D] py-2 pl-2 rounded-md border border-t-0 border-[#8f8d8d] outline-none" />
                </div>
                <button className="text-center rounded-md px-[22px] py-2 w-full font-semibold mt-6 mb-3 bg-[#FF8C38] text-white" >Log in</button>
            </Form>
            <div>Don’t have an account? Create one now</div>
        </div>
    </div>;
};

export default Login;
