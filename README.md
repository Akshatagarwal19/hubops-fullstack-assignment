# HubOps Full Stack Evaluation Task

This project is a production-oriented full-stack feature implementation for the HubOps Full Stack Developer evaluation.

It consists of:

- A Node.js + Express backend exposing a services API
- A Next.js (App Router) frontend rendering a SEO-friendly `/services` page
- Deployment-ready configuration with environment-based API integration

The goal was to build a clean, maintainable, scalable full-stack feature rather than a prototype.
## Tech Stack

### Frontend
- Next.js (App Router)
- React (Server Components for SSR)
- CSS Modules for scoped styling
- Deployed on Vercel

### Backend
- Node.js
- Express.js
- Layered architecture (routes, controllers, data, middleware)
- Health check endpoint for production readiness
- Deployed on Render

### Dev & Deployment
- Environment variables for API configuration
- GitHub for version control

## Architecture & Design Decisions

### 1. Separation of Frontend and Backend

The frontend and backend were intentionally developed as separate applications to simulate a real-world production architecture. This allows:

- Independent deployment and scaling
- Clear separation of concerns
- Backend API reuse for mobile or other clients
- Easier future migration to microservices if required

### 2. Layered Backend Structure

The backend follows a layered structure:

- `routes/` – API route definitions
- `controllers/` – Business logic
- `data/` – Data source abstraction
- `middleware/` – Centralized error handling

This structure improves maintainability and allows easy extension to database-driven implementations in the future.

### 3. Server-Side Rendering (SSR) for SEO

The `/services` page uses Next.js Server Components to fetch data at request time. This ensures:

- Search engines receive fully rendered HTML
- Better SEO performance compared to client-side rendering
- Improved perceived load performance

Metadata is defined using Next.js `metadata` export for proper SEO optimization.

### 4. Environment-Based Configuration

API URLs are managed using environment variables (`NEXT_PUBLIC_API_URL`) to ensure flexibility across development and production environments.

This avoids hardcoding and supports scalable deployments.
## API Endpoints

### GET /api/services

Returns a list of available services.

**Response Format:**

```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "Brand Strategy",
      "description": "Strategic positioning and messaging for B2B brands."
    }
  ]
}
```
This endpoint currently uses a static data source but is structured to support database integration in future iterations.

### GET /api/health
Health check endpoint for monitoring and deployment validation.

```markdown
**Response Example:**

```json
{
  "status": "OK",
  "uptime": 123.456,
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```
This endpoint can be used for uptime monitoring and infrastructure health checks.

## Scalability & Production Considerations

Although this implementation uses static data for simplicity, the architecture is designed to scale.

### 1. Database Integration

The `data/` layer abstracts the data source. Replacing static arrays with a database (PostgreSQL, MongoDB, etc.) would require minimal changes to the controller layer.

### 2. API Versioning

For production environments, API versioning (e.g., `/api/v1/services`) would be introduced to prevent breaking changes and allow backward compatibility.

### 3. Caching Strategy

For performance optimization:
- CDN caching could be implemented for static content.
- Backend responses could be cached using Redis for high-traffic environments.

### 4. Pagination & Filtering

The `/api/services` endpoint can be extended with:
- Pagination
- Filtering
- Sorting

This would support scalability as the service catalog grows.

### 5. Error Handling & Logging

A centralized error middleware has been implemented. In a production environment, structured logging (e.g., Winston or Pino) and monitoring tools (e.g., Prometheus, Datadog) would be added.

### 6. Security Considerations

For production:
- Rate limiting would be added to prevent abuse.
- Input validation middleware would be introduced.
- CORS configuration would be restricted to trusted origins.

## Local Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Akshatagarwal19/hubops-fullstack-assignment.git
cd hubops-fullstack-assignment

```
### 2. Setup Backend

```bash
cd Backend
npm install
npm run dev

```
Backend runs at: 

```bash
http://localhost:5000

```
### 3. Setup Frontend

```bash
cd Frontend
npm install
```

Create .env.local file inside Frontend/:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Then Run

```bash
npm run dev
```

Frontend runs at: 
```bash
http://localhost:3000/services
```

---

## Live Deployment

Frontend (Vercel):
https://hubops-fullstack-assignment.vercel.app/services

Backend (Render):
https://hubops-fullstack-assignmentn.onrender.com/api/services

## Final Notes

This implementation focuses on clean architecture, maintainability, and production-readiness rather than overengineering.

The goal was to demonstrate:

- Structured backend design
- Proper separation of concerns
- SEO-aware frontend implementation using SSR
- Scalable architecture decisions
- Deployment readiness

Further improvements in a real-world production system would include authentication, database integration, logging, monitoring, and automated testing.
