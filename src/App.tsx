import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { AdminLayout } from "./components/layout/AdminLayout";

// Public Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Companies from "./pages/Companies";
import Tokens from "./pages/Tokens";
import Library from "./pages/Library";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Index";
import Wallet from "./pages/dashboard/Wallet";
import Favorites from "./pages/dashboard/Favorites";
import DashboardProjects from "./pages/dashboard/Projects";
import DashboardCompanies from "./pages/dashboard/Companies";
import Networking from "./pages/dashboard/Networking";

// Admin Pages
import AdminDashboard from "./pages/admin/Index";
import AdminUsers from "./pages/admin/Users";
import AdminProjects from "./pages/admin/Projects";
import AdminCompanies from "./pages/admin/Companies";
import AdminTokens from "./pages/admin/Tokens";
import AdminTransactions from "./pages/admin/Transactions";
import AdminLogs from "./pages/admin/Logs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:slug" element={<CompanyProfile />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/library" element={<Library />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/profile/:id" element={<Profile />} />
          
          {/* Profile Routes */}
          <Route path="/profile/settings" element={<Settings />} />
          
          {/* Auth Routes */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="projects" element={<DashboardProjects />} />
            <Route path="companies" element={<DashboardCompanies />} />
            <Route path="networking" element={<Networking />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="companies" element={<AdminCompanies />} />
            <Route path="tokens" element={<AdminTokens />} />
            <Route path="transactions" element={<AdminTransactions />} />
            <Route path="logs" element={<AdminLogs />} />
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
