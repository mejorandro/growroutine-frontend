# 🌱 GrowPulse Frontend

**GrowPulse Frontend** is the user-facing dashboard of the **GrowRoutine ecosystem**.  
It connects to the **GrowPulse Backend** API and renders a clean, modern interface to help professionals track their **daily growth pulse** — news, actions, streaks, and compounding progress.

---

## 🚀 Features
- 🎯 User input: **profession, sector, language, and daily focus**.
- 📰 Fetches **dynamic news & insights** from the backend:
  - AI for developers
  - Laws for lawyers
  - Creative trends for photographers
  - Recruitment trends for recruiters  
- 💡 Shows personalized **meaning & opportunities** for each profession.
- ⚡ Suggests a **daily micro-action (≤15 min)** tailored to the user’s role.
- 🔗 Generates bilingual **LinkedIn posts (English/Spanish)** ready to publish.
- 🛠️ Displays **3 mini-POC/portfolio ideas** for daily execution.
- 📈 Visualizes **streaks and compounding metrics** *(future roadmap)*.
- 🌐 Multi-language: English / Spanish.
- 💻 Built with **Next.js + TailwindCSS**, deployable to **Vercel**.

---

## 📂 Project Structure
- **pages/** → main entry point (`index.tsx`)  
- **components/** → UI components (`DailyReader.tsx`)  
- **lib/** → API client (`api.ts`)  
- **public/** → static assets  
- `package.json`, `README.md`  

---

## 🛠️ Tech Stack
- **Next.js 14** – React framework (SSR + app router ready)  
- **TailwindCSS** – utility-first styling  
- **TypeScript** – strict typing for reliability  
- **Chart.js / Recharts** (future) – habit & streak visualization  
- **Vercel** – deployment platform  

---

## ⚡ Run Locally

1. Clone the repo
```bash
git clone https://github.com/your-username/growpulse-frontend.git
cd growpulse-frontend
