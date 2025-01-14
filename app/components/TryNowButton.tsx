"use client";

export default function TryNowButton() {
  return (
    <button onClick={() => (window.location.href = "/auth")}>Try Now</button>
  );
}
