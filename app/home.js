"use client"
import React, { useState } from "react";
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';


const Home = () =>{
    const [fileData, setFileData] = useState(null);
    const router = useRouter();

    const features = [
        {
          name: 'PDF Conversations',
          description:
            'Your gateway to dynamic, interactive, and intelligent conversations with any PDF document. Upload your PDFs, and instantly transform them into conversational partners that are just as knowledgeable as the content they`re based on. Engage with your documents like never before, and extract valuable insights with ease.',
          icon: CloudArrowUpIcon,
        },
        {
          name: 'Time Saver',
          description:
            'AskYourPdf harnesses the power of cutting-edge AI technology to help you navigate, understand, and engage with your documents more efficiently than ever. No more skimming through pages or searching endlessly for specific sections.',
          icon: LockClosedIcon,
        },
        {
          name: 'Playful Learning',
          description:
            'Who says interacting with PDFs has to be dull? At AskYourPdf, we believe in making document exploration a fun and engaging experience. Our AI-powered chat system not only provides you with accurate information but also fosters an enjoyable learning environment that keeps you coming back for more.',
          icon: ArrowPathIcon,
        },
      
      ]
    function handleFileUpload(event) {
      const file = event.target.files[0];
      readFileData(file);
      router.push('/chat')
    }
  
    function handleDragOver(event) {
      event.preventDefault();
    }
  
    function handleFileDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      readFileData(file);
    }
  
    function readFileData(file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileData(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" text-xl font-semibold leading-7 text-indigo-600">
            Transforming the way you interact with PDFs
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to achive!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <form>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    {/* <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    /> */}
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileUpload}
                      onDragOver={handleDragOver}
                      onDrop={handleFileDrop}
                    />
                    
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PDF up to 10MB
                </p>
              </div>
            </div>
          </form>
          {/* {fileData && <img src={fileData} alt="Uploaded file" />} */}
          {/* <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button> */}
        </div>

        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="font-semibold leading-7 text-2xl text-gray-900">
                  {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div> */}
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 text-left">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Home;