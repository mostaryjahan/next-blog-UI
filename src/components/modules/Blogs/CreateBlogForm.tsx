"use client";
import { create } from "@/actions/create";
import Form from "next/form";
import { useState } from "react";

const CreateBlogForm = () => {
    const [isFeatured, setIsFeatured] = useState(false);

  return (
    <Form action={create} className="max-4xl mx-auto bg-gray-100 shadow-2xl rounded-2xl space-y-3 w-full">
      <h1>Create Blog</h1>

      {/* title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full rounded-md border px-3 py-2 "
        />
      </div>

      {/* content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={3}
          className="w-full rounded-md border px-3 py-2 "
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Tags(comma separated)
        </label>
        <input
          id="tags"
          name="tags"
          type="text"
          placeholder="next.js, react.js, tailwind.css, ..."
          className="w-full rounded-md border px-3 py-2 "
        />
      </div>

      {/* features */}
      <div>
        <p>Featured</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
          
         
          <input
            name="isFeatured"
            type="radio"
            value="true"
            checked={isFeatured === true}
            onChange={() => setIsFeatured(true)} 
            className="text-blue-600"
          />
             
          <input
            name="isFeatured"
            type="radio"
            value="false"
            checked={isFeatured === false}
            onChange={() => setIsFeatured(false)} 
            className="text-blue-600"
          />
           </label>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white font-medium rounded hover:bg-blue-700">Submit</button>
    </Form>
  );
};

export default CreateBlogForm;
