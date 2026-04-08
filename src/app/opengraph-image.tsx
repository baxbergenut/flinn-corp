import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// SEO: Generate a branded share image for the home page so social cards and search previews stay consistent with the service offering.
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
            "linear-gradient(140deg, #f5fdff 0%, #e5f6fb 50%, #d7f2f1 100%)",
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
          <div
            style={{
              display: "flex",
              height: 18,
              width: 18,
              borderRadius: 999,
              background: "#5dc7c3",
            }}
          />
          Flinn Corp
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
            }}
          >
            Freight transportation
            <span style={{ display: "block", color: "#489fd8" }}>
              built on reliability.
            </span>
          </div>
          <div
            style={{
              maxWidth: 860,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#35536a",
            }}
          >
            Safe deliveries, responsive updates, and professional freight
            support from Flinn Corp.
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
          <span>flinncorp.com</span>
          <span>Freight Transportation</span>
        </div>
      </div>
    ),
    size
  );
}
