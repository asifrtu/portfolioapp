"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  User,
  Globe,
  Layers3,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const frontend = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux Toolkit",
  "React Hook Form",
  "Zod",
];

const backend = [
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "REST APIs",
  "Prisma ORM",
];

const database = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
];

const tools = [
  "Git",
  "UserIcon",
  "Docker",
  "Vercel",
  "Postman",
  "Figma",
  "Linux",
];

const services = [
  {
    icon: Globe,
    title: "Full-Stack Development",
  },
  {
    icon: Code2,
    title: "React & Next.js",
  },
  {
    icon: Server,
    title: "Node.js APIs",
  },
  {
    icon: Database,
    title: "Database Design",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
  },
];

export default function About() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="space-y-5 text-center">
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1 text-sm"
          >
            👋 Welcome
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              ASIF RAZA
            </span>
          </h1>

          <h2 className="text-2xl font-semibold text-muted-foreground">
            Senior Full Stack Developer
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            Building scalable, high-performance web applications with modern
            technologies and exceptional user experiences.
          </p>
{/* 
          <div className="flex flex-wrap justify-center gap-4 pt-3">
            <Button size="lg">
              Hire Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              <Link href="#">
                <User className="mr-2 h-4 w-4" />
                User
              </Link>
            </Button>
          </div> */}
        </div>

        <Separator className="my-16" />

        {/* About */}

        <Card className="border-0 shadow-lg">
          <CardContent className="space-y-6 p-8">

            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">
                About Me
              </h3>
            </div>

            <p className="leading-8 text-muted-foreground">
              With over <strong>7 years of experience</strong>, I specialize in
              developing scalable frontend and backend applications using
              <strong>
                {" "}
                React, Next.js, Node.js, Express.js, TypeScript,
                PostgreSQL, MySQL, and MongoDB.
              </strong>{" "}
              I enjoy transforming complex business requirements into elegant,
              secure, and maintainable software.
            </p>

            <p className="leading-8 text-muted-foreground">
              Whether it's building responsive user interfaces, architecting
              scalable APIs, optimizing performance, or designing clean system
              architecture, my goal is always to create software that is fast,
              accessible, secure, and built to last.
            </p>

          </CardContent>
        </Card>

        <Separator className="my-16" />

        {/* Services */}

        <div>

          <div className="mb-10 text-center">
            <h3 className="text-3xl font-bold">
              What I Do
            </h3>

            <p className="mt-3 text-muted-foreground">
              End-to-end software development for startups, businesses, and
              enterprise applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <Card
                key={service.title}
                className="group transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="flex items-center gap-4 p-6">

                  <div className="rounded-xl bg-primary/10 p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h4 className="font-semibold">
                    {service.title}
                  </h4>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>

        <Separator className="my-16" />

        {/* Technologies */}

        <div className="space-y-10">

          <div className="text-center">
            <h3 className="text-3xl font-bold">
              Technologies
            </h3>

            <p className="mt-2 text-muted-foreground">
              Technologies I use to build modern web applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <Card>
              <CardContent className="space-y-5 p-6">
                <h4 className="font-bold text-lg">
                  Frontend
                </h4>

                <div className="flex flex-wrap gap-2">
                  {frontend.map((item) => (
                    <Badge key={item}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-5 p-6">
                <h4 className="font-bold text-lg">
                  Backend
                </h4>

                <div className="flex flex-wrap gap-2">
                  {backend.map((item) => (
                    <Badge key={item}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-5 p-6">
                <h4 className="font-bold text-lg">
                  Databases
                </h4>

                <div className="flex flex-wrap gap-2">
                  {database.map((item) => (
                    <Badge key={item}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-5 p-6">
                <h4 className="font-bold text-lg">
                  Tools
                </h4>

                <div className="flex flex-wrap gap-2">
                  {tools.map((item) => (
                    <Badge key={item}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

        </div>

        <Separator className="my-16" />

        {/* Philosophy */}

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="space-y-5 p-8">

            <h3 className="text-3xl font-bold">
              My Philosophy
            </h3>

            <p className="leading-8 text-muted-foreground">
              I believe great software is more than just functional—it should
              be intuitive, performant, secure, and enjoyable to use. Every
              project is an opportunity to solve real-world problems through
              thoughtful engineering, clean architecture, maintainable code,
              and attention to detail.
            </p>

          </CardContent>
        </Card>

        <Separator className="my-16" />

        {/* CTA */}

        <Card className="border-0 bg-primary text-primary-foreground shadow-xl">
          <CardContent className="flex flex-col items-center gap-6 p-12 text-center">

            <BriefcaseBusiness className="h-12 w-12" />

            <h3 className="text-4xl font-bold">
              Let's Build Something Amazing Together
            </h3>

            <p className="max-w-3xl text-lg opacity-90">
              I'm always excited to work on challenging projects, collaborate
              with passionate teams, and create digital products that make a
              meaningful impact.
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              <Badge
                variant="secondary"
                className="px-4 py-2"
              >
                Full-Time
              </Badge>

              <Badge
                variant="secondary"
                className="px-4 py-2"
              >
                Freelance
              </Badge>

              <Badge
                variant="secondary"
                className="px-4 py-2"
              >
                Remote
              </Badge>

              <Badge
                variant="secondary"
                className="px-4 py-2"
              >
                Open Source
              </Badge>

            </div>

            <Button
              size="lg"
              variant="secondary"
            >
              Let's Talk
            </Button>

          </CardContent>
        </Card>

      </div>
    </section>
  );
}