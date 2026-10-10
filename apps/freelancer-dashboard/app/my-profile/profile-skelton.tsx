import { DashboardHeader } from "@/app/_components/dashboard/dashboard-header";

export function ProfileSkeleton() {
  return (
    <div className="min-h-svh bg-[#f4f6f2] font-(family-name:--font-dm-sans) text-[#242724]">
      <DashboardHeader />

      <main className="mx-auto max-w-360 px-5 py-8 sm:px-8 lg:py-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="w-full">
            <div className="h-5 w-36 animate-pulse rounded bg-[#e3e7e0]" />

            <div className="mt-4 h-10 w-52 animate-pulse rounded-lg bg-[#dfe4dc] sm:w-64" />

            <div className="mt-2 h-4 w-full max-w-md animate-pulse rounded bg-[#e5e8e2]" />
          </div>

          <div className="h-11 w-48 animate-pulse rounded-xl bg-[#e1e5df]" />
        </div>

        <div className="mt-8 grid items-start gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="grid gap-5 xl:sticky xl:top-24">
            {/* Profile card */}
            <section className="rounded-2xl border border-black/8 bg-white p-5">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 animate-pulse rounded-full bg-[#e1e5df]" />

                <div className="mt-4 h-5 w-32 animate-pulse rounded bg-[#e1e5df]" />

                <div className="mt-2 h-3 w-40 animate-pulse rounded bg-[#e7eae5]" />

                <div className="mt-5 flex w-full items-center justify-between">
                  <div className="h-3 w-24 animate-pulse rounded bg-[#e5e8e2]" />
                  <div className="h-3 w-10 animate-pulse rounded bg-[#dfe5dc]" />
                </div>

                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e6e9e3]">
                  <div className="h-full w-3/4 animate-pulse rounded-full bg-[#d5ddd1]" />
                </div>
              </div>
            </section>

            {/* Navigation */}
            <nav className="rounded-2xl border border-black/8 bg-white p-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl px-3 py-3"
                >
                  <div className="h-5 w-5 animate-pulse rounded bg-[#e1e5df]" />
                  <div className="h-4 w-28 animate-pulse rounded bg-[#e5e8e2]" />
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="grid gap-5">
            {/* Profile Details */}
            <SkeletonSection>
              <div className="grid gap-5 sm:grid-cols-2">
                <SkeletonField />
                <SkeletonField />
                <SkeletonField />
                <SkeletonField />

                <div className="grid gap-3 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <SkeletonLine className="w-28" />
                    <SkeletonLine className="w-24" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px_44px]">
                    <SkeletonInput />
                    <SkeletonInput />
                    <div className="h-12 animate-pulse rounded-xl bg-[#e3e7e0]" />
                  </div>

                  <div className="h-11 w-36 animate-pulse rounded-xl bg-[#e3e7e0]" />
                </div>
              </div>
            </SkeletonSection>

            {/* Professional */}
            <SkeletonSection>
              <div className="grid gap-5">
                <SkeletonField />

                <div>
                  <SkeletonLine className="mb-2 w-44" />
                  <div className="h-40 w-full animate-pulse rounded-xl bg-[#e5e8e2]" />
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <SkeletonField />
                  <SkeletonField />
                  <SkeletonField />
                  <SkeletonField />
                </div>
              </div>
            </SkeletonSection>

            {/* Skills */}
            <SkeletonSection>
              <SkeletonLine className="mb-3 w-36" />

              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className={`h-9 animate-pulse rounded-xl bg-[#e2e7df] ${
                      item % 3 === 0
                        ? "w-24"
                        : item % 2 === 0
                          ? "w-20"
                          : "w-28"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-5 flex max-w-lg gap-2">
                <div className="h-12 flex-1 animate-pulse rounded-xl bg-[#e3e7e0]" />
                <div className="h-12 w-20 animate-pulse rounded-xl bg-[#e1e5df]" />
              </div>

              <SkeletonLine className="mt-2 w-48" />
            </SkeletonSection>

            {/* Portfolio */}
            <SkeletonSection>
              <SkeletonLine className="mb-3 w-40" />

              <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <SkeletonPortfolioCard key={item} />
                ))}

                <div className="flex min-h-72 animate-pulse flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 bg-[#f7f9f5]">
                  <div className="h-12 w-12 rounded-2xl bg-[#e1e8de]" />
                  <div className="mt-4 h-4 w-36 rounded bg-[#e2e7df]" />
                  <div className="mt-2 h-3 w-44 rounded bg-[#e7eae5]" />
                </div>
              </div>
            </SkeletonSection>

            {/* Save bar */}
            <div className="sticky bottom-4 z-20 flex items-center justify-end rounded-2xl border border-black/9 bg-white/95 p-4 shadow-xl">
              <div className="h-11 w-32 animate-pulse rounded-xl bg-[#dce2d9]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------- Skeleton helpers ---------- */

function SkeletonSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-black/8 bg-white p-5 sm:p-7">
      <div className="border-b border-black/7 pb-5">
        <div className="h-6 w-40 animate-pulse rounded bg-[#dfe4dc]" />

        <div className="mt-2 h-4 w-full max-w-xl animate-pulse rounded bg-[#e7eae5]" />
      </div>

      <div className="pt-6">{children}</div>
    </section>
  );
}

function SkeletonField() {
  return (
    <div className="grid gap-2">
      <SkeletonLine className="w-28" />
      <SkeletonInput />
    </div>
  );
}

function SkeletonInput() {
  return (
    <div className="h-12 w-full animate-pulse rounded-xl bg-[#e3e7e0]" />
  );
}

function SkeletonLine({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`h-4 animate-pulse rounded bg-[#e6e9e3] ${className}`}
    />
  );
}

function SkeletonPortfolioCard() {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/8 bg-white">
      <div className="aspect-video w-full animate-pulse bg-[#dfe5dc]" />

      <div className="p-5">
        <div className="h-3 w-20 animate-pulse rounded bg-[#e0e6dd]" />

        <div className="mt-3 h-5 w-3/4 animate-pulse rounded bg-[#dfe4dc]" />

        <div className="mt-3 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-[#e7eae5]" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-[#e7eae5]" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-[#e7eae5]" />
        </div>

        <div className="mt-5 border-t border-black/7 pt-4">
          <div className="h-3 w-28 animate-pulse rounded bg-[#e5e8e2]" />
        </div>
      </div>
    </article>
  );
}