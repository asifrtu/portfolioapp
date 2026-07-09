"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ArticleHeader() {
  return (
    <header className="space-y-8">
      <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
        Building Authentication in Next.js with HttpOnly Cookies
      </h1>

      <p className="text-xl text-muted-foreground leading-8">
        Learn how modern authentication works using secure cookies,
        refresh tokens, middleware, and server components.
      </p>

      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-semibold">Asif Raza</p>

          <p className="text-sm text-muted-foreground">
            Jul 6 · 10 min read
          </p>
        </div>
      </div>

      <Image
        src="/cover.jpg"
        alt="cover"
        width={1200}
        height={700}
        className="rounded-xl border object-cover"
      />
    </header>
  );
}