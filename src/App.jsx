import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Home from "./Pages/Home";
import "@fontsource/el-messiri";
import "@fontsource/el-messiri/400.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useTranslation } from "react-i18next";
import api from "./services/api";
import Loading from "./Components/Loading";

// Lazy load pages for code splitting
const Journeys = lazy(() => import("./Pages/Journeys"));
const About = lazy(() => import("./Pages/About us"));
const Blog = lazy(() => import("./Pages/Blogs"));
const MyJourneys = lazy(() => import("./Pages/My Journeys"));
const FAQ = lazy(() => import("./Pages/FAQ"));
const Contact = lazy(() => import("./Pages/Contact us"));
const Card_page = lazy(() => import("./Components/Card_page"));
const Auth = lazy(() => import("./Pages/Auth"));
const Profile = lazy(() => import("./Pages/Profile"));
const BookForm = lazy(() => import("./Pages/BookForm"));
function App() {
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [isLanguageChanging, setIsLanguageChanging] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (token) {
          const response = await api.getProfile();
          if (response.data && response.data.data) {
            setUserData(response.data.data);
          }
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      } finally {
        setLoadingUser(false);
      }
    };
    fetchUserData();
  }, []);

  // Existing: route change loading
  useEffect(() => {
    setIsRouteChanging(true);
    const timer = setTimeout(() => {
      setIsRouteChanging(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // NEW: language change loading
  useEffect(() => {
    setIsLanguageChanging(true);
    const timer = setTimeout(() => {
      setIsLanguageChanging(false);
    }, 300); // adjust delay as needed
    return () => clearTimeout(timer);
  }, [i18n.language]);

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('userToken')?.trim();
    return token ? children : <Navigate to="/auth" replace />;
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      if (sessionStorage.getItem('scrollToContact')) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
  };
  return (
    <>
      <ScrollToTop />
      {loadingUser && <Loading />}
      <Navbar userData={userData} />
      {!loadingUser && (
        <>
          {(isRouteChanging || isLanguageChanging) && <Loading />}
          {!(isRouteChanging || isLanguageChanging) && (
            <Suspense fallback={<Loading />}>
              <Routes className="theRoute">
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/journeys" element={<Journeys />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/blogs/:slug" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/cardpage/:id" element={<Card_page />} />
                <Route path="/myjourneys" element={<ProtectedRoute><MyJourneys /></ProtectedRoute>} />
                <Route path="/order/cardpage/:id" element={<Card_page />} />

                <Route path="/book" element={<ProtectedRoute><BookForm /></ProtectedRoute>} />
                <Route path="/book/:tripId" element={<ProtectedRoute><BookForm /></ProtectedRoute>} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          )}
        </>
      )}
      <Footer />
    </>
  );
}

export default App;