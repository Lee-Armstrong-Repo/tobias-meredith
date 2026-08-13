import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "sanity";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "../../../../content/blog";
import { hasSanityEnv } from "@/sanity/env";
import { sanityClient } from "@/sanity/lib/client";
import {
  blogPostBySlugQuery,
  blogPostSlugsQuery,
} from "@/sanity/lib/queries";
import { buildPageGraph, blogPostingNode } from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export const revalidate = 60;

type SanityPost = {
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category: string;
  readTime: string;
  body?: PortableTextBlock[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

async function getPost(slug: string) {
  if (sanityClient) {
    const cmsPost = await sanityClient.fetch<SanityPost | null>(
      blogPostBySlugQuery,
      { slug },
    );

    if (cmsPost) {
      return {
        title: cmsPost.title,
        slug: cmsPost.slug.current,
        excerpt: cmsPost.excerpt,
        publishedAt: cmsPost.publishedAt,
        category: cmsPost.category,
        readTime: cmsPost.readTime,
        body: cmsPost.body,
      };
    }
  }

  const fallbackPost = blogPosts.find((post) => post.slug === slug);

  if (!fallbackPost) {
    return null;
  }

  return {
    title: fallbackPost.title,
    slug: fallbackPost.slug,
    excerpt: fallbackPost.excerpt,
    publishedAt: fallbackPost.publishedAt,
    category: fallbackPost.category,
    readTime: fallbackPost.readTime,
    paragraphs: fallbackPost.body,
  };
}

export async function generateStaticParams() {
  if (hasSanityEnv && sanityClient) {
    const slugs = await sanityClient.fetch<string[]>(blogPostSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  }

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage(props: { params: Params }) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { id: articleId, node: articleNode } = blogPostingNode(post);

  return (
    <article className="page article">
      <JsonLd
        data={buildPageGraph(
          `/blog/${post.slug}`,
          {
            name: post.title,
            description: post.excerpt,
            mainEntityId: articleId,
          },
          [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ],
          [articleNode],
        )}
      />

      <header className="page-intro article__intro">
        <p className="blog-card__eyebrow">
          <span>{post.category}</span>
          <span>{post.readTime}</span>
        </p>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <p className="article__date">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </p>
      </header>

      {"paragraphs" in post ? (
        <div className="article__body">
          {(post.paragraphs ?? []).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : (
        <div className="article__body">
          <PortableText value={(post.body ?? []) as PortableTextBlock[]} />
        </div>
      )}
    </article>
  );
}
