import { ImageResponse } from "next/og";

export const alt = "The Moti Group — Ideas, Services and Innovation";
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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          color: "#fff",
          background:
            "radial-gradient(ellipse at 82% 48%, rgba(234,88,12,.28), transparent 36%), radial-gradient(ellipse at 18% 8%, rgba(88,28,135,.4), transparent 44%), linear-gradient(120deg,#080610 0%,#160923 55%,#090510 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "760px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "78px",
              height: "78px",
              borderRadius: "18px",
              background: "#ea580c",
              color: "#fff",
              fontSize: "54px",
              fontWeight: 900,
              marginBottom: "38px",
            }}
          >
            M
          </div>
          <div style={{ fontSize: "58px", fontWeight: 900, letterSpacing: "-1.5px" }}>
            THE MOTI GROUP
          </div>
          <div style={{ marginTop: "22px", fontSize: "30px", color: "#fed7aa", lineHeight: 1.35 }}>
            Ideas. Services. Innovation.
          </div>
          <div style={{ marginTop: "24px", fontSize: "21px", color: "#d4d4d8", lineHeight: 1.5 }}>
            Healthcare · Technology · Finance · Deals · Digital Solutions
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Georgia, serif",
            fontWeight: 900,
            fontSize: "430px",
            lineHeight: 1,
            color: "rgba(251,191,36,0.13)",
            marginRight: "-25px",
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
