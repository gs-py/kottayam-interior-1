export function PageSkeleton() {
  return (
    <div className="flex min-h-screen flex-col gap-6 px-6 pt-28 marble-bg">
      <div className="h-12 w-2/3 max-w-xl animate-pulse rounded-lg bg-graphite-light/60" />
      <div className="h-6 w-1/2 max-w-md animate-pulse rounded-lg bg-graphite-light/40" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-56 animate-pulse rounded-xl bg-graphite-light/40"
          />
        ))}
      </div>
    </div>
  )
}
