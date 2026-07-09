

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ArrowRight, Download } from "lucide-react";
import ProfileCard from "./profile-card";
import Greeting from "./greeting";

export default function HeroSection() {
    const handleClick = () => {
  const link = document.createElement("a");
  link.href = "/resume/MD_ASIF_RAZA_Resume.pdf";
  link.download = "MD_ASIF_RAZA_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a20_1px,transparent_1px),linear-gradient(to_bottom,#27272a20_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container relative mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <Badge
              variant="outline"
              className="rounded-full px-5 py-2"
            >
              🟢 Available for opportunities
            </Badge>

            <div className="mt-8">
              <Greeting />
            </div>

            <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-400">

              I'm MD Asif Raza — Full Stack Developer with
              6.5+ years of experience building scalable SaaS
              applications using React, Next.js, Node.js,
              TypeScript and PostgreSQL.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button size="lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button onClick={handleClick}
                variant="outline"
                size="lg"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>

            </div>

            <div className="mt-14 border-t border-zinc-800 pt-6 text-sm text-zinc-500">

              React • Next.js • Node.js • TypeScript • PostgreSQL • Docker

            </div>

          </div>

          <ProfileCard />

        </div>

      </div>

    </section>
  );
}