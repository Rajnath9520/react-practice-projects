import { useState } from "react";

export default function Registration(){
    const[form,setForm] = useState({
        name:"",
        email:"",
        password:""
    });
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = ((e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
        setErrorMessage("");
    });

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(form.name.trim()===""|| form.email.trim()===""||form.password.trim()===""){
            setErrorMessage("Fill all fields");
            return;

        }

        setErrorMessage("");
        setUsers([...users, form]);

        setForm({

            name:"",
            email:"",
            password:""
        })
    }
  const isFormEmpty = form.name.trim()===""|| form.email.trim()===""||form.password.trim()==="";
  

    return (
      <>
        <form
          onSubmit={handleSubmit}
          className="bg-white flex flex-col gap-2 p-4"
        >
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <label>
            Enter your Name:
            <input
              type="text"
              className="border outline-blue-400 rounded-xl w-full p-2"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </label>

          <label>
            Enter your email:
            <input
              type="email"
              className="border outline-blue-400 rounded-xl w-full p-2"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </label>

          <label>
            Enter your Password:
            <input
              type="password"
              className="border outline-blue-400 rounded-xl w-full p-2"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </label>

          <button

            type="submit"
            className={`border rounded-xl px-4 py-2  
              ${isFormEmpty ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"} `}
          >
            Submit
          </button>
        </form>

        <div className="mt-4">
          {users.map((u, index) => (
            <p key={index}>
              {u.name} - {u.email}
            </p>
          ))}
        </div>
      </>
    );
}