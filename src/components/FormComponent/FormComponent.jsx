import { useForm } from "react-hook-form";
import '../../App.css';

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmed_password: ""
    }
  });

  const onSubmit = (data) => {
    if (data.password !== data.confirmed_password) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", data);
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Username */}
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          {...register("username", { required: "Username is required" })}
          id="username"
          placeholder="Enter your username"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 placeholder-gray-400"
        />
        {errors.username && (
          <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          {...register("email", { 
            required: "Enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 placeholder-gray-400"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          {...register("password", { 
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 placeholder-gray-400"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmed_password" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          {...register("confirmed_password", { 
            required: "Please confirm your password",
            validate: value => value === password || "Passwords do not match"
          })}
          id="confirmed_password"
          type="password"
          placeholder="Type your password again"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 placeholder-gray-400"
        />
        {errors.confirmed_password && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmed_password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 hover:shadow-lg active:scale-[0.98]"
        >
          Create Account
        </button>
      </div>

      {/* Sign In Link */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{' '}
        <a href="#" className="text-amber-600 hover:underline font-medium">Sign in</a>
      </p>
    </form>
  );
}