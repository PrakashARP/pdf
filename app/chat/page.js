"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
const ChatNav = dynamic(() => import("./chatNav"), {
  ssr: false,
});
function Chat() {
  const router = useRouter();
  const [storedQueries, setStoredQueries] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setStoredQueries([...storedQueries, data.query]);
    reset();
  };
  console.log(storedQueries);
  return (
    <div className="min-h-screen bg-white">
      <ChatNav />

      <div className=" bg-white h-96 p-3 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="float-right w-1/2">
          {storedQueries.map((items) => (
            <div className="shadow-lg bg-zinc-100 text-right p-3 rounded-lg mb-3">
              {items}
            </div>
          ))}
        </div>
        {/* <div className="">
          {storedQueries.map((items) => (
            <div className="shadow-lg bg-sky-300 text-right p-3 rounded-lg mb-3">
              {items}
            </div>
          ))}
        </div> */}
      </div>
      <div className="fixed">
        
      </div>
      <div className="fixed w-full bottom-0 p-2 pb-10">
      <div className="mx-auto mt-16 max-w-2xl sm:mt-4 lg:mt-4 lg:max-w-4xl">
        <form className="flex flex-row" onSubmit={handleSubmit(onSubmit)}>
          <div className="basis-full">
            <input
              name="query"
              {...register("query", { required: true })}
              type="text"
              id="street-address"
              autoComplete="street-address"
              className="h-11 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.query && <span>This field is required</span>}
          </div>
          <div className="basis-1/1 ml-3">
            <button
              type="submit"
              className="h-11 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PaperAirplaneIcon className=" h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Chat;
