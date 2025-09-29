import { NextResponse } from "next/server";

export const blogs = [];

export const GET = async () => {
  return Response.json({ message: "Hello, Blogs!" });
};

export const POST = async (request: Request) => {
  const blog = await request.json();
  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  };
  blog.push(newBlog);

  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
