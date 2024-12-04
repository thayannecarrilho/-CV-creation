import React, { useState, useCallback } from "react";
import DadosPessoais from "./DadosPessoais";
import SecaoDinamica from "./SecaoDinamica";
import CurriculoPDF from "../Pdf/CurriculoPDF";
import {Form} from './styles'

const Formulario = () => {
  const [dados, setDados] = useState({
    nome: "",
    cargo: "",
    endereco: "",
    telefone: "",
    email: "",
    sobre: "",
    cma: "",
    cpf: "",
    codigoANAC: "",
    links: [],
    idiomas: [],
    referencias: [],
    experiencias: [],
    formacao: [],
    cursos: [],
    infos: [],
    palette: ["#6095be", "#fff", "#11097c"],
  });

  const atualizarDados = useCallback((campo, valor) => {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  }, []);

  const atualizarPalette = useCallback((index, valor) => {
    setDados((prev) => {
      const novaPalette = [...prev.palette];
      novaPalette[index] = valor;
      return { ...prev, palette: novaPalette };
    });
  }, []);

  const renderizarSecaoDinamica = (titulo, campo, placeholders) => (
    <SecaoDinamica
      titulo={titulo}
      campo={campo}
      dados={dados[campo] || []}
      atualizarDados={atualizarDados}
      placeholders={placeholders}
    />
  );

  return (
    <Form>
      <DadosPessoais dados={dados} atualizarDados={atualizarDados} />
      {renderizarSecaoDinamica("Informações Adicionais", "infos", {
        titulo: "Título",
        informacao: "Informação",
      })}
      {renderizarSecaoDinamica("Links", "links", {
        nome: "Nome do Link",
        url: "URL",
      })}
      {renderizarSecaoDinamica("Idiomas", "idiomas", {
        nome: "Idioma",
        nivel: "Nível",
      })}
      {renderizarSecaoDinamica("Referências", "referencias", {
        nome: "Nome",
        cargo: "Cargo",
        telefone: "Telefone",
        email: "Email",
      })}
      {renderizarSecaoDinamica("Formação", "formacao", {
        nivel: "Nível",
        instituicao: "Instituição",
        local: "Local",
        periodoInicio: "Início",
        periodoFim: "Fim",
        curso: "Curso",
      })}
      {renderizarSecaoDinamica("Cursos Complementares", "cursos", {
        instituicao: "Instituição",
        local: "Local",
        periodoInicio: "Início",
        periodoFim: "Fim",
        curso: "Curso",
      })}
      {renderizarSecaoDinamica("Experiência Profissional", "experiencias", {
        cargo: "Cargo",
        empresa: "Empresa",
        local: "Local",
        periodoInicio: "Período Início",
        periodoFim: "Período Fim",
        descricao: "Descrição",
      })}
      <div style={{ marginTop: "20px" }}>
        <h3>Escolha a Paleta de Cores</h3>
        {dados.palette.map((cor, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>
              Cor {index + 1}:
            </label>
            <input
              type="color"
              value={cor}
              onChange={(e) => atualizarPalette(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <CurriculoPDF dados={dados} />
    </Form>
  );
};

export default Formulario;
