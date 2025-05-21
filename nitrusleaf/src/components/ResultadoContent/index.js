"use client";

import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./ResultadoContent.module.css";
import { ScanResultContext } from "@/contexts/ScanResultContext";
import { AuthContext } from "@/contexts/AuthContext";
import api from "@/services/api";

export default function ResultadoContent() {
  const { scanResult } = useContext(ScanResultContext);
  const { selectedProperty } = useContext(AuthContext);
  const router = useRouter();

  const [status, setStatus] = useState("");
  const [talhao, setTalhao] = useState("");
  const [pes, setPes] = useState([]);
  const [pe, setPe] = useState("");
  const [talhoes, setTalhoes] = useState([]);
  const [relatorioTexto, setRelatorioTexto] = useState("");
  const [probabilidadeDeficiencia, setProbabilidadeDeficiencia] = useState("");
  const [percentual, setPercentual] = useState(null);
  const [loading, setLoading] = useState(false);

  // Normaliza string para remover acentuação e maiúsculas
  const normalizeString = (str) =>
    str?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

  useEffect(() => {
    if (scanResult) {
      setProbabilidadeDeficiencia(scanResult.probabilidadeDeficiencia);
      setPercentual(scanResult.percentual);
      setRelatorioTexto(scanResult.relatorioTexto);
      setStatus(scanResult.status);
    }
  }, [scanResult]);

  useEffect(() => {
    if (!selectedProperty?.id) {
      setTalhoes([]);
      setTalhao("");
      return;
    }
    async function fetchTalhoes() {
      try {
        const res = await api.get(`/talhoes/propriedade/${selectedProperty.id}`);
        setTalhoes(res.data);
        setTalhao("");
        setPes([]);
        setPe("");
      } catch (error) {
        console.error("Erro ao buscar talhões:", error);
        setTalhoes([]);
      }
    }
    fetchTalhoes();
  }, [selectedProperty]);

  useEffect(() => {
    if (!talhao) {
      setPes([]);
      setPe("");
      return;
    }
    async function fetchPes() {
      try {
        const res = await api.get(`/talhoes/${talhao}/pes`);
        setPes(res.data);
        setPe("");
      } catch (error) {
        console.error("Erro ao buscar pés:", error);
        setPes([]);
      }
    }
    fetchPes();
  }, [talhao]);

  const gerarResultadoAnaliseAleatorio = () => {
    const textos = {
      COBRE: "Análise indica deficiência significativa de cobre na planta.",
      MANGANES: "Presença detectada de deficiência de manganês em níveis preocupantes.",
      OUTROS: "Outras condições adversas foram identificadas, sem definição específica.",
    };
    return textos[normalizeString(probabilidadeDeficiencia)] || "Análise padrão do relatório.";
  };

  const handleEnviarDadosScan = async () => {
    if (!pe) {
      alert("Por favor, selecione um Pé para associar os dados.");
      return;
    }
    setLoading(true);
    try {
      // Criar foto
      const dataFoto = new Date().toISOString().split("T")[0];
      const urlAleatoria = `https://picsum.photos/seed/${Math.floor(Math.random() * 10000)}/400/300`;

      const resultadoAnalise = gerarResultadoAnaliseAleatorio();

      const fotoRes = await api.post("/fotos", {
        fk_id_pe: pe,
        url: urlAleatoria,
        data_foto: dataFoto,
        resultado_analise: resultadoAnalise,
      });

      const idFoto = fotoRes.data.id_foto;

      // Criar relatório
      const relatorioPayload = {
        fk_id_pe: pe,
        fk_id_foto: idFoto,
        deficiencia_cobre: normalizeString(probabilidadeDeficiencia) === "COBRE",
        deficiencia_manganes: normalizeString(probabilidadeDeficiencia) === "MANGANES",
        outros: normalizeString(probabilidadeDeficiencia) === "OUTROS",
        observacoes: relatorioTexto,
        data_analise: dataFoto,
      };

      const relatorioRes = await api.post("/relatorios", relatorioPayload);
      const idRelatorio = relatorioRes.data.id_relatorio;

      // Criar métrica IA com valores aleatórios
      const randomPercent = () => (Math.random() * 40 + 60).toFixed(2);

      const metricaPayload = {
        fk_id_relatorio: idRelatorio,
        data_avaliacao: dataFoto,
        acuracia: randomPercent(),
        precisao: randomPercent(),
        recall: randomPercent(),
        f1_score: randomPercent(),
        observacoes: `Métricas geradas automaticamente para análise de ${probabilidadeDeficiencia}.`,
      };

      await api.post("/metricas-ia", metricaPayload);

      // Atualizar status do Pé
      await api.put(`/pes/${pe}`, {
        situacao: status.replace("-", " "),
      });

      alert("Dados enviados e salvos com sucesso.");

      router.push("/dashboard"); // Redireciona para dashboard após sucesso
    } catch (error) {
      console.error("Erro ao enviar dados do scan:", error);
      alert("Erro ao enviar dados do scan. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!scanResult) {
    return <p>Nenhum resultado de escaneamento encontrado. Faça o upload primeiro.</p>;
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Resultados do Escaneamento</h2>

      <div className={styles.infoColumn}>
        <div className={styles.infoItem}>
          <strong>Probabilidade de Deficiência:</strong>
          <span
            className={
              normalizeString(probabilidadeDeficiencia) === "COBRE"
                ? styles.badgeCobre
                : normalizeString(probabilidadeDeficiencia) === "MANGANES"
                ? styles.badgeManganes
                : styles.badgeOutros
            }
          >
            {probabilidadeDeficiencia}
          </span>
        </div>

        <div className={styles.infoItem}>
          <strong>Porcentagem:</strong>
          <span className={styles.percentual}>
            {percentual ? `${percentual}%` : "N/A"}
            {percentual && (
              <span className={styles.percentCircle}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  className={styles.svgCircle}
                >
                  <path
                    className={styles.circleBackground}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#ddd"
                    strokeWidth="3"
                  />
                  <path
                    className={styles.circleProgress}
                    strokeDasharray={`${percentual} 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#d32f2f"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <span className={styles.percentSymbol}>%</span>
              </span>
            )}
          </span>
        </div>

        <div className={styles.infoItem}>
          <strong>Status:</strong>
          <select
            className={styles.selectInput}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="tratado">Tratado</option>
            <option value="nao-tratado">Não Tratado</option>
            <option value="sem-informacoes">Sem Informações</option>
          </select>
        </div>
      </div>

      <div className={styles.locationWrapper}>
        <strong className={styles.locationTitle}>Localização:</strong>

        <div className={styles.locationColumn}>
          <div className={styles.locationItem}>
            <strong>Talhão:</strong>
            <select
              className={styles.selectInput}
              value={talhao}
              onChange={(e) => setTalhao(e.target.value)}
            >
              <option value="">Selecionar</option>
              {talhoes.map((t) => (
                <option key={t.id_talhao} value={t.id_talhao}>
                  {t.nome || `Talhão ${t.id_talhao}`}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.locationItem}>
            <strong>Pé:</strong>
            <select
              className={styles.selectInput}
              value={pe}
              onChange={(e) => setPe(e.target.value)}
              disabled={!pes.length}
            >
              <option value="">Selecionar</option>
              {pes.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome} - {p.status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className={styles.relatorioSection}>
        <strong>Relatório:</strong>
        <textarea
          className={styles.textarea}
          value={relatorioTexto}
          onChange={(e) => setRelatorioTexto(e.target.value)}
          rows={4}
        />
      </div>

      <button
        className={styles.scanBtn}
        onClick={handleEnviarDadosScan}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar dados do scan"}
      </button>
    </section>
  );
}