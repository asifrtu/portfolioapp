"use client";

import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ArticleSidebar() {
  return (
    <div className="sticky top-28 flex flex-col gap-4">
      <Button size="icon" variant="outline">
        <Heart />
      </Button>

      <Button size="icon" variant="outline">
        <MessageCircle />
      </Button>

      <Button size="icon" variant="outline">
        <Bookmark />
      </Button>

      <Button size="icon" variant="outline">
        <Share2 />
      </Button>
    </div>
  );
}