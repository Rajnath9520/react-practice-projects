# Task Manager App

A modern, responsive todo application built with React and Tailwind CSS. Features a clean, professional interface with local storage persistence and smooth animations.

![Task Manager](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- ✅ **Add, Edit, and Delete Tasks** - Full CRUD operations for task management
- 🎯 **Task Filtering** - Filter by All, Pending, or Completed tasks
- 💾 **Local Storage** - Automatically saves tasks to browser storage
- 📊 **Task Statistics** - Real-time count of total, completed, and pending tasks
- 🎨 **Modern UI** - Clean, professional design with gradient backgrounds
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⌨️ **Keyboard Shortcuts** - Press Enter to add tasks quickly
- 🗑️ **Bulk Actions** - Clear all completed tasks with one click
- ✏️ **Inline Editing** - Edit tasks directly with save/cancel options
- 🌈 **Smooth Animations** - Polished transitions and hover effects

## 🚀 Demo

![App Screenshot](image.png)

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Next-generation frontend build tool
- **Local Storage API** - Browser storage for data persistence

## 📦 Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/react-core-projects/02-ToDo.git
   cd 02-ToDo
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure
```
task-manager-app/
├── src/
│   ├── Components/
│   │   ├── AddTodo.jsx      # Component for adding new tasks
│   │   └── ShowTodo.jsx     # Component for displaying task list
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles
│   └── main.jsx             # Application entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Usage

### Adding a Task
1. Type your task in the input field
2. Click "Add Task" button or press **Enter**
3. Task appears in the list

### Completing a Task
- Click the checkbox next to any task to mark it as complete
- Completed tasks appear with a strikethrough and greyed out

### Editing a Task
1. Hover over a task to reveal action buttons
2. Click the **Edit** icon (pencil)
3. Modify the text
4. Click **Save** (checkmark) or press **Enter**
5. Click **Cancel** (X) or press **Escape** to discard changes

### Deleting a Task
- Hover over a task and click the **Delete** icon (trash)

### Filtering Tasks
Use the filter tabs to view:
- **All** - Show all tasks
- **Pending** - Show only incomplete tasks
- **Completed** - Show only completed tasks

### Clearing Completed Tasks
- Click "Clear Completed" in the stats bar to remove all completed tasks at once

## ⚙️ Configuration

### Tailwind CSS
The app uses Tailwind CSS v4

### Vite
Build and development settings are in `vite.config.js`.

## 🔧 Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

```

## 🎨 Customization

```

### Modifying Max Tasks Display
In `App.jsx`, adjust the scrollable area height:
```jsx
className="p-6 max-h-[500px] overflow-y-auto"
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 Local Storage

Tasks are automatically saved to browser's local storage under the key `"todos"`. Data persists across browser sessions until manually cleared.

