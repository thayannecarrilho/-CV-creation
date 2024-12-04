import React, { useState } from "react";
import { Container, Title, Input, Textarea, SubContainer } from './styles';

const DadosPessoais = ({ dados, atualizarDados }) => {
  const [foto, setFoto] = useState(null);

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
        atualizarDados("foto", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Title>Dados Pessoais</Title>
      <Container>
        <SubContainer>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
          />
          <Input
            type="text"
            placeholder="Nome"
            value={dados.nome}
            onChange={(e) => atualizarDados("nome", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Objetivo Profissional"
            value={dados.cargo}
            onChange={(e) => atualizarDados("cargo", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Nacionalidade"
            value={dados.nacionalidade}
            onChange={(e) => atualizarDados("nacionalidade", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Estado Civil"
            value={dados.estcivil}
            onChange={(e) => atualizarDados("estcivil", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Idade"
            value={dados.idade}
            onChange={(e) => atualizarDados("idade", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Endereço"
            value={dados.endereco}
            onChange={(e) => atualizarDados("endereco", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Telefone"
            value={dados.telefone}
            onChange={(e) => atualizarDados("telefone", e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={dados.email}
            onChange={(e) => atualizarDados("email", e.target.value)}
          />
          <Textarea
            placeholder="Sobre Mim"
            value={dados.sobre}
            onChange={(e) => atualizarDados("sobre", e.target.value)}
          />
        </SubContainer>
      </Container>
    </>
  );
};

export default DadosPessoais;
