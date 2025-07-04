"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import {
  Container,
  InputGroup,
  Input,
  Button,
  ToggleButton,
  DeputyGrid,
  Card,
  ChartContainer,
  ChartRow,
  InfoColumn,
  PhotoCard,
  PhotoGrid,
} from "../../styles/SearchDeputy.styles";
import CompareInfo from "./CompareInfo";
import DeputyList from "./DeputyList";

const COLORS: Record<string, string> = {
  present: "#28a745",
  excused: "#ffc107",
  foreign_mission: "#17a2b8",
  absent: "#ff6347",
  publie: "#007bff",
  retire: "#f0ad4e",
  rejete: "#c82333",
  autres: "#6c757d",
  oui: "#20c997",
  non: "#e83e8c",
  abstention: "rgb(233, 138, 13)",
};

export default function SearchDeputy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [deputies, setDeputies] = useState<any[]>([]);
  const [chartType, setChartType] = useState<"bar" | "pie">("pie");
  const [error, setError] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [allDeputiesPhotos, setAllDeputiesPhotos] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("deputies");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setDeputies(parsed);
        }
      } catch (err) {
        console.error("Erro ao parsear deputies:", err);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("deputies", JSON.stringify(deputies));
    }
  }, [deputies, hydrated]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await axios.get("/api/deputy/photos");
        setAllDeputiesPhotos(res.data);
      } catch (err) {
        console.error("Erro ao buscar fotos dos deputados:", err);
      }
    };
    fetchPhotos();
  }, []);

  const fetchDeputy = async () => {
    try {
      setError("");
      const parts = searchTerm.trim().split(" ");
      if (parts.length < 2) {
        setError("Veuillez entrer le prénom et le nom du député");
        return;
      }
      const name = parts.join(" ");

      const res = await axios.get("/api/deputy", { params: { name } });

      const alreadyExists = deputies.find(
        (d) => d.name === res.data.name && d.firstname === res.data.firstname
      );
      if (alreadyExists) {
        setError("Ce député a déjà été ajouté.");
        return;
      }

      setDeputies([res.data, ...deputies]);
      setSearchTerm("");
    } catch (err) {
      setError("Député introuvable ou erreur lors de la récupération des données");
    }
  };

  const clearDeputies = () => {
    localStorage.removeItem("deputies");
    setDeputies([]);
  };

  const getDataWithEmojis = (rawData: any[]) => {
    const max = Math.max(...rawData.map((d) => d.value));
    const min = Math.min(...rawData.map((d) => d.value));

    return rawData.map((entry) => {
      let label = entry.name;
      if (entry.value === max && max !== min) label = `🥇 ${label}`;
      else if (entry.value === min && max !== min) label = `😞 ${label}`;
      return { ...entry, label };
    });
  };

  const renderPie = (title: string, rawData: any[]) => {
    const data = getDataWithEmojis(rawData);
    const legendPayload = rawData.map((entry) => ({
      value: entry.name,
      type: "square" as const,
      color: COLORS[entry.name] || "#999",
    }));

    return (
      <ChartContainer>
        <h4>{title}</h4>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={COLORS[entry.name] || "#999"} />
              ))}
            </Pie>
            <Tooltip />
            <Legend payload={legendPayload} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
  };

  const renderBar = (title: string, rawData: any[]) => {
    const data = getDataWithEmojis(rawData);
    return (
      <ChartContainer>
        <h4>{title}</h4>
        <ResponsiveContainer width="100%" height={40 * data.length + 40}>
          <BarChart data={data} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="label" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value">
              {data.map((entry, i) => (
                <Cell key={i} fill={COLORS[entry.name] || "#999"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
  };

  const renderChart = (title: string, data: any[]) => {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    const fullTitle = `${title} (${total})`;
    return chartType === "pie" ? renderPie(fullTitle, data) : renderBar(fullTitle, data);
  };

  return (
    <Container>
      <h1>Comparaison des Députés du Luxembourg</h1>

      <CompareInfo />

      <InputGroup>
        <Input
          placeholder="Nom complet (Prénom Nom)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button style={{ backgroundColor: "#893040" }} onClick={fetchDeputy}>
          Rechercher
        </Button>
        <ToggleButton onClick={() => setChartType(chartType === "pie" ? "bar" : "pie")}>
          {chartType === "pie"
            ? "Basculer en Diagramme en Barres"
            : "Basculer en Diagramme Circulaire"}
        </ToggleButton>
        <Button
          style={{ backgroundColor: "#dc3545", marginLeft: "0.5rem", color: "#fff" }}
          onClick={clearDeputies}
        >
          Tout Effacer
        </Button>
      </InputGroup>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <DeputyGrid>
        {deputies.map((data, index) => (
          <Card key={index}>
            <InfoColumn>
              {data.photo && (
                <img
                  src={data.photo}
                  alt={`${data.firstname} ${data.name}`}
                  style={{
                    width: "100px",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <h2>{data.firstname} {data.name}</h2>
              {data.startDate && (
                <p style={{ fontSize: "0.85rem", color: "#5c202b" }}>
                  Début de mandat: {data.startDate}
                </p>
              )}
              <p>
                <strong style={{ color: "#003366" }}>Party:</strong>{" "}
                <span style={{ backgroundColor: "#003366", color: "#fff", padding: "2px 6px", borderRadius: "5px" }}>
                  {data.politicalParty}
                </span>
              </p>
              {data.politicalGroup && (
                <p>
                  <strong>Group:</strong> {data.politicalGroup}
                </p>
              )}
              <Link href={`/projects/${encodeURIComponent(`${data.firstname}-${data.name}`)}`}>
                <Button style={{ backgroundColor: "#0d6efd", marginTop: "0.5rem" }}>
                  View Projects
                </Button>
              </Link>
            </InfoColumn>

            <ChartRow>
              {renderChart(
                "Présences totales",
                Object.entries(data.presence.status).map(([k, v]) => ({
                  name: k,
                  value: v,
                }))
              )}
              {renderChart("Projets totaux", [
                {
                  name: "publie",
                  value: data.laws.details.filter((p: any) => p.status?.toLowerCase().includes("publie")).length,
                },
                {
                  name: "retire",
                  value: data.laws.details.filter((p: any) => p.status?.toLowerCase().includes("retire")).length,
                },
                {
                  name: "rejete",
                  value: data.laws.details.filter((p: any) => p.status?.toLowerCase().includes("rejete")).length,
                },
                {
                  name: "autres",
                  value: data.laws.details.filter((p: any) => {
                    const s = p.status?.toLowerCase() || "";
                    return !s.includes("publie") && !s.includes("retire") && !s.includes("rejete");
                  }).length,
                },
              ])}
              {renderChart("Votes totaux", [
                { name: "oui", value: data.votes.stats.oui },
                { name: "non", value: data.votes.stats.non },
                { name: "abstention", value: data.votes.stats.abstention },
              ])}
            </ChartRow>
          </Card>
        ))}
      </DeputyGrid>

      <DeputyList
        deputies={deputies.map((d) => ({
          firstname: d.firstname,
          name: d.name,
          photo: d.photo || "",
        }))}
        onSelect={(fullName) => {
          setSearchTerm(fullName);
          fetchDeputy();
        }}
      />

      <h2 style={{ marginTop: "2rem", textAlign: "center" }}>Tous les Députés du Luxembourg</h2>
      <PhotoGrid>
        {allDeputiesPhotos.map((dep, i) => (
          <PhotoCard
            key={i}
            onClick={() => {
              setSearchTerm(dep.name);
              fetchDeputy();
            }}
          >
            <img src={dep.img} alt={dep.name} />
            <p>{dep.name}</p>
          </PhotoCard>
        ))}
      </PhotoGrid>
    </Container>
  );
}
