import { NextResponse } from "next/server";
import { blogs } from "../route";

type Blog = {
    id: number;
    [key: string]: any;
};

export const GET = async (request: Request, 
    {params}: {params:Promise< {blogId: string}>}) => {


        const {blogId} = await params;

        const blog = (blogs as Blog[]).find(blog => blog.id === parseInt(blogId));


  return NextResponse.json(blog);
};