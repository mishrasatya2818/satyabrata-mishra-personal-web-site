import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f5f2ec",
          color: "#17150f",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#6f6a5f", letterSpacing: 3 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#c2410c" }} />
          SENIOR PRODUCT MANAGER · ORACLE · BENGALURU
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#c2410c", fontStyle: "italic" }}>
            Data &amp; AI Platforms · Partner Ecosystems
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#3b372e" }}>
          11+ years in enterprise cloud · Gen AI &amp; Agentic AI on Oracle AI Database 26ai
        </div>
      </div>
    ),
    size,
  );
}
