import { notFound } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";
import { Wrapper, Table } from "@/styles/ProjectPage.styles";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const slug = params.slug;
  const [firstname, ...rest] = slug.split("-");
  const name = rest.join(" ");

  if (!firstname || !name) notFound();
  const headersList = headers();
  const host = headersList.get("host");

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/deputy?name=${encodeURIComponent(
    `${firstname} ${name}`
  )}`;

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) notFound();

  const data = await res.json();
  const projects = data.laws.details;
  const viProjects = data.vi_laws?.details || [];

  const getStatusColor = (status: string) => {
    const lower = status.toLowerCase();
    if (lower.includes("publie")) return "#28a745";
    if (lower.includes("rejete")) return "#dc3545";
    return "#6c757d";
  };

  return (
    <Wrapper>
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

      <h1 style={{ fontSize: "2rem", color: "#003366", textAlign: "center" }}>
        All Projects of {firstname} {name}
      </h1>

      <h2 style={{ marginTop: "2rem", color: "#222" }}>As Author</h2>
      <Table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project: any, idx: number) => (
              <tr key={idx}>
                <td
                  data-label="Status"
                  style={{
                    backgroundColor: getStatusColor(project.status),
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {project.status}
                </td>
                <td data-label="Authors">
                  <ul>
                    {project.authors
                      .split(",")
                      .map((author: string, i: number) => (
                        <li key={i}>{author.trim()}</li>
                      ))}
                  </ul>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                No authored projects found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h2 style={{ marginTop: "3rem", color: "#222" }}>
        Mentioned in Projects (via VI field)
      </h2>
      <Table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Type</th>
            <th>Deposit Date</th>
            <th>Evacuation Date</th>
            <th>Status</th>
            <th>Mention (VI)</th>
          </tr>
        </thead>
        <tbody>
          {viProjects.length > 0 ? (
            viProjects.map((project: any, idx: number) => (
              <tr key={idx}>
                <td data-label="Number">{project.number}</td>
                <td data-label="Type">{project.type}</td>
                <td data-label="Deposit">{project.deposit_date}</td>
                <td data-label="Evacuation">{project.evacuation_date}</td>
                <td
                  data-label="Status"
                  style={{
                    backgroundColor: getStatusColor(project.status),
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  {project.status}
                </td>
                <td data-label="VI">{project.title}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                No projects mentioning this deputy found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}
