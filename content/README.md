# Content & images

## Add portfolio photos

1. Put image files in `public/work/` (jpg or webp recommended).
2. Open `content/work.ts` and add a new object to `workItems`:

```ts
{
  id: "07",
  title: "Short title",
  src: "/work/your-file.jpg",
  alt: "Describe the tattoo for accessibility and SEO",
  category: "Fine line",
  width: 1200,
  height: 1500,
}
```

3. Restart or refresh the site — the Work page updates automatically.

## Edit copy

Site-wide name, SEO description, email, and Instagram live in `content/site.ts`.
