# J. Flores - Software Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. This portfolio showcases professional experience, skills, projects, and provides a contact form for potential clients and employers.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode Toggle**: Switch between light and dark themes
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Components**: Hover effects, smooth scrolling, and interactive elements
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🚀 Technologies Used

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and professional summary
3. **Skills**: Technical skills with progress bars and categories
4. **Projects**: Portfolio projects with filtering and detailed descriptions
5. **Experience**: Work history with achievements and technologies
6. **Contact**: Contact form and contact information
7. **Footer**: Social links and additional information

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd jflores-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form and info
│   ├── Experience.tsx  # Work experience timeline
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   └── ThemeToggle.tsx # Dark/light mode toggle
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── vite-env.d.ts       # Vite type definitions
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js` under the `colors` section.

### Content

Update the content in each component file to match your personal information:

- Personal details in `About.tsx`
- Skills and proficiency levels in `Skills.tsx`
- Project details in `Projects.tsx`
- Work experience in `Experience.tsx`
- Contact information in `Contact.tsx`

### Styling

Modify the Tailwind CSS classes in each component to adjust the visual appearance.

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🌙 Dark Mode

The portfolio includes a dark mode toggle that:

- Persists user preference in localStorage
- Provides smooth transitions between themes
- Maintains accessibility in both modes

## 🚀 Performance Features

- **Code Splitting**: Components are loaded as needed
- **Optimized Images**: Placeholder images for fast loading
- **Smooth Scrolling**: Native smooth scrolling behavior
- **Lazy Loading**: Animations trigger on scroll into view

## 📧 Contact Form

The contact form includes:

- Form validation
- Loading states
- Success feedback
- Responsive design
- Accessible form controls

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to reach out through the contact form on the website.

---

**Built with ❤️ using React, TypeScript, and Vite**
