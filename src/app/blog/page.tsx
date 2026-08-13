import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../../../content/blog";
import { site } from "../../../content/site";
import { sanityClient } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog",
  description: `Tattoo advice, preparation tips, and design insights from Melbourne tattoo artist ${site.name}. Guides for clients booking custom tattoos in Melbourne.`,
  keywords: [
    "Melbourne tattoo blog",
    "tattoo advice Melbourne",
    "how to prepare for a tattoo",
    "tattoo placement guide",
    "fine line vs blackwork",
    "Tobias Meredith blog",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${site.name} Melbourne Tattoo Artist`,
    description: `Tattoo advice and design insights from ${site.name} in Melbourne.`,
    url: "/blog",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${site.name} Melbourne Tattoo Artist`,
    description: `Tattoo advice and design insights from ${site.name} in Melbourne.`,
    images: ["/opengraph-image"],
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
    <div className="page">
      <div className="page-intro">
        <h1>Blog</h1>
        <p>
          Tattoo advice from {site.name} in Melbourne — preparation tips,
          placement notes, and style guidance for clients booking custom work.
        </p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card">
            <p className="blog-card__eyebrow">
              <span>{post.category}</span>
              <span>{post.readTime}</span>
            </p>
            <h2 className="blog-card__title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <div className="blog-card__footer">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <Link href={`/blog/${post.slug}`}>Read article</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
