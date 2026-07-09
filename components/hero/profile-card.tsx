"use client";

import Image from "next/image";
import {
//   Github,
//   Linkedin,
//   Twitter,
  Mail,
  Globe,
  MapPin,
  Phone,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ContributionGrid from "./contribution-grid";
import SocialLinks from "./social";
import Link from "next/link";


export default function ProfileCard() {
  return (
    <Card className="rounded-3xl border-zinc-800 bg-zinc-950/60 backdrop-blur-xl p-8">

      <div className="flex gap-5 items-center">

        <Image
          src="/asifraza.jpg"
          alt=""
          width={110}
          height={110}
          className="rounded-full border border-zinc-700"
        />

        <div>

          <h2 className="text-3xl font-semibold">
            MD Asif Raza
          </h2>

          <p className="text-zinc-400 mt-2">
            Senior Full Stack Developer
          </p>

        </div>

      </div>

      <Separator className="my-6 bg-zinc-800" />

      <div className="grid grid-cols-2 gap-5 text-sm">

        <div className="flex gap-2">
          <MapPin size={16} />
          Delhi, India
        </div>

        <div className="flex gap-2">
          <Mail size={16} />
          asifrazassd@gmail.com
        </div>

        <div className="flex gap-2">
          <Phone size={16} />
          +91 788169248
        </div>

        <div className="flex gap-2">
          <Globe size={16} />
          asifraza.live
        </div>

      </div>

      <Separator className="my-6 bg-zinc-800" />

      <div className="flex gap-3">
        {/* <SocialLinks /> */}
        {/* Social Links Bar */}
      <div className="sticky bottom-0 left-0 right-0 z-40 border-t border-border bg-background/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* <p className="text-sm text-foreground/60">Get in touch</p> */}
          <div className="flex items-center gap-6">
           <Link
              href="https://x.com/_mdasifraza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">Twitter</span>
            </Link>

            <Link
              href="https://github.com/asifrtu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mdasifraza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>

            <Link
              href="https://medium.com/@asifrazartu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">Medium</span>
            </Link>
          </div>
        </div>
      </div>
        {/* {[Github, Linkedin, Twitter].map((Icon, index) => (
          <button
            key={index}
            className="rounded-xl border border-zinc-800 p-3 hover:bg-zinc-900 transition"
          >
            <Icon size={18} />
          </button>
        ))} */}

      </div>

      <Separator className="my-6 bg-zinc-800" />

      <ContributionGrid />

    </Card>
  );
}