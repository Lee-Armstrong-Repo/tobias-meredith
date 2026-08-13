import { groq } from "next-sanity";

export const workItemsQuery = groq`
  *[_type == "workItem"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    category,
    alt,
    description,
    image,
    "imageUrl": image.asset->url
  }
`;

export const workItemSlugsQuery = groq`
  *[_type == "workItem" && defined(slug.current)].slug.current
`;

export const workItemBySlugQuery = groq`
  *[_type == "workItem" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    alt,
    description,
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
    coverImage,
    "coverImageUrl": coverImage.asset->url
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
    "coverImageUrl": coverImage.asset->url,
    body
  }
`;
