import { notFound } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";
import { Wrapper, Table } from "@/styles/ProjectPage.styles";
import { cachedData } from "@/lib/jsonCache";

// build-time route generation
export async function generateStaticParams() {
  const deputies = cachedData.deputies || [];

  return deputies.map((dep) => ({
    slug: `${dep.firstname}-${dep.name}`,
  }));
}

// params é uma Promise aqui por causa da tipagem usada no seu projeto
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const [firstname, ...rest] = slug.split("-");
  const name = rest.join(" ");

  if (!firstname || !name) notFound();

  const headersList = headers();
  const host = (await headersList).get("host");
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
            ← Voltar para a Página Principal
          </button>
        </Link>
      </div>

      <h1 style={{ fontSize: "2rem", color: "#003366", textAlign: "center" }}>
        Todos os Projetos de {firstname} {name}
      </h1>

      <h2 style={{ marginTop: "2rem", color: "#222" }}>Como Autor</h2>
      <Table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Autores</th>
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
                Nenhum projeto autoral encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h2 style={{ marginTop: "3rem", color: "#222" }}>
        Mencionado em Projetos (via campo VI)
      </h2>
      <Table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Tipo</th>
            <th>Data de Depósito</th>
            <th>Data de Evacuação</th>
            <th>Status</th>
            <th>Menção (VI)</th>
          </tr>
        </thead>
        <tbody>
          {viProjects.length > 0 ? (
            viProjects.map((project: any, idx: number) => (
              <tr key={idx}>
                <td data-label="Número">{project.number}</td>
                <td data-label="Tipo">{project.type}</td>
                <td data-label="Depósito">{project.deposit_date}</td>
                <td data-label="Evacuação">{project.evacuation_date}</td>
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
                Aucun projet mentionnant ce député trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}
