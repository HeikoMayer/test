// Service worker for Web Notifications actions
self.addEventListener('notificationclick', function (event) {
    event.notification.close();

    if (event.action === 'open-example') {
        event.waitUntil(clients.openWindow('https://www.example.com'));
    } else {
        // User clicked the notification body (not an action button)
        event.waitUntil(clients.openWindow('https://www.example.com'));
    }
});
