# Desafio Front-end Eletromídia - Rastreador de Endereços IP

## Sobre o Teste

O desafio dado foi construir este aplicativo Rastreador de Endereços de IPs e fazê-lo parecer o mais próximo possível do design proposto pelo recrutador. Para obter os locais do endereço IP, eu usei a [API de geolocalização por IP da IPify](https://geo.ipify.org/). Para gerar o mapa, eu usei o [LeafletJS](https://leafletjs.com/) através da lib [react-leaflet](https://react-leaflet.js.org/).

### Para rodar este projeto

- Você precisa de uma chave de API [da IPify](https://geo.ipify.org/) para chamar a api;
- Criar um arquivo `.env`, e nele colocar sua chave da seguinte forma: `REACT_APP_ACCESS_TOKEN=<Sua Chave da IPify>`;
- Executar `yarn install` para instalar as dependências;
- Finalmente, executar o projeto com `yarn start`;
- Para ver funcionando, você pode começar com o endereço de IP do Google: `8.8.8.8`

### Este projeto foi feito com:
- Typescript;
- Styled-Components;
- [react-leaflet](https://react-leaflet.js.org/);

### Próximos passos:

- A responsividade ainda não está ideal. Pretendo ajustar para o projeto ficar visualmente melhor.
- Falta executar testes. Pretendo usar o Jest para isso.
- Validaçao de dados. Hoje o usuário pode colocar qualquer valor. Pretendo ajustar para apenas aceitar endereços de IP.
