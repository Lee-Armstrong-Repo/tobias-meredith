import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "../../../content/blog";
import { blogPlaceholder } from "../../../content/placeholders";
import { site } from "../../../content/site";
import { sanityClient } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import {
  absoluteUrl,
  buildPageGraph,
  itemListNode,
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
  coverImageUrl?: string;
};

async function getBlogPosts() {
  if (sanityClient) {
    const cmsPosts = await sanityClient.fetch<SanityBlogPost[]>(blogPostsQuery);

    if (cmsPosts.length > 0) {
      return cmsPosts.map((post, index) => {
        const fallback = blogPosts[index % blogPosts.length];

        return {
          id: post._id,
          title: post.title,
          slug: post.slug.current,
          excerpt: post.excerpt,
          publishedAt: post.publishedAt,
          category: post.category,
          readTime: post.readTime,
          image: post.coverImageUrl || fallback?.image || blogPlaceholder(index),
          imageAlt: fallback?.imageAlt || post.title,
          isPlaceholder: !post.coverImageUrl,
        };
      });
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
    image: post.image,
    imageAlt: post.imageAlt,
    isPlaceholder: post.image.endsWith(".svg"),
  }));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <JsonLd
        data={buildPageGraph(
          "/blog",
          {
            name: pageTitle,
            description: pageDescription,
            type: "Blog",
          },
          [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ],
          [
            itemListNode(
              `${absoluteUrl("/blog")}#posts`,
              pageTitle,
              posts.map((post) => ({
                url: absoluteUrl(`/blog/${post.slug}`),
                name: post.title,
              })),
            ),
          ],
        )}
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
              <Link href={`/blog/${post.slug}`} className="blog-card__link">
                <figure className="blog-card__media">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    unoptimized={post.isPlaceholder}
                  />
                </figure>
                <div className="blog-card__body">
                  <p className="blog-card__meta">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </p>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <p className="blog-card__meta">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    <span>Read article</span>
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
