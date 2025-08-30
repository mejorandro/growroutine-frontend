# 🌿 GrowPulse Frontend

⚠️ **Status:** Active development.  
The main intelligence and orchestration live in the **[GrowPulse Backend](https://github.com/mejorandro/growpulse-backend)**.  

---

## 🚧 About This Repo
The **GrowPulse Frontend** is a Next.js app designed to turn backend outputs into a **shareable, minimalistic blog experience**.  
It supports Markdown-based posts (`/posts`) and includes previews, author metadata, and image handling.  

At this stage:
- Blog engine is **running with static Markdown posts**.  
- Styling is minimal but functional.  
- Architecture is prepared to consume JSON APIs from the backend.  

---

## 🔗 Where to Look First
👉 Please visit the backend repository to see the **real intelligence engine**:  

**➡️ [GrowPulse Backend](https://github.com/mejorandro/growpulse-backend)**

The backend already provides:
- AI agent orchestration (**LangChain + LangGraph**)  
- Daily readings pipeline (news → meaning → actions → posts → POC ideas)  
- JSON API consumable by any frontend  
- Docker support for local or production deployment  

---

## ✨ Next Feature (In Progress)
We are building the first **dynamic component**:
- Users will choose their **profession, sector, and role**.  
- GrowPulse will use the backend agents to generate a **custom blog article** in real time.  
- Users can **add their name + email** to publish it into the documentation/blog feed.  

This will turn GrowPulse from a static reader into a **collaborative AI-powered publishing tool**.

---

## 🖼️ Planned Architecture
Even though still evolving, the architecture looks like this:  

![GrowPulse Frontend Architecture](docs/ft-architecture-diagram.png)

---

## 📌 Note for Visitors
If you’re evaluating this project (e.g., as a hiring manager or collaborator):  
- The backend is where the **real AI engine** lives.  
- This frontend is actively evolving into a **dynamic, role-aware blog generator**.  
- Long‑term goal: a smooth, scannable UI for sharing backend insights at scale.  

---
