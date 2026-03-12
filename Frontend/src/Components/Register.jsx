import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router'
import { useState } from 'react'

function Register() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

  const onSubmit = async(newUser) => {
    setLoading(true)
    // console.log(newUser)
        try {
        // Remove role from body because backend sets the canonical role per endpoint.
        let { role, ...userObj } = newUser
            
            if(role === "AUTHOR"){
                let resObj = await axios.post("http://localhost:4000/author-api/users", userObj)
                if(resObj.status==201){
                        navigate("/login")
                }
            }
            if(role === "USER"){
                let resObj = await axios.post("http://localhost:4000/user-api/users", userObj)
                if(resObj.status==201){
                        navigate("/login")
                }
            }
            // console.log(userObj)
        } catch (error) {
        setError(error?.response?.data?.error || error?.message || "Registration failed")
        }finally{
            setLoading(false)
        }

        // loading
        if(loading){
            return <p className='text-red-500'> Loading...</p>
        }

        // error
        // if(error){
        //     return <p className='text-red-500 text-4xl'>Error</p>
        // }
    }
  return (
    <div>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-2xl text-center font-bold'>Register to Our App</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='p-10 rounded-lg max-w-lg shadow-lg'>
          {/* error message */}
          {error && <p className='text-red-500 text-lg'>{error}</p>}
          
          {/* role */}
          <div className='flex gap-6 justify-items-end items-center '>
            <h2 className='text-xl'>Select Your Role: </h2>
            <label>
              <input type="radio" value="USER" {...register("role", { required: "Role is required" })} />
              <span className="ml-2">User</span>
            </label>
            <label>
              <input type="radio" value="AUTHOR" {...register("role", { required: "Role is required" })} />
              <span className="ml-2">Author</span>
            </label>
          </div>
          {
            errors.role && (<p className='text-red-500 text-sm'>{errors.role.message}</p>)
          }
          <div className='flex justify-even mt-5 gap-4'>
            <div className='w-1/2'>
              {/* first name */}
              <input type="text" placeholder='enter your first name'
                {...register("firstName", { required: "First Name is required" })}
                className='border rounded p-2 w-full'
              />
              {
                errors.firstName && (<p className='text-red-500 text-sm'>{errors.firstName.message}</p>)
              }
            </div>
            <div className='w-1/2'>
              {/* first name */}
              <input type="text" placeholder='enter your last name'
                {...register("lastName", { required: "Last Name is required" })}
                className='border rounded p-2 w-full'
              />
              {
                errors.lastName && (<p className='text-red-500 text-sm'>{errors.lastName.message}</p>)
              }
            </div>
          </div>
          {/* email */}
          <input type="email" placeholder='enter your email'
            {...register("email", { required: "email is required(so that we can spam you! jk)" })}
            className='border rounded w-full mt-5 p-2'
          />
          {
            errors.email && (<p className='text-red-500'>{errors.email.message}</p>)
          }
          {/* password */}
          <input type="password" placeholder='enter your password'
            {...register("password", { required: "password is required", minLength: { value: 6, message: "Minimum 6 characters" } })}
            className='border rounded w-full mt-5 p-2'
          />
          {
            errors.password && (<p className='text-red-500'>{errors.password.message}</p>)
          }
          {/* Backend schema expects profileImageUrl as a string URL, not a file object. */}
          <input type="text" placeholder='paste your profile image URL (optional)'
            className='border rounded w-full mt-5 p-2'
            {...register("profileImageUrl")}
          />
          {
            errors.profileImageUrl && (<p className='text-red-500'>{errors.profileImageUrl.message}</p>)
          }
          {/* submit button */}
          <div className='flex justify-center'>
            <button disabled={loading} className='bg-blue-400 text-white rounded mt-5 px-7 py-2 disabled:opacity-60'>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register