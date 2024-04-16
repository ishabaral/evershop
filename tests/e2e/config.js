const config = {
    baseEvershopAdminUrl: process.env.EVERSHOP_ADMIN_URL || 'http://localhost:3000/admin',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@admin.com',
    adminPassword: process.env.ADMIN_PASSWORD || 'admin1234',
    assets: '/home/isha/practise/evershop/tests/e2e/filesForUpload',
}

module.exports = config;