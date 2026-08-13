import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "../../../content/blog";
import { site } from "../../../content/site";
import { sanityClient } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import {
  absoluteUrl,
  breadcrumbNode,
  personNode,
  webPageNode,
  websiteNode,
} from "@/lib/schema";

const pageTitle = `Blog | ${site.name}`;
const pageDescription = `Notes on tattoo preparation, placement, and style from ${site.name}.`;

export const metadata: Metadata = {
  title: "Blog",
  description: pageDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export const revalidate = 60;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

type SanityBlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category: string;
  readTime: string;
};

async function getBlogPosts() {
  if (sanityClient) {
    const cmsPosts = await sanityClient.fetch<SanityBlogPost[]>(blogPostsQuery);

    if (cmsPosts.length > 0) {
      return cmsPosts.map((post) => ({
        id: post._id,
        title: post.title,
        slug: post.slug.current,
        excerpt: post.excerpt,
        publishedAt: post.publishedAt,
        category: post.category,
        readTime: post.readTime,
      }));
    }
  }

  return blogPosts.map((post) => ({
    id: post.slug,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    category: post.category,
    readTime: post.readTime,
  }));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <JsonLd
        data={[
          websiteNode(),
          personNode(),
          webPageNode({
            path: "/blog",
            name: pageTitle,
            description: pageDescription,
            type: "Blog",
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          {
            "@type": "ItemList",
            name: pageTitle,
            numberOfItems: posts.length,
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/blog/${post.slug}`),
              name: post.title,
            })),
          },
        ]}
      />

      <div className="page">
        <header className="page-intro">
          <h1>Blog</h1>
          <p>
            Preparation tips, placement notes, and style guidance for clients
            booking custom work.
          </p>
        </header>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <p className="blog-card__meta">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </p>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <p className="blog-card__meta">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <Link href={`/blog/${post.slug}`}>Read article</Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
