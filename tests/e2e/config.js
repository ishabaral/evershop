const config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@admin.com',
    adminPassword: process.env.ADMIN_PASSWORD || 'a1234578',
    assets: './e2e/filesForUpload'
}

module.exports = config;