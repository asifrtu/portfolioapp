"use client";

import Link from "next/link";
import { Clock3, Heart, MessageCircle, Bookmark } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PostCardProps {
  title: string;
  excerpt: string;
  author: string;
  avatar?: string;
  publishedAt: string;
  readTime: string;
  likes: number;
  comments: number;
  tags: string[];
}

export default function PostCard({
  title,
  excerpt,
  author,
  avatar,
  publishedAt,
  readTime,
  likes,
  comments,
  tags,
}: PostCardProps) {
  return (
    <Card className="group border-b border-border rounded-none border-x-0 border-t-0 bg-background shadow-none px-0 py-8 transition-all">
      <div className="space-y-5">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} />
            <AvatarFallback>
              {author
                .split(" ")
                .map((x) => x[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="text-sm">
            <p className="font-medium">{author}</p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{publishedAt}</span>

              <span>•</span>

              <Clock3 className="h-3.5 w-3.5" />

              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <Link href="#">
          <h2 className="text-3xl font-bold leading-tight transition-colors group-hover:text-primary">
            {title}
          </h2>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground leading-7 text-lg">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full px-3"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-6 text-muted-foreground">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 px-0 hover:bg-transparent"
            >
              <Heart className="h-4 w-4" />
              {likes}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="gap-2 px-0 hover:bg-transparent"
            >
              <MessageCircle className="h-4 w-4" />
              {comments}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}