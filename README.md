# 💈 HairDay — Sistema de Agendamento para Barbearia

Aplicação Full-Stack para agendamento de horários em uma barbearia.
O frontend foi desenvolvido durante o curso Full Stack da Rocketseat (JavaScript + Webpack).
O backend foi implementado por mim com Node.js, Express, TypeScript e Zod (API REST, persistência em memória para desenvolvimento).

O sistema permite selecionar data, horário disponível e cliente, além de listar e cancelar agendamentos.

---

## 🖼️ Preview do projeto

### Tela principal

![Tela principal](./src/assets/projectImgs/projeto.png)

### Seleção de horário

![Seleção de horário](./src/assets/projectImgs/selecao.png)

### Lista de agendamentos

![Agendamentos](./src/assets/projectImgs/agendamentos.png)

---

## 🚀 Funcionalidades

- Seleção de data com calendário
- Listagem dinâmica de horários disponíveis
- Bloqueio automático de horários já agendados
- Agendamento com nome do cliente
- Listagem de agendamentos por período:
  - Manhã
  - Tarde
  - Noite
- Cancelamento de agendamentos
- Atualização automática da interface após alterações
- API própria em Express + TypeScript com validação via Zod

---

## 🛠️ Tecnologias utilizadas

- JavaScript (ES Modules)
- Webpack
- Babel
- Day.js
- HTML5
- CSS3
- Node.js
- Express
- TypeScript
- Zod

## ⚙️ Como executar o projeto

### 1️⃣ Instalar dependências

```bash
cd hairday-web
npm install

# novo terminal
cd ../hairday-api
npm install
```

### 2️⃣ Rodar o backend (API)

```bash
cd hairday-api
npm run dev
```

### 3️⃣ Rodar o frontend

```bash
cd hairday-web
npm run dev
```

## 👨‍💻 Autor

Lucas Moura

Estudante de Análise e Desenvolvimento de Sistemas  
Projeto do Curso Full Stack — Rocketseat
