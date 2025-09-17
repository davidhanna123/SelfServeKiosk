# Self-Serve Kiosk

A modern self-serve kiosk application designed to streamline customer interactions and enhance the user experience. This project includes a responsive frontend and a robust backend to handle orders, user authentication, and more.

---

## Table of Contents

1. [Project Description](#project-description)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Development](#development)
6. [Deployment](#deployment)
7. [Folder Structure](#folder-structure)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Description

The Self-Serve Kiosk is a full-stack application designed for restaurants or retail environments. It allows customers to browse products, customize orders, and complete transactions independently. The system is built with scalability and maintainability in mind, ensuring it can adapt to various use cases.

---

## Features

- **User Authentication**: Secure login and registration system.
- **Dynamic Menu**: Displays items with categories, subcategories, and detailed descriptions.
- **Cart Management**: Add, remove, and update items in the cart.
- **Order Checkout**: Seamless checkout process with payment integration.
- **Responsive Design**: Optimized for both desktop and tablet devices.
- **Admin Panel**: Manage menu items, categories, and user accounts (future enhancement).

---

## Tech Stack

### Frontend:

- **React** with TypeScript
- **Material-UI (MUI)** for styling
- **Context API** for state management
- **Vite** for fast development and build

### Backend:

- **Node.js** with Express
- **MongoDB** for database
- **JWT** for authentication

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB** (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidhanna123/SelfServeKiosk.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SelfServeKiosk
   ```
3. Install frontend dependencies:
   ```bash
   cd kiosk
   npm install
   ```
4. Install backend dependencies:
   ```bash
   cd ../kiosk-backend
   npm install
   ```

### Development

Start up as you normally would by running:

1.  `npm run dev` in the `kiosk/` (frontend).
2.  `npm start` in the `kiosk-backend/` (backend).

### Deployment

For deployment, ensure that you have configured the environment variables and build settings according to your hosting provider's guidelines. Generally, you will need to:

1. Build the frontend application:
   ```bash
   cd kiosk
   npm run build
   ```
2. Configure your backend to serve the static files from the frontend build.
3. Set up a reverse proxy (e.g., Nginx) if necessary, to route requests to the appropriate backend services.

---

## Folder Structure

The project follows a modular folder structure for scalability and maintainability:

```
SelfServeKiosk/
├── kiosk/                  # Frontend application
│   ├── public/             # Static assets
│   ├── src/                # Source files
│   └── package.json        # Frontend dependencies and scripts
├── kiosk-backend/          # Backend application
│   ├── src/                # Source files
│   ├── config/             # Configuration files
│   └── package.json        # Backend dependencies and scripts
└── README.md               # Project documentation
```

---

## Contributing

We welcome contributions to the Self-Serve Kiosk project! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your forked repository.
5. Submit a pull request to the main repository for review.

Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

---
