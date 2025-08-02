import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Clear any existing service workers and caches immediately
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}

// Clear all caches
if ('caches' in window) {
  caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

createRoot(document.getElementById("root")!).render(
  <App />
);
