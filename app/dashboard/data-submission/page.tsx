import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  FileText,
  FileUp,
  ListChecks,
  Plus,
  Send,
  UploadCloud
} from "lucide-react";
import { AdminShell } from "../_components/admin-shell";

const hrPrograms = [
  "Recruitment",
  "Records Management",
  "Human Development",
  "Performance Management",
  "Total Rewards"
];

const dataRequirements = [
  {
    label: "Summary Data Sheet",
    description: "Main spreadsheet or encoded data source for the selected period.",
    required: true,
    status: "Uploaded"
  },
  {
    label: "Supporting Documents",
    description: "Memos, attendance sheets, appointment documents, or reference files.",
    required: true,
    status: "Missing"
  },
  {
    label: "Narrative / Remarks",
    description: "Context, exceptions, corrections, or notes for validation.",
    required: false,
    status: "Ready"
  }
];

const programProgress = [
  { program: "Recruitment", completed: 2, total: 5, status: "In progress" },
  { program: "Records Management", completed: 1, total: 4, status: "Missing files" },
  { program: "Human Development", completed: 5, total: 5, status: "Ready for review" },
  { program: "Performance Management", completed: 0, total: 4, status: "Not started" }
];

export default function DataSubmissionPage() {
  return (
    <AdminShell
      activePage="Data Submission"
      title="Data Submission"
      description="Define required data, collect files, and monitor HR program submissions."
    >
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <section className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-civic-forest/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-civic-ink">Create Data Request</h2>
              <p className="mt-1 text-sm text-civic-ink/55">
                Set what each HR program needs to submit for a specific reporting period.
              </p>
            </div>
            <button
              type="button"
              className="flex h-10 items-center justify-center gap-2 rounded-md bg-civic-forest px-4 text-sm font-semibold text-white hover:bg-civic-ink"
            >
              <Plus size={17} aria-hidden="true" />
              Add requirement
            </button>
          </div>

          <form className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-civic-ink/75">HR Program</span>
              <select className="mt-1 h-11 w-full rounded-md border border-civic-forest/15 bg-white px-3 text-sm outline-none transition focus:border-civic-forest focus:ring-2 focus:ring-civic-forest/15">
                <option>All HR Programs</option>
                {hrPrograms.map((program) => (
                  <option key={program}>{program}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-civic-ink/75">Reporting Period</span>
              <div className="mt-1 flex h-11 items-center gap-2 rounded-md border border-civic-forest/15 bg-white px-3">
                <CalendarDays size={17} className="text-civic-ink/45" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Monthly, quarterly, annual, or custom"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                />
              </div>
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-civic-ink/75">Data Needed</span>
              <input
                type="text"
                placeholder="Example: Applicant summary, training attendance, IPCR status report"
                className="mt-1 h-11 w-full rounded-md border border-civic-forest/15 bg-white px-3 text-sm outline-none transition focus:border-civic-forest focus:ring-2 focus:ring-civic-forest/15"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-medium text-civic-ink/75">Instructions</span>
              <textarea
                placeholder="Describe the format, required columns, supporting files, and validation notes."
                rows={4}
                className="mt-1 w-full resize-none rounded-md border border-civic-forest/15 bg-white px-3 py-3 text-sm outline-none transition focus:border-civic-forest focus:ring-2 focus:ring-civic-forest/15"
              />
            </label>
          </form>
        </section>

        <aside className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm">
          <div className="border-b border-civic-forest/10 pb-4">
            <h2 className="text-base font-semibold text-civic-ink">Collection Progress</h2>
            <p className="mt-1 text-sm text-civic-ink/55">At-a-glance submission completion.</p>
          </div>

          <div className="mt-5 space-y-4">
            {programProgress.map((item) => {
              const percent = Math.round((item.completed / item.total) * 100);

              return (
                <div key={item.program}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-civic-ink">{item.program}</p>
                    <p className="text-xs font-medium text-civic-ink/55">
                      {item.completed}/{item.total}
                    </p>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-civic-gold">
                    <div className="h-full rounded-full bg-civic-forest" style={{ width: `${percent}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-civic-ink/55">{item.status}</p>
                </div>
              );
            })}
          </div>
        </aside>

        <section className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-3 border-b border-civic-forest/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-civic-ink">Required Data Checklist</h2>
              <p className="mt-1 text-sm text-civic-ink/55">
                Each item can require a file upload before it is marked complete.
              </p>
            </div>
            <span className="inline-flex h-8 items-center gap-2 rounded-md bg-civic-mist px-3 text-xs font-semibold text-civic-forest">
              <ListChecks size={15} aria-hidden="true" />
              2 of 3 ready
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {dataRequirements.map((item) => (
              <article
                key={item.label}
                className="grid gap-4 rounded-lg border border-civic-forest/10 bg-civic-gold/35 p-4 lg:grid-cols-[auto_1fr_180px_150px]"
              >
                <div className="pt-1">
                  <input
                    type="checkbox"
                    defaultChecked={item.status !== "Missing"}
                    className="size-4 accent-civic-forest"
                    aria-label={`${item.label} complete`}
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-semibold text-civic-ink">{item.label}</h3>
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-semibold ${
                        item.required ? "bg-white text-civic-forest" : "bg-white text-civic-ink/45"
                      }`}
                    >
                      {item.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-civic-ink/55">{item.description}</p>
                </div>

                <button
                  type="button"
                  className="flex h-10 items-center justify-center gap-2 rounded-md border border-civic-forest/15 bg-white px-3 text-sm font-semibold text-civic-forest hover:bg-civic-mist"
                >
                  <UploadCloud size={17} aria-hidden="true" />
                  Upload file
                </button>

                <span
                  className={`inline-flex h-10 items-center justify-center gap-2 rounded-md px-3 text-sm font-semibold ${
                    item.status === "Uploaded"
                      ? "bg-civic-mist text-civic-forest"
                      : item.status === "Missing"
                        ? "bg-white text-civic-coral"
                        : "bg-white text-civic-ink/55"
                  }`}
                >
                  {item.status === "Uploaded" ? <CheckCircle2 size={16} aria-hidden="true" /> : null}
                  {item.status === "Missing" ? <AlertCircle size={16} aria-hidden="true" /> : null}
                  {item.status === "Ready" ? <Clock3 size={16} aria-hidden="true" /> : null}
                  {item.status}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-civic-forest/10 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-civic-mist text-civic-forest">
                <FileSpreadsheet size={18} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-civic-ink">Submission Review</h2>
                <p className="text-sm text-civic-ink/55">
                  Later, Admin 2 can accept submissions or return them for revision.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-md border border-civic-forest/15 bg-white px-4 text-sm font-semibold text-civic-forest hover:bg-civic-mist"
              >
                <FileText size={17} aria-hidden="true" />
                Save draft
              </button>
              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-md bg-civic-forest px-4 text-sm font-semibold text-white hover:bg-civic-ink"
              >
                <Send size={17} aria-hidden="true" />
                Submit for review
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
