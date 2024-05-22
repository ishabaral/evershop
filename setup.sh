#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Create a .env file if it doesn't exist
if [ ! -f ".env" ]; then
  echo "Creating .env file..."
  touch .env
  echo "Please update the .env file with your database configuration
  [DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, ADMIN_FULLNAME ,ADMIN_EMAIL, ADMIN_PASSWORD]."
fi

# Extract configuration from .env file
DB_HOST=$(grep -E "^DB_HOST=" .env | cut -d '=' -f2 | tr -d '"')
DB_PORT=$(grep -E "^DB_PORT=" .env | cut -d '=' -f2 | tr -d '"')
DB_NAME=$(grep -E "^DB_NAME=" .env | cut -d '=' -f2 | tr -d '"')
DB_USER=$(grep -E "^DB_USER=" .env | cut -d '=' -f2 | tr -d '"')
DB_PASSWORD=$(grep -E "^DB_PASSWORD=" .env | cut -d '=' -f2 | tr -d '"')
ADMIN_FULLNAME=$(grep -E "^ADMIN_FULLNAME=" .env | cut -d '=' -f2 | tr -d '"')
ADMIN_EMAIL=$(grep -E "^ADMIN_EMAIL=" .env | cut -d '=' -f2 | tr -d '"')
ADMIN_PASSWORD=$(grep -E "^ADMIN_PASSWORD=" .env | cut -d '=' -f2 | tr -d '"')

# Install expect package
echo "Installing expect package"
sudo apt-get install expect

# Run the setup command with automated input extracted from .env
echo "Running Evershop.io setup..."
expect <<EOF
spawn npm run setup
expect "Postgres Database Host (localhost)"
send "$DB_HOST\r"
expect "Postgres Database Port (5432)"
send "$DB_PORT\r"
expect "Postgres Database Name (evershop)"
send "$DB_NAME\r"
expect "Postgres Database User (postgres)"
send "$DB_USER\r"
expect "PostgreSQL Database Password (<empty>)"
send "$DB_PASSWORD\r"
expect "Your full name"
send "$ADMIN_FULLNAME\r"
expect "Your administrator user email"
send "$ADMIN_EMAIL\r"
expect "Your administrator user password"
send "$ADMIN_PASSWORD\r"
expect eof
EOF

echo "Setup complete."