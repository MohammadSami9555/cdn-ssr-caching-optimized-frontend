"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type NewsItem = {
  id: number;
  title: string;
  body: string;
};

export default function Page() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setNews(data.slice(0, 5)));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark
          ? "linear-gradient(135deg, #020617, #0f172a)"
          : "linear-gradient(135deg, #eef2f3, #d9e4f5)",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          background: dark ? "#020617" : "#0f172a",
          color: "#fff",
          padding: "14px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong>SSR News</strong>
          <button
            onClick={() => setDark(!dark)}
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main
        style={{
          maxWidth: "1000px",
          margin: "30px auto",
          padding: "20px",
          background: dark ? "#020617" : "#ffffff",
          color: dark ? "#e5e7eb" : "#020617",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
        <Image
          src="/hero.jpeg"
          alt="Hero"
          width={1000}
          height={450}
          priority
          style={{ width: "100%", height: "auto", borderRadius: "14px" }}
        />

        <h1 style={{ margin: "20px 0" }}>📰 SSR News Dashboard</h1>

        {news.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "16px",
              padding: "16px",
              borderRadius: "12px",
              background: dark ? "#020617" : "#f7f9fc",
              border: dark ? "1px solid #1e293b" : "none",
            }}
          >
            <h3>{item.title}</h3>
            <p style={{ opacity: 0.85 }}>{item.body}</p>
          </div>
        ))}

        <h2 style={{ marginTop: "40px" }}>📸 Image Gallery</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <Image src="/img1.jpeg" alt="img1" width={300} height={350} />
          <Image src="/img2.jpeg" alt="img2" width={300} height={350} />
          <Image src="/img3.jpeg" alt="img3" width={300} height={350} />
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "16px", opacity: 0.7 }}>
        © 2026 • CDN + SSR + Caching Optimized
      </footer>
    </div>
  );
}
