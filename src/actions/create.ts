"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {

  const blogInfo = Object.fromEntries(data.entries());
  const session = await getUserSession()
  const modifiedData = {
    ...blogInfo,
    authorId: session?.user?.id,
    isFeatured: Boolean(blogInfo.isFeatured),
    tags: blogInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs")
    redirect("/blogs");
  }
  return result;
};
