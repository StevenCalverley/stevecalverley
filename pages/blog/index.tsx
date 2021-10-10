import Head from 'next/head';
import Link from 'next/link';
import { graphcmsClient } from '../../lib/client';
import { getBlogPosts } from '../../lib/queries';
import Layout from '../../layout/layout';

interface IPost {
  id: string;
  slug: string;
  title: string;
  updateAt: string;
  publishedAt: string;
  excerpt: string;
  date: string;
  content: {
    html: string;
    markdown: string;
  };
}
interface IGraphQLResponse {
  posts: IPost[];
}

export default function Blog({ posts }: { posts: IPost[] }) {
  return (
    <Layout home>
      <Head>
        <title>Blog | Steven Calverley</title>
      </Head>

      <main className="">
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const client = graphcmsClient(preview);

  const { posts } = await client.request<IGraphQLResponse>(getBlogPosts);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      preview,
    },
    revalidate: 60,
  };
}
