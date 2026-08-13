import { ImageResponse } from "next/og";
import { site } from "../../content/site";

export const alt = `${site.name} — Melbourne tattoo artist`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          color: "#fff",
          fontFamily: "Helvetica, Arial, sans-serif",
          letterSpacing: "0.12em",
          textAlign: "center",
          padding: "64px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: "0.08em",
            opacity: 0.85,
            maxWidth: 800,
          }}
        >
          {site.headline}
        </div>
      </div>
    ),
    { ...size },
  );
}
