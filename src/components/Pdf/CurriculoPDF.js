import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { StyledButton } from "../Formulário/styles";

// Ícones PNG
import phoneIcon from "../../assets/telefone.png";
import emailIcon from "../../assets/o-email.png";
import locationIcon from "../../assets/mapas-e-bandeiras.png";
import ageIcon from "../../assets/calendario.png";

const CurriculoPDF = ({ dados }) => {
  const DocumentoPDF = () => (
    <Document>
      <Page style={styles(dados.palette).page}>
        {/* Seção Esquerda */}
        <View style={styles(dados.palette).leftSection}>
          {dados.foto && <Image src={dados.foto} style={styles(dados.palette).foto} />}
          {dados.idade && (
            <View style={[styles(dados.palette).row, {marginTop: 15}]}>
              <Image src={ageIcon} style={styles(dados.palette).icon} />
              <Text style={styles(dados.palette).text}>{dados.nacionalidade}, {dados.estcivil}, {dados.idade}anos</Text>
            </View>
          )}
          {dados.telefone && (
            <View style={styles(dados.palette).row}>
              <Image src={phoneIcon} style={styles(dados.palette).icon} />
              <Text style={styles(dados.palette).text}>{dados.telefone}</Text>
            </View>
          )}
          {dados.email && (
            <View style={styles(dados.palette).row}>
              <Image src={emailIcon} style={styles(dados.palette).icon} />
              <Text style={styles(dados.palette).text}>{dados.email}</Text>
            </View>
          )}
          {dados.endereco && (
            <View style={[styles(dados.palette).row, {marginBottom: 15}]}>
              <Image src={locationIcon} style={styles(dados.palette).icon} />
              <Text style={[styles(dados.palette).text, {paddingRight: 20}]}>{dados.endereco}</Text>
            </View>
          )}

          {/* Informações Adicionais */}
          {dados.infos?.length > 0 && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Informações Adicionais</Text>
              {dados.infos.map((info, index) => (
                <View key={index}>
                  <Text style={styles(dados.palette).textEnter}>
                    {info.titulo}: {info.informacao}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Links */}
          {dados.links?.length > 0 && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Links</Text>
              {dados.links.map((link, index) => (
                <View key={index}>
                  <Text style={styles(dados.palette).textTitle}>{link.nome}:</Text>
                  <Text style={styles(dados.palette).linkText}>{link.url}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Idiomas */}
          {dados.idiomas?.length > 0 && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Idiomas</Text>
              {dados.idiomas.map((idioma, index) => (
                <Text key={index} style={styles(dados.palette).textEnter}>
                  {idioma.nome}: {idioma.nivel}
                </Text>
              ))}
            </View>
          )}

          {/* Referências */}
          {dados.referencias?.length > 0 && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Referências</Text>
              {dados.referencias.map((referencia, index) => (
                <View key={index}>
                  <Text style={styles(dados.palette).textTitle}>{referencia.nome}</Text>
                  <Text style={styles(dados.palette).text}>{referencia.cargo}</Text>
                  <Text style={styles(dados.palette).text}>{referencia.telefone}</Text>
                  <Text style={styles(dados.palette).linkText}>{referencia.email}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Seção Direita */}
        <View style={styles(dados.palette).rightSection}>
        <View>
          <Text style={styles(dados.palette).title}>{dados.nome}</Text>
          {dados.cargo && (
            <>
              <Text style={[styles(dados.palette).textTitle, { textAlign: "center" }]}>
                Objetivo Profissional:
              </Text>
              <Text style={[styles(dados.palette).text, { textAlign: 'center' }]}>
                {dados.cargo}
              </Text>
            </>
         )}
      </View>


          {/* Sobre Mim */}
          {dados.sobre && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Sobre Mim</Text>
              <Text style={styles(dados.palette).text}>{dados.sobre}</Text>
            </View>
          )}

          {/* Formação */}
          {dados.formacao?.length > 0 && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Formação</Text>
              {dados.formacao.map((formacao, index) => (
                <View key={index} style={styles(dados.palette).row}>
                  <View style={styles(dados.palette).columnLeft}>
                    <Text style={styles(dados.palette).text}>{formacao.nivel}</Text>
                    <Text style={styles(dados.palette).text}>
                      {formacao.periodoInicio} - {formacao.periodoFim}
                    </Text>
                  </View>
                  <View style={styles(dados.palette).columnRight}>
                    <Text style={styles(dados.palette).text}>
                      {formacao.instituicao}, {formacao.local}
                    </Text>
                    <Text style={styles(dados.palette).text}>{formacao.curso}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Experiência Profissional */}
          {dados.experiencias?.length > 0 && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Experiência Profissional</Text>
              {dados.experiencias.map((exp, index) => (
                <View key={index} style={styles(dados.palette).row}>
                  <View style={styles(dados.palette).columnLeft}>
                    <Text style={styles(dados.palette).text}>{exp.cargo}</Text>
                    <Text style={styles(dados.palette).text}>
                      {exp.periodoInicio} - {exp.periodoFim}
                    </Text>
                  </View>
                  <View style={styles(dados.palette).columnRight}>
                    <Text style={styles(dados.palette).text}>
                      {exp.empresa}, {exp.local}
                    </Text>
                    <Text style={styles(dados.palette).text}>{exp.descricao}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Cursos Complementares */}
          {dados.cursos?.length > 0 && (
            <View style={styles(dados.palette).section}>
              <Text style={styles(dados.palette).subtitle}>Cursos Complementares</Text>
              {dados.cursos.map((curso, index) => (
                <View key={index} style={styles(dados.palette).row}>
                  <View style={styles(dados.palette).columnLeft}>
                    <Text style={styles(dados.palette).text}>{curso.curso}</Text>
                    <Text style={styles(dados.palette).text}>
                      {curso.periodoInicio} - {curso.periodoFim}
                    </Text>
                  </View>
                  <View style={styles(dados.palette).columnRight}>
                    <Text style={styles(dados.palette).text}>
                      {curso.instituicao}, {curso.local}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );

  return (
    <StyledButton
      document={<DocumentoPDF />}
      fileName={`${dados.nome || "curriculo"}.pdf`}
    >
      Baixar Currículo
    </StyledButton>
  );
};


const styles = (palette) =>
  StyleSheet.create({
    columnLeft: {
      width: "40%",
      flexDirection: 'column',
      alignSelf: 'flex-start',
    },
    columnRight: {
      width: "60%",
      flexDirection: 'column',
      alignSelf: 'flex-start',
    },
    page: {
      display: "flex",
      flexDirection: "row",
      fontFamily: "Helvetica",
      fontSize: 12,
    },
    leftSection: {
      width: "40%",
      backgroundColor: palette[0],
      paddingHorizontal: 25,
      paddingVertical: 40,
    },
    rightSection: {
      backgroundColor: palette[1],
      width: "60%",
      paddingHorizontal: 25,
      paddingVertical: 40,
    },
    foto: {
      width: 120,
      height: 120,
      borderRadius: 50,
      marginBottom: 10,
      alignSelf: "center",
    },
    title: {
      fontSize: 20,
      color: `${palette[2]}`,
      textTransform: "uppercase",
      fontWeight: "900",
      textAlign: "center",
      marginBottom: 10,
    },
    subtitle: {
      borderBottom: `3px solid ${palette[2]}`,
      paddingBottom: 5,
      fontSize: 12,
      color: palette[2],
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: 4,
      marginTop: 10,
    },
    objetivo: {
      textAlign: "center",
      fontSize: 12,
      fontWeight: 900,
      marginBottom: 20,
    },
    textTitle: {
      textTransform: 'uppercase',
      fontSize: 10,
      fontWeight: "bold",
      wordBreak: "normal",
      display: "block",
    },
    textEnter: {
      fontSize: 10,
      textAlign: "justify",
      wordBreak: "normal",
      width: "100%",
      display: "block",
      marginBottom: 5,
    },
    text: {
      fontSize: 10,
      textAlign: 'justify',
      wordBreak: 'normal',
      display: "block",
      
    },
    linkText: {
      display: "block",
      cursor: "pointer",
      fontSize: 10,
      width: "100%",
      marginBottom: 10,
    },
    section: {
      padding: 5,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      width: 15,
      height: 15,
      marginRight: 8,
      marginVertical: 3,
    },
  });

export default CurriculoPDF;
