import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import DailyMessagePage from './pages/DailyMessagePage';
import HowToFindUsPage from './pages/HowToFindUsPage';
import PartnersPage from './pages/PartnersPage';
import AddictionHelpPage from './pages/AddictionHelpPage';
import DonatePage from './pages/DonatePage';
import LegalInfoPage from './pages/LegalInfoPage';
import PrayerRequestPage from './pages/PrayerRequestPage';
import HowGodTreatsYouPage from './pages/HowGodTreatsYouPage';
import WhatWeBelievePage from './pages/WhatWeBelievePage';
import ListenAndWatchPage from './pages/ListenAndWatchPage';
import PastorPage from './pages/PastorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutUsPage />,
      },
      {
        path: 'daily-message',
        element: <DailyMessagePage />,
      },
      {
        path: 'how-to-find-us',
        element: <HowToFindUsPage />,
      },
      {
        path: 'partners',
        element: <PartnersPage />,
      },
      {
        path: 'addiction-help',
        element: <AddictionHelpPage />,
      },
      {
        path: 'donate',
        element: <DonatePage />,
      },
      {
        path: 'legal-info',
        element: <LegalInfoPage />,
      },
      {
        path: 'prayer-request',
        element: <PrayerRequestPage />,
      },
      {
        path: 'how-god-treats-you',
        element: <HowGodTreatsYouPage />,
      },
      {
        path: 'what-we-believe',
        element: <WhatWeBelievePage />,
      },
      {
        path: 'listen-and-watch',
        element: <ListenAndWatchPage />,
      },
      {
        path: 'pastor',
        element: <PastorPage />,
      },
    ],
  },
]);
