import React from "react";
import { Container, Title, Input, Textarea, Button, SubContainer } from "./styles";

const SecaoDinamica = ({ titulo, dados = [], atualizarDados, campo, placeholders }) => {
  const adicionarItem = () => {
    const novoItem = Object.keys(placeholders).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    atualizarDados(campo, [...dados, novoItem]);
  };

  const atualizarItem = (index, subcampo, valor) => {
    const novosDados = [...dados];
    novosDados[index][subcampo] = valor;
    atualizarDados(campo, novosDados);
  };

  const removerItem = (index) => {
    const novosDados = dados.filter((_, i) => i !== index);
    atualizarDados(campo, novosDados);
  };

  return (
    <>
      <Title>{titulo}</Title>
      <Container>
        {dados.map((item, index) => (
          <SubContainer key={index}>
            {Object.keys(placeholders).map((subcampo) => (
              subcampo === "descricao" ? (
                <Textarea
                  key={subcampo}
                  placeholder={placeholders[subcampo]}
                  value={item[subcampo]}
                  onChange={(e) => atualizarItem(index, subcampo, e.target.value)}
                />
              ) : (
                <Input
                  key={subcampo}
                  type="text"
                  placeholder={placeholders[subcampo]}
                  value={item[subcampo]}
                  onChange={(e) => atualizarItem(index, subcampo, e.target.value)}
                />
              )
            ))}
            <Button type="button" onClick={() => removerItem(index)}>Remover</Button>
          </SubContainer>
        ))}
        <Button type="button" onClick={adicionarItem}>Adicionar</Button>
      </Container>
    </>
  );
};

export default SecaoDinamica;
