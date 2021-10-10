import Head from 'next/head';
import { graphcmsClient } from '../../lib/client';
import { getBlogPostBySlug, getStaticBlogPosts } from '../../lib/queries';
import { parsePostData } from '../../utils/parseBlogPost';
import { MDXRemote } from 'next-mdx-remote';
import { IPostParsed } from '../../utils/parseBlogPost';
import Layout from '../../layout/layout';
import { GetStaticPropsContext } from 'next';

export interface IPostRaw {
  id: string;
  slug: string;
  title: string;
  updateAt: string;
  publishedAt: string;
  excerpt: string;
  date: string;
  markdown: string;
  content: {
    html: string;
    markdown: string;
  };
}
interface IGraphQLResponse {
  post: IPostRaw;
}

export default function BlogPost({ post }: { post: IPostParsed }) {
  return (
    <Layout home>
      <Head>
        <title>Blog | Steven Calverley</title>
      </Head>

      <main className="">
        <h1 className="text-2xl text-gray-900 font-extrabold">{post.title}</h1>
        <section className="mt-4 grid grid-cols-2 gap-4">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></div>

          {post.markdown && post.markdown.mdx && (
            <div className="prose">
              <MDXRemote {...post.markdown.mdx} />
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext<{ slug: string }>) {
  const client = graphcmsClient(preview);

  const { post } = await client.request<IGraphQLResponse>(getBlogPostBySlug, {
    slug: params && params.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  const parsedBlogData = await parsePostData(post);
  return {
    props: {
      post: parsedBlogData,
      preview,
    },
    revalidate: 60,
  };
}

interface IPaths {
  params: {
    slug: string;
  };
}

export async function getStaticPaths() {
  let paths: IPaths[] = [];

  const client = graphcmsClient();

  const { posts } = await client.request<{ posts: { slug: string }[] }>(
    getStaticBlogPosts
  );

  paths = [...posts.map((post) => ({ params: { slug: post.slug } }))];

  return {
    paths,
    fallback: true,
  };
}
