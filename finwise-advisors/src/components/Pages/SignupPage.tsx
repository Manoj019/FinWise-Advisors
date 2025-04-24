import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  fullname: string;
  email: string;
  password: string;
  confirmpassword: string;
};

type Errors = Partial<FormData>;

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.fullname.trim()) newErrors.fullname = 'Full name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address.';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmpassword)
      newErrors.confirmpassword = 'Passwords do not match.';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.confirmpassword && <p className="text-red-500 text-sm mt-1">{errors.confirmpassword}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
