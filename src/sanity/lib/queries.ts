import { groq } from "next-sanity";

export const workItemsQuery = groq`
  *[_type == "workItem"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    category,
    alt,
    image,
    "imageUrl": image.asset->url
  }
`;

export const blogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    readTime,
    coverImage
  }
`;

export const blogPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

export const blogPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    readTime,
    coverImage,
    body
  }
`;
