"use client";

import { useEffect, useState } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour < 12) {
        setGreeting("Good morning ☀️");
      } else if (hour < 17) {
        setGreeting("Good afternoon 👋");
      } else if (hour < 21) {
        setGreeting("Good evening 🌙");
      } else {
        setGreeting("Good night 🌌");
      }
    };

    updateGreeting();

    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
      {greeting}
    </h1>
  );
}