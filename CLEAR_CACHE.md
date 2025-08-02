# Clear Browser Cache Instructions

If you're still seeing service worker errors, please follow these steps:

## Method 1: Browser Console
1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Paste and run this code:

```javascript
// Clear all service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
      console.log('Unregistered service worker:', registration);
    }
  });
}

// Clear all caches
if ('caches' in window) {
  caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        console.log('Deleting cache:', cacheName);
        return caches.delete(cacheName);
      })
    );
  }).then(() => {
    console.log('All caches cleared');
    location.reload();
  });
}
```

## Method 2: Browser Settings
1. Open Developer Tools (F12)
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Click "Clear Storage" or "Clear Site Data"
4. Check all boxes and click "Clear site data"
5. Refresh the page

## Method 3: Hard Refresh
- Chrome/Edge: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Firefox: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Safari: Cmd+Option+R (Mac)