import { ImageResponse } from "next/og";
import { site } from "../../../content/site";

export const alt = site.name;
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
          background: "#080808",
          color: "#f0ece4",
          fontFamily: "Helvetica, Arial, sans-serif",
          textAlign: "center",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: "0.08em",
            opacity: 0.85,
          }}
        >
          {site.headline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.65,
            marginTop: 18,
          }}
        >
          South Yarra · Melbourne
        </div>
      </div>
    ),
    { ...size },
  );
}
