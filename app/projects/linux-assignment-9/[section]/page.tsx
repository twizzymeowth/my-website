import Link from "next/link";
import { notFound } from "next/navigation";
import { Sidebar } from "@/app/components/sidebar";
import { assignmentSections } from "@/app/components/linux-assignment-section";

const pdfUrl = "https://blobs.vusercontent.net/blob/LinuxAssignment_9-2-4YoWU2RbjAPaeccUWiz5Jc78dbDkbH.pdf";

export default async function LinuxAssignmentDetail({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const index = Number(section) - 1;
  const activeSection = assignmentSections[index];

  if (!activeSection) notFound();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-10">
          <Link href="/#linux-assignment-9" className="text-xs font-semibold uppercase tracking-[0.18em] text-accent hover:underline">
            ← Back to projects
          </Link>
          <header className="mt-10 border-b border-border pb-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{activeSection.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">{activeSection.title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">Linux Assignment 9 · Report pages {activeSection.pages}</p>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,30rem)]">
            <article className="flex flex-col gap-6 text-sm leading-8 text-muted-foreground">
              {activeSection.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeSection.tags.map((tag) => <span key={tag} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">{tag}</span>)}
              </div>
            </article>

            <figure className="overflow-hidden rounded-lg border border-border bg-surface lg:sticky lg:top-8 lg:self-start">
              <iframe title={`${activeSection.title} PDF pages`} src={`${pdfUrl}#page=${activeSection.pages.split("-")[0]}&view=FitH`} className="h-[34rem] w-full" />
              <figcaption className="border-t border-border px-4 py-3 text-xs leading-5 text-muted-foreground">
                Original PDF evidence for this section. Use the PDF viewer controls to inspect the screenshots and additional pages.
              </figcaption>
            </figure>
          </div>

          <nav aria-label="Assignment sections" className="mt-16 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            {assignmentSections.map((item, itemIndex) => (
              <Link key={item.title} href={`/projects/linux-assignment-9/${itemIndex + 1}`} className="rounded-lg bg-surface px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
                <span className="mr-2 font-mono text-xs text-accent">0{itemIndex + 1}</span>{item.title}
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}
