/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`);

  const { data: blogs } = await res.json();

  return blogs.slice(0, 20).map((blog: any) => ({ blogId: String(blog.id) }));
};

export const generateMetaData = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

 const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${blogId}`);

  const  blog = await res.json();
  return {
    title: blog?.title
  }
};


const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${blogId}`, {
    next: {
      revalidate: 30,
    },
  });

  const blog = await res.json();

  return (
    <div className="py-30 px-4 max-w-6xl mx-auto">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
