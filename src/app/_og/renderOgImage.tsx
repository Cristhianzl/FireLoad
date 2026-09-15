import { ImageResponse } from "next/og";
import { getReference } from "@/lib/norms/references";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Satori renders outside the CSS pipeline, so the dark theme palette is repeated here.
const PALETTE = {
  ground: "#14171d",
  tile: "#1b1f27",
  tileBorder: "#262b35",
  accent: "#2dd4bf",
  heading: "#e7e9ee",
  body: "#aeb6c2",
  muted: "#8a93a3",
};

export function renderOgImage({
  title,
  subtitle,
  refIds,
}: {
  title: string;
  subtitle: string;
  refIds: string[];
}) {
  const footer = refIds.map((id) => getReference(id).code).join(" · ");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: PALETTE.ground,
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
            background: PALETTE.tile,
            border: `2px solid ${PALETTE.tileBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: PALETTE.accent,
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
            color: PALETTE.heading,
          }}
        >
          Fire<span style={{ color: PALETTE.accent }}>Load</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div
          style={{
            fontSize: "60px",
            fontWeight: 700,
            color: PALETTE.heading,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
        <div
          style={{ fontSize: "30px", color: PALETTE.body, maxWidth: "980px" }}
        >
          {subtitle}
        </div>
      </div>

      <div style={{ fontSize: "24px", color: PALETTE.muted }}>{footer}</div>
    </div>,
    OG_SIZE,
  );
}
