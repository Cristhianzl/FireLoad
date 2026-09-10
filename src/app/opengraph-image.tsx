import { ImageResponse } from "next/og";
import { home, site } from "@/locales/pt-BR";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#14171d",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "20px",
            background: "#1b1f27",
            border: "2px solid #2a2f3a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2dd4bf",
            fontSize: "40px",
          }}
        >
          ▲
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "40px",
            fontWeight: 700,
            color: "#e7e9ee",
          }}
        >
          Extin<span style={{ color: "#2dd4bf" }}>Fire</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#f5f7fa",
            lineHeight: 1.1,
          }}
        >
          {home.h1}
        </div>
        <div style={{ fontSize: "30px", color: "#aeb6c2", maxWidth: "900px" }}>
          {site.domainAction}
        </div>
      </div>

      <div style={{ fontSize: "24px", color: "#8a93a3" }}>
        IT 14/2025 · IT 21/2025 · ABNT NBR 12693:2021 · NBR 14432
      </div>
    </div>,
    size,
  );
}
