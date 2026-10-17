import Link from "next/link";
import { notFound } from "next/navigation";
import mammoth from "mammoth";
import { Sidebar } from "@/app/components/sidebar";
import { assignmentSections } from "@/app/components/linux-assignment-section";

const pdfUrl = "https://blobs.vusercontent.net/blob/LinuxAssignment_9-2-4YoWU2RbjAPaeccUWiz5Jc78dbDkbH.pdf";

const reportMarkers = [
  "1. Project Introduction",
  "Experiment 1: Legitimate Administrative Commands",
  "Experiment 2: Potential Harm or Misuse",
  "Experiment 3: Ambiguous Prompt Evaluation",
  "Experiment 4: Safety Guardrail & Behavior Test",
  "3. Conclusion & Recommendations",
  "Rubric",
];

async function readReport() {
  const raw = await mammoth.extractRawText({ path: "data/LinuxAssignment_9-4ceaf4.docx" });
  const images: string[] = [];
  await mammoth.convertToHtml(
    { path: "data/LinuxAssignment_9-4ceaf4.docx" },
    {
      convertImage: mammoth.images.imgElement((image) =>
        image.read("base64").then((base64) => {
          images.push(`data:${image.contentType};base64,${base64}`);
          return { src: `data:${image.contentType};base64,${base64}` };
        }),
      ),
    },
  );
  return { text: raw.value, images };
}

function sectionText(text: string, index: number) {
  const start = text.indexOf(reportMarkers[index]);
  const end = reportMarkers[index + 1] ? text.indexOf(reportMarkers[index + 1], start + 1) : text.length;
  return text.slice(start, end === -1 ? text.length : end).trim();
}

export default async function LinuxAssignmentDetail({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const index = Number(section) - 1;
  const activeSection = assignmentSections[index];
  if (!activeSection) notFound();

  const report = await readReport();
  const content = sectionText(report.text, index);
  const paragraphs = content.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean);

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
            <p className="mt-3 text-sm text-muted-foreground">Linux Assignment 9 · Full report section</p>
          </header>

          <article className="mt-10 rounded-lg bg-surface px-6 py-7 sm:px-10 sm:py-9">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Full section text</p>
              <div className="flex gap-4 text-xs font-medium text-muted-foreground">
                <a href={`${pdfUrl}#page=${activeSection.pages.split("-")[0]}`} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 hover:text-accent">Open PDF</a>
              </div>
            </div>
            <div className="mt-8 space-y-6 text-sm leading-8 text-muted-foreground sm:text-base">
              {paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${paragraph.slice(0, 20)}-${paragraphIndex}`} className={paragraph.length < 90 ? "font-semibold text-foreground" : undefined}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {activeSection.tags.map((tag) => <span key={tag} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">{tag}</span>)}
            </div>
          </article>

          {report.images.length > 0 && (
            <section className="mt-10 rounded-lg border border-border bg-surface p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Report images</p>
              <p className="mt-2 text-sm text-muted-foreground">Screenshots and figures from the report.</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {report.images.map((src, imageIndex) => (
                  <figure key={src.slice(-32)} className="overflow-hidden rounded-md border border-border bg-background">
                    <img src={src} alt={`Linux Assignment 9 report figure ${imageIndex + 1}`} className="h-auto w-full" />
                    <figcaption className="border-t border-border px-3 py-2 text-xs text-muted-foreground">Figure {imageIndex + 1}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          <nav aria-label="Assignment sections" className="mt-16 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            {assignmentSections.map((item, itemIndex) => (
              <a key={item.title} href={`/projects/linux-assignment-9/${itemIndex + 1}`} className="relative z-10 block cursor-pointer rounded-lg bg-surface px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted" aria-label={`Open ${item.title}`}>
                <span className="mr-2 font-mono text-xs text-accent">0{itemIndex + 1}</span>{item.title}
              </Link>
            ))}
          </nav>
        </div>
      </main>
    </div>
  );
}
