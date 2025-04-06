# Todolist - React Native

Este é um aplicativo simples de **Todolist** desenvolvido no primeiro módulo do curso de React Native da Rocketseat. O app foi construído utilizando diversas funcionalidades do React Native e boas práticas de desenvolvimento com **TypeScript**.

## Funcionalidades

- **Adicionar Tarefas**: O usuário pode adicionar tarefas à lista de afazeres.
- **Remover Tarefas**: O usuário pode excluir tarefas concluídas ou indesejadas.
- **Marcar Tarefas como Concluídas**: As tarefas podem ser marcadas como feitas, alterando sua aparência.
- **Armazenamento Local**: As tarefas são armazenadas localmente no dispositivo (Android/iOS), utilizando **AsyncStorage** para persistência de dados.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **TypeScript**: Linguagem que oferece tipagem estática e autocompletar inteligente.
- **React Navigation**: Para navegação entre telas.
- **React Hooks**: Utilização dos hooks `useState` e `useEffect` para gerenciamento de estado e efeitos colaterais.
- **AsyncStorage**: Para salvar dados de forma persistente no dispositivo.
- **JSX**: Sintaxe utilizada para criação de componentes gráficos.

## Conceitos Abordados

1. **Imutabilidade**: Trabalhamos com dados imutáveis, ou seja, ao invés de modificar diretamente os estados, criamos novas versões dos dados, preservando o estado anterior.
2. **Gerenciamento de Estados**: Gerenciamos o estado da aplicação com o hook `useState` para lidar com a lista de tarefas.
3. **Desenvolvimento de Componentes Gráficos com JSX**: Utilizamos JSX para criar interfaces de usuário dinâmicas e interativas.
4. **Armazenamento em Arquivos Android/iOS**: Usamos o `AsyncStorage` para persistir os dados entre as sessões do aplicativo.
5. **Boas Práticas de Programação para TypeScript**: Estruturamos o código com boas práticas de TypeScript, garantindo tipos adequados e melhor manutenção.
6. **Uso dos Hooks `useState` e `useEffect`**: `useState` para gerenciar o estado das tarefas, e `useEffect` para efeitos colaterais, como a leitura de tarefas armazenadas ao iniciar o aplicativo.
7. **Criação de Lista em Tempo de Execução**: A lista de tarefas é criada dinamicamente com base nas entradas do usuário.

## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/todolist-react-native.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd todolist-react-native
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o aplicativo no seu emulador ou dispositivo físico:
    - Para Android:
      ```bash
      npx react-native run-android
      ```
    - Para iOS:
      ```bash
      npx react-native run-ios
      ```

## Captura de Tela

Aqui está uma captura de tela do aplicativo em funcionamento:

![Todolist App Screenshot](https://github.com/user-attachments/assets/4567add2-d32d-4678-b903-15bb97a5769c)

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch para a sua modificação (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Envie para o branch principal (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
