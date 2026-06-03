# Bedouin Trails - Tourism Management System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=fff)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-007ACC?style=for-the-badge&logo=i18next&logoColor=white)

A modern, multilingual tourism management platform for booking and managing desert safari adventures in Siwa Oasis, Egypt. This React-based application provides a comprehensive solution for tourists to explore, book, and manage their desert safari experiences.

## 🌟 Features

### 🎯 Core Functionality
- **Multilingual Support**: Full internationalization with 9 languages (Arabic, English, French, German, Italian, Spanish, Portuguese, Chinese, Swedish)
- **User Authentication**: Complete auth system with registration, login, password reset, and profile management
- **Trip Management**: Browse, search, and book desert safari trips with detailed information
- **Booking System**: Secure booking flow with order history and management
- **Content Management**: Blog system for articles and news updates
- **FAQ System**: Comprehensive question and answer system for common inquiries

### 🎨 User Experience
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Image Gallery**: Rich visual content with optimized loading
- **Interactive Elements**: Smooth animations and transitions
- **Real-time Updates**: Dynamic content loading and updates
- **Accessibility**: Screen reader friendly and keyboard navigation

### 🔧 Technical Features
- **Modern Stack**: Built with React 19, Vite, and modern JavaScript
- **State Management**: Efficient state handling with React hooks
- **API Integration**: RESTful API communication with error handling
- **Form Validation**: Client-side validation with user feedback
- **Performance Optimized**: Code splitting and caching

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohanad66/Tourism-Project.git
   cd Tourism-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   VITE_API_BASE_URL=https://bedouintrails.com/api/public/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port specified in the terminal)

## 📁 Project Structure

```
Tourism-Project/
├── public/                    # Static assets
│   ├── img/                   # Project images
│   ├── robots.txt            # SEO robots file
│   └── sitemap.xml           # Site map
├── src/
│   ├── Components/           # Reusable UI components
│   │   ├── Card/            # Trip card component
│   │   ├── Carousel/        # Image and content carousel
│   │   ├── Navbar/          # Navigation component
│   │   ├── Footer/          # Footer component
│   │   └── ...
│   ├── Pages/               # Main page components
│   │   ├── Home/           # Landing page
│   │   ├── Journeys/       # Trip listings
│   │   ├── Auth/           # Authentication pages
│   │   ├── Profile/        # User profile
│   │   └── ...
│   ├── services/           # API service layer
│   │   └── api.js         # API client configuration
│   ├── utils/             # Utility functions
│   │   └── sweetAlert.js  # Alert utilities
│   ├── assets/            # Component-specific assets
│   └── i18n.js           # Internationalization setup
├── package.json           # Project dependencies
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🌐 Available Languages

The application supports the following languages:
- 🇸🇦 Arabic (Default)
- 🇬🇧 English
- 🇫🇷 French
- 🇩🇪 German
- 🇮🇹 Italian
- 🇪🇸 Spanish
- 🇵🇹 Portuguese
- 🇨🇳 Chinese
- 🇸🇪 Swedish

Language selection is automatically detected based on browser settings and can be changed in the application interface.

## 🎯 Key Pages

### Home Page (`/`)
- Hero section with stunning desert imagery
- Featured trips showcase
- Activity highlights (ATV rides, parties, therapeutic lakes)
- Blog section with latest articles
- FAQ section with common questions

### Journeys (`/journeys`)
- Browse all available desert safari trips
- Search and filter functionality
- Trip details with images, descriptions, and pricing
- Booking integration

### Authentication (`/auth`)
- User registration with email verification
- Secure login system
- Password reset functionality
- OTP-based verification

### Profile (`/profile`)
- User account management
- Personal information editing
- Password change functionality
- Booking history and management

### My Journeys (`/myjourneys`)
- User's booked trips and experiences
- Order status tracking
- Review and rating system

## 🔌 API Integration

The application integrates with a RESTful API located at:
`https://bedouintrails.com/api/public/api`

### Key API Endpoints
- `GET /home` - Home page data (sliders, articles, trips, stats)
- `GET /traps` - All available trips
- `GET /traps/{id}` - Individual trip details
- `POST /login` - User authentication
- `POST /register` - User registration
- `GET /profile` - User profile data
- `POST /profile` - Profile updates
- `GET /my-orders` - User's booking history

## 🛠️ Development

### Building for Production
```bash
npm run build
```

### Previewing Production Build
```bash
npm run preview
```

### Code Quality
```bash
npm run lint
```

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and Vite
- Internationalization powered by i18next
- Styling with Sass/SCSS
- API integration with Axios
- Icons from Lucide React and React Icons

## 📞 Contact

For support or questions, please contact:
- **Email**: info@bedouintrails.com
- **WhatsApp**: +20 10 02717380

---

**Bedouin Trails** - Your gateway to unforgettable desert adventures in Siwa Oasis, Egypt.