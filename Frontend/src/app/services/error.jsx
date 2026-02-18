"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
