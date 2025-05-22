# 🧠 Lumen.Ai : AI PDF Notes Maker📄

**Lumen.Ai 🧠📄** lets you upload PDFs 📤, auto-generate notes 📝, format them like Word 🖋️, and chat 💬 with AI to get smart, summarized answers ✍️. Study faster, stay organized, and learn smarter with your personal AI-powered study assistant 🚀📚.

An intelligent **AI-powered PDF Note Maker** built with **Next.js**, **Convex**, **Tailwind CSS**, and **Clerk Authentication**. It allows users to upload PDF files, view them, and generate **summarized notes & make it Easy to understand** using **Google Gemini AI**.

---

## 📌 **Overview**

This project is designed to help students and professionals save time and boost productivity. By uploading a PDF, users can:
- Read and preview the file
- Generate summarized content
- Create notes for self-study
- Collaborate with real-time data sync (thanks to Convex!)

## 🚀 **Features**

- 📤 Upload and view PDF files
- ✍️ AI-generated note-making with Gemini
- 📚 Make easy Notes from content & use AI to Generate Answers from Content
- 🔐 Secure login/signup with Clerk Authentication
- ⚡ Real-time updates using Convex
- 🎯 Clean and responsive UI with Tailwind CSS

## 🧰 **Tech Stack**

| Layer         | Tech Used      |
|---------------|----------------|
| Frontend      | **Next.js**    |
| Styling       | **Tailwind CSS** |
| Backend       | **Convex**     |
| Auth          | **Clerk Auth**      |
| AI Engine     | **Google Gemini API** |

## 📦 **Feel Free to Use This Project**

Follow these steps to run this project on your local machine:

### 🖥️ 1. Clone the Repository

```bash
git clone https://github.com/harpalmodasiya/Ai-PDF-Note-Making-App.git
cd Ai-PDF-Note-Making-App
```

### 📁 2. Install Dependencies

💡 Power Up Your Backend with Convex!
Kickstart your Convex journey using my referral link and build reactive apps with ease – no backend hassle!
🔗 Referral Link: https://convex.dev/referral/HARPAL4264 🚀✨

```bash
# install node

npm install

# install convex

npm install convex
```
### 🔐 3. Create Environment Files

📁 .env File (COPY & PASTE this all into Your File)

```bash
CONVEX_DEPLOYMENT= 
NEXT_PUBLIC_CONVEX_URL= #YOUR CONVEX URL

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= #YOUR PUBLIC CLERK KEY
CLERK_SECRET_KEY= #YOUR CLERK SECRET KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_GEMINI_API_KEY= YOUR GOOGLE GEMINI API

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL="/dashboard"
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL="/dashboard"
NEXT_PUBLIC_CLERK_SIGN_OUT_FORCE_REDIRECT_URL="/"

EMAIL_USER= #YOUR EMAIL
EMAIL_USER2=   # optional
EMAIL_PASS= #YOUR PASSWORD

```

📁 env.local (COPY & PASTE this all into Your File)

```bash
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL= #YOUR CONVEX URL
GEMINI_API_KEY= #YOUR GEMINI API
```

### ▶️ 4. Run the Project

```bash
npx convex dev
npm run dev
```
Follow This all Steps and BOOM 💥 Your Full Stack Ai Powered PDF Note Maker are live on your device localhost:3000

## 👥 Who Can Use This?

🧑‍🎓 Students
👩‍💼 Researchers
🧑‍🏫 Teachers
👨‍💻 Developers

Anyone who wants to quickly summarize, review, and study content from PDF documents!

## 🤝 Contributing

We welcome contributions with open arms! Whether you're fixing bugs, improving the UI, or adding new features — your help makes this project even better.

Fork it 🔱 | Star it ⭐ | Clone it 📥 | Code it 💻 | Pull it 🔁

## 🛡️ License

This project is licensed under the MIT License — feel free to use, modify, and distribute with proper credit. 🚀

---

### Made with ❤️, ☕ & 💻 by Harpal Modasiya — turning ideas into code!  😎

<img width="950" alt="Image" src="https://github.com/user-attachments/assets/2f2b767c-bf6a-42e2-b99e-9966b2892e22" />

<img width="950" alt="Image" src="https://github.com/user-attachments/assets/7d418b94-c3fd-4522-9b9a-b3a1e79dbe95" />

<img width="959" alt="Image" src="https://github.com/user-attachments/assets/6615e56d-c64e-4197-a3af-29969fe32bd9" />
