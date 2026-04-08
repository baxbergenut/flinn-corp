import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// SEO: Generate a route-specific share image so the privacy page has unique OG and Twitter metadata instead of inheriting the homepage card.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(140deg, #f8fcff 0%, #edf8ff 55%, #e4fbf8 100%)",
          color: "#123047",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#489fd8",
          }}
        >
          Flinn Corp
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
            }}
          >
            Privacy policy
          </div>
          <div
            style={{
              maxWidth: 880,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#35536a",
            }}
          >
            Learn how Flinn Corp handles website inquiries, freight
            communication, and contact information.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#35536a",
          }}
        >
          <span>flinncorp.com/privacy-policy</span>
          <span>Legal Information</span>
        </div>
      </div>
    ),
    size
  );
}
