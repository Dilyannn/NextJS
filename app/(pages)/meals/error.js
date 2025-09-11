"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Loading meals failed</h1>
      <p>{error.message}</p>
    </main>
  );
}
