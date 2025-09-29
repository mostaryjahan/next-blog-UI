export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${blogId}`);

  return await res.json();
};
