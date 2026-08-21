export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="studio-root" style={{ height: "100dvh", margin: 0 }}>
      {children}
    </div>
  );
}
