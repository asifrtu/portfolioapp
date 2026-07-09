import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ArticleFooter() {
  return (
    <footer className="mt-20 space-y-8">

      <Separator />

      <div className="flex flex-wrap gap-2">
        <Badge>Next.js</Badge>
        <Badge>React</Badge>
        <Badge>TypeScript</Badge>
        <Badge>Authentication</Badge>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="font-semibold text-lg">
          Written by Asif Raza
        </h3>

        <p className="mt-2 text-muted-foreground">
          Full Stack Engineer focused on React, Next.js,
          Node.js, TypeScript and scalable web applications.
        </p>
      </div>

    </footer>
  );
}