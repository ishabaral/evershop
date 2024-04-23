const config = {
    baseEvershopAdminUrl: process.env.EVERSHOP_ADMIN_URL || 'http://localhost:3000/admin',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@admin.com',
    adminPassword: process.env.ADMIN_PASSWORD || 'a1234578',
}

module.exports = config;