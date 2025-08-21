import { getPost } from "@/lib/serverMethods/blog/postMethods";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default async function page({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <main className="u-main-container u-padding-content-container">
      <h1 className="text-4xl mb-3">{post.title}</h1>
      <p>{post.markdownArticle}</p>
    </main>
  );
}
