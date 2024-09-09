import { Form, redirect } from "react-router-dom";
import heroimg from "../assets/hero_img.svg";
import { properties } from "../database/db";

export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  localStorage.setItem("username", formData.get("userName") as string);
  localStorage.setItem("properties", JSON.stringify(properties));
  localStorage.setItem("cart", "[]");
  return redirect("/");
};

const Login = () => {
  return (
    <div className="p-4 py-16">
      <div className="py-4 flex flex-col gap-8">
        <h1 className="font-bold text-5xl">Find your perfect getaway.</h1>
        <p className="text-lg">
          Discover the perfect stay for your next adventure, whether it's a cozy
          retreat or a luxury escape. Book with ease and find a place that feels
          just like home, no matter where you go.
        </p>
        <Form method="post" className="flex flex-col gap-4">
          <input
            className="border-2 border-gray-800 rounded px-4 py-2 w-[70%]"
            type="text"
            name="userName"
            aria-label="Your Name"
            placeholder="What is your name?"
            autoComplete="given-name"
            required
          />
          <button
            type="submit"
            className="border-2 border-gray-800 rounded px-4 py-2 w-[40%] bg-black text-white"
          >
            Create Account
          </button>
        </Form>
      </div>
      <img src={heroimg} alt="Hero image" className="w-[100%]" />
    </div>
  );
};

export default Login;
