# Data Fetch - Beautiful React API Component

A modern, visually stunning React component for fetching and displaying user data and comments from JSONPlaceholder API. Features clean design, smooth animations, and an intuitive tab-based interface.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🎨 Features

### Visual Design
- **Gradient Background**: Eye-catching purple-pink-blue gradient
- **Glassmorphism Cards**: Modern frosted glass effect with backdrop blur
- **Smooth Animations**: Staggered card animations and hover effects
- **Responsive Layout**: Adapts seamlessly from mobile to desktop
- **Color-Coded Avatars**: Dynamic circular avatars with user initials

### User Experience
- **Tab Navigation**: Switch between Users, Comments, and Manual Fetch modes
- **Loading Skeletons**: Beautiful placeholder animation while data loads
- **Error Handling**: Graceful error states with clear messaging
- **Interactive Elements**: Hover effects, scale transforms, and smooth transitions
- **Rich Information Display**: Icons, badges, and organized data presentation

### Functionality
- **Automatic Data Fetching**: Users and comments load on component mount
- **Manual Fetch Mode**: Interactive button to fetch data on-demand
- **Parallel API Calls**: Efficient Promise.all() implementation
- **Error Recovery**: Robust try-catch error handling
- **Loading States**: Clear feedback during data fetching

## 📦 Installation

### Prerequisites
- React 18+
- Tailwind CSS v4


## 🎯 Component Structure

### State Management

```javascript
const [users, setUsers] = useState([]);           
const [comments, setComments] = useState([]);  
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);     
const [activeTab, setActiveTab] = useState("users");
const [manualUsers, setManualUsers] = useState([]);
const [hasFetched, setHasFetched] = useState(false);
```

### API Endpoints

The component fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/):

- **Users**: `https://jsonplaceholder.typicode.com/users/`
- **Comments**: `https://jsonplaceholder.typicode.com/comments`

## 📱 Responsive Breakpoints

The component uses Tailwind's responsive design system:

- **Mobile** (< 768px): 1 column grid
- **Tablet** (768px - 1024px): 2 column grid
- **Desktop** (> 1024px): 3 column grid


## 🎭 Component Tabs

### 1. Users Tab (Auto-loaded)
- Displays user profiles with avatars
- Shows name, email, company, and city
- Color-coded with ID badges

### 2. Comments Tab (Auto-loaded)
- Shows comment cards with metadata
- Displays comment ID, title, email, and body
- Limited to 6 comments for performance

### 3. Manual Fetch Tab
- Interactive fetch button
- On-demand data loading
- Shows additional website information

## 🌟 Best Practices

1. **Performance**: Component uses `Promise.all()` for parallel API calls
2. **Loading States**: Skeleton screens provide better UX during loading
3. **Error Recovery**: Clear error messages with retry capability
4. **Accessibility**: Semantic HTML and proper ARIA labels recommended
5. **Responsive**: Mobile-first design approach


## 🔮 Future Enhancements

Potential improvements you could add:

- [ ] Search/filter functionality
- [ ] Pagination or infinite scroll
- [ ] Sort options (by name, email, etc.)
- [ ] Individual user detail modal
- [ ] Dark mode toggle
- [ ] Export data to CSV/JSON
- [ ] Favorites/bookmark system
- [ ] Real-time data updates (WebSocket)

## 🤝 Contributing

Feel free to fork, modify, and use this component in your projects!

### Making Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- **JSONPlaceholder** - Free fake API for testing and prototyping
- **Tailwind CSS** - Utility-first CSS framework
- **React** - JavaScript library for building user interfaces


## 🎉 Demo

To see the component in action:

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173` in your browser

---

**Made with ❤️ and React** | Happy Coding! 🚀