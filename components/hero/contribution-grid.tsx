export default function ContributionGrid() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-28 gap-[3px]">
        {Array.from({ length: 196 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-sm ${
              Math.random() > 0.55
                ? "bg-zinc-500"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        1,245 contributions this year
      </p>
    </div>
  );
}