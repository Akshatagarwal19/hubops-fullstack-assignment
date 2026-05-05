# 🚀 Services Platform (Full Stack Application)

A production-oriented full-stack application demonstrating **scalable backend architecture, API design, and SSR-based frontend rendering**.

---

## 🧠 Overview
This project showcases a **real-world full-stack architecture** where a backend API serves data to a server-rendered frontend.

It focuses on:
- Clean backend structure  
- SEO-friendly frontend (SSR)  
- Scalable and maintainable design  

---

## 🛠 Tech Stack

### Backend
- Node.js  
- Express.js  
- Layered architecture (routes, controllers, middleware, data layer)

### Frontend
- Next.js (App Router)  
- React (Server Components)  
- CSS Modules  

### Deployment
- Frontend: Vercel  
- Backend: Render  

---

## ⚙️ Key Features

- 📡 REST API for services data  
- ⚡ Server-Side Rendering (SSR) for SEO optimization  
- 🧱 Layered backend architecture for maintainability  
- 🌐 Environment-based configuration  
- ❤️ Health check endpoint for production readiness  

---

## 🧩 Architecture Highlights

### 🔹 Separation of Concerns
Frontend and backend are independent applications:
- Enables scalability  
- Allows reuse of backend APIs  
- Simulates real production systems  

---

### 🔹 Backend Structure
```
routes/ → API endpoints  
controllers/ → Business logic  
data/ → Data abstraction  
middleware/ → Error handling  
```

---

### 🔹 SSR for Performance & SEO
The `/services` page is server-rendered:
- Improves SEO  
- Faster initial load  
- Better user experience  

---

## 🔗 API Endpoints

### GET `/api/services`
Returns list of services

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "Brand Strategy",
      "description": "Strategic positioning and messaging"
    }
  ]
}
```

---

### GET `/api/health`
Health check endpoint

---

## 🚀 Live Demo

- 🌐 Frontend: https://hubops-fullstack-assignment.vercel.app/services  
- 🔗 API: https://hubops-fullstack-assignmentn.onrender.com/api/services  

---

## ⚡ Local Setup

### Clone repo
```bash
git clone https://github.com/Akshatagarwal19/hubops-fullstack-assignment.git
cd hubops-fullstack-assignment
```

### Backend
```bash
cd Backend
npm install
npm run dev
```

### Frontend
```bash
cd Frontend
npm install
```

Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run:
```bash
npm run dev
```

---

## 📈 Future Improvements

- Database integration (MongoDB / PostgreSQL)  
- Pagination & filtering  
- Authentication & authorization  
- Redis caching  
- Logging & monitoring  

---

## 🎯 What This Project Demonstrates

- Full-stack development skills  
- Backend API design & structuring  
- Understanding of scalable architecture  
- SSR-based frontend development  
- Production-ready thinking  

---
