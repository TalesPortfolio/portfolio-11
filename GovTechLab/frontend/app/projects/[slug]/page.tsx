import { notFound } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";

interface Props {
  params: { slug: string };
}

export default async function ProjectPage({ params }: Props) {
  const slug = params.slug;
  const [firstname, ...rest] = slug.split("-");
  const name = rest.join(" ");

  if (!firstname || !name) notFound();

  // ✅ Obtém o domínio atual da requisição
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/deputy?name=${encodeURIComponent(`${firstname} ${name}`)}`;

  const res = await fetch(url, { cache: "no-cache" });

  if (!res.ok) notFound();

  const data = await res.json();
  const projects = data.laws.details;
  const viProjects = data.vi_laws?.details || [];

  const getStatusColor = (status: string) => {
    const lower = status.toLowerCase();
    if (lower.includes("publie") || lower.includes("publié")) return "#28a745";
    if (lower.includes("rejete") || lower.includes("rejeté")) return "#dc3545";
    return "#6c757d";
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/">
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#0d6efd",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ← Back to Main Page
          </button>
        </Link>
      </div>

      <h1 style={{ fontSize: "2rem", color: "#003366" }}>
        All Projects of {firstname} {name}
      </h1>

      <h2 style={{ marginTop: "2rem", color: "#222" }}>As Author</h2>
      <table style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Status</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Authors</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project: any, idx: number) => (
              <tr key={idx}>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "0.5rem",
                    color: "#fff",
                    backgroundColor: getStatusColor(project.status),
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {project.status}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                  {project.authors}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} style={{ padding: "1rem", textAlign: "center" }}>
                No authored projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h2 style={{ marginTop: "3rem", color: "#222" }}>Mentioned in Projects (via VI field)</h2>
      <table style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Number</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Type</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Deposit Date</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Evacuation Date</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Status</th>
            <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Mention (VI)</th>
          </tr>
        </thead>
        <tbody>
          {viProjects.length > 0 ? (
            viProjects.map((project: any, idx: number) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                  {project.number}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                  {project.type}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                  {project.deposit_date}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                  {project.evacuation_date}
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "0.5rem",
                    backgroundColor: getStatusColor(project.status),
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {project.status}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                  {project.title}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} style={{ padding: "1rem", textAlign: "center" }}>
                No projects mentioning this deputy found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
