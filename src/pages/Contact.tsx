import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Navbar />
      <main className="mt-12 py-16">
        <div className="container-80">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h1>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
            <input
              {...register("name")}
              placeholder="Name"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full border px-4 py-2 rounded h-32"
              required
            />
            <button type="submit" className="px-6 py-3 bg-accent text-primary rounded font-semibold w-full">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
