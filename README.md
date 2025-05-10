# 💳 Credit App

A full-stack credit loan application system where users can apply for loans, verifiers can approve or reject them, and admins have full oversight.

---

## 🌐 Live Demo
(https://creditsea-loan-manager-seven.vercel.app/)

---

## 🚀 Features

* 👤 User Dashboard to apply and view loan applications
* 🕵️ Verifier Dashboard to review applications and change status
* 👨‍💼 Admin Dashboard to view all data
* 📅 Track created date of applications
* 🎨 Styled UI with React-Bootstrap
* 🔁 Status badges with color indicators

---

## 🧰 Tech Stack

### 🖥️ Frontend

* ⚛️ React
* 🧱 React-Bootstrap
* 📦 React Router DOM
* 🎨 Custom styling with CSS modules / Bootstrap classes

### 🖧 Backend

* 🟢 Node.js
* 🚂 Express.js
* 🗃️ MongoDB with Mongoose
* 🔁 RESTful API
* 🛡️ CORS enabled

---

## 📁 Folder Structure

```
credit-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
```

---

## 🛠️ Getting Started

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 API Endpoints

| Method | Endpoint                       | Description               |
| ------ | ------------------------------ | ------------------------- |
| GET    | /api/user                      | Get user loans            |
| POST   | /api/user                      | Create a loan application |
| PATCH  | /api/verifier/user/status/\:id | Update status             |

---

## 🧑‍💻 Roles

* 👤 User: Apply for loans
* 🕵️ Verifier: Verify or reject applications
* 👨‍💼 Admin: View all applications

---

## 🎨 Status Colors

* 🟡 Pending: `bg-warning`
* 🔴 Rejected: `bg-danger`
* 🟢 Approved: `bg-success`
* 🔵 Verified: `bg-primary`

---

## 📬 Contact

For feedback or contributions: [you@example.com](mailto:you@example.com)

---

## 📄 License

This project is licensed under the MIT License.
