# AI-Powered Todo List

A modern task management application that uses Google's Gemini AI to automatically break down your tasks into manageable subtasks. Built with React, TypeScript, and Tailwind CSS.

![Task Management with AI](https://user-images.githubusercontent.com/your-username/your-repo/screenshot.png)

## ✨ Features

- **Task Management**
  - Create and delete tasks
  - Mark tasks as complete/incomplete
  - Clean and intuitive user interface

- **AI Task Breakdown**
  - Powered by Google's Gemini AI
  - Automatically generates subtasks for complex tasks
  - Structured and actionable breakdowns

- **Modern Tech Stack**
  - React with TypeScript for type safety
  - Vite for lightning-fast development
  - Tailwind CSS for responsive design
  - Lucide icons for consistent UI

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- A Gemini API key ([Get one here](https://ai.google.dev/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ragellistiyono/todolist.git
cd todolist
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Technologies Used

- **Frontend Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **AI Integration:** Google Gemini API
- **Icons:** Lucide React

## 📝 Usage

1. **Adding Tasks**
   - Enter your task in the input field
   - Press Enter or click the Add button

2. **Breaking Down Tasks**
   - Click the "Generate Response" button on any task
   - The AI will analyze your task and create subtasks
   - Each subtask can be checked off independently

3. **Managing Tasks**
   - Use the checkbox to mark tasks as complete
   - Click the delete button to remove tasks
   - Track progress with visual completion indicators

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/ragellistiyono/todolist/issues).

## 📜 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.