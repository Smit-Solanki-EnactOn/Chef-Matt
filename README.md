# Chef Matt - Gourmet Products Website

A modern, responsive e-commerce website for Chef Matt's gourmet products, built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Components](#components)
- [State Management](#state-management)
- [Routing](#routing)
- [API and Data](#api-and-data)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Description

Chef Matt is a responsive e-commerce platform designed to showcase and sell gourmet products. The website features a clean, modern interface with a focus on user experience, including product browsing, filtering, and a detailed product view modal.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- **Product Catalog**: Browse a wide range of gourmet products with detailed descriptions and pricing.
- **Product Filtering & Sorting**: Filter products by category and sort by price or name.
- **Search Functionality**: Search for specific products by name.
- **Interactive Product Modal**: View detailed product information in an elegant modal dialog.
- **Shopping Cart & Wishlist**: Add products to cart or wishlist (UI implemented).
- **Testimonials**: Display customer testimonials with an interactive carousel.
- **Promotional Banners**: Dynamic promotional sections for special offers.
- **Newsletter Signup**: Email subscription for promotional updates.
- **Animated UI Elements**: Smooth transitions and animations using Framer Motion.

## Technologies Used

- **React 19**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Router**: For handling routing and navigation.
- **Framer Motion**: A library for production-ready motion graphics.
- **Swiper**: Modern mobile touch slider for carousels and product galleries.
- **Headless UI**: Unstyled, fully accessible UI components.
- **Material-UI (MUI)**: For pagination components.
- **React Icons**: Include popular icons in your React projects easily.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm (or yarn) installed on your machine.

- Node.js: [Download & Install Node.js](https://nodejs.org/)
- npm: Comes with Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chef-matt.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chef-matt
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or if you use yarn:
   ```bash
   yarn
   ```

### Development Server

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload when you make changes.

### Building for Production

To create a production build, run:

```bash
npm run build
```

or

```bash
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
chef-matt/
├── public/                 # Static assets
│   ├── images/            # Project images
│   └── vite.svg           # Vite logo
├── src/
│   ├── animation/         # Framer Motion animations
│   ├── assets/            # React assets
│   ├── components/        # Reusable components
│   │   ├── core/          # Core UI components (Button, Dialog, etc.)
│   │   └── generic/       # Generic components (Footer, Sidebar)
│   ├── data/              # Static data (products, testimonials)
│   ├── layout/            # Layout components
│   ├── pages/             # Page components
│   ├── sections/          # Section components (Hero, Testimonials, etc.)
│   ├── App.tsx            # Main App component with routing
│   ├── index.css          # Global styles and Tailwind imports
│   ├── main.tsx           # Entry point of the application
│   └── vite-env.d.ts      # Vite environment type definitions
├── .gitignore             # Files and directories to ignore
├── eslint.config.js       # ESLint configuration
├── index.html             # Main HTML file
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
├── tsconfig.app.json      # TypeScript configuration for the app
├── tsconfig.json          # Main TypeScript configuration
├── tsconfig.node.json     # TypeScript configuration for Node.js
└── vite.config.ts         # Vite configuration
```

## Components

- **Core Components**:
  - `Button`: A reusable button component.
  - `DialogBox`: A modal dialog for displaying product details.
  - `ProductCard`: A card component for displaying product information.
  - `SelectDropdown`: A dropdown component for filtering and sorting.
- **Generic Components**:
  - `Footer`: The website footer with links and information.
  - `Sidebar`: A collapsible sidebar for navigation.
- **Page Components**:
  - `HomePage`: The home page of the website.
  - `ProductPage`: The product listing page.
- **Section Components**:
  - `HeroSection`: The main hero section with a slider.
  - `ProductListSection`: A section showcasing featured products.
  - `Discountbanner`: A carousel for discount offers.
  - `Testimonial`: A testimonial carousel.
  - `PromotionSection`: A section for promotional banners and newsletter signup.

## State Management

This project uses React's built-in state management with hooks (`useState`, `useEffect`) for managing component-level state. For more complex state management needs, consider integrating a library like Redux or Zustand.

## Routing

Routing is handled by `react-router-dom`. The main routing configuration is in `src/App.tsx`, which defines the routes for the home page and product page.

## API and Data

Currently, the project uses static data located in `src/data/data.ts` for products and testimonials. This data is directly imported into components. For a production application, this would be replaced with API calls to a backend service.

## Styling

The project uses Tailwind CSS for styling, with custom configurations defined in `src/index.css` and the `@theme` directive. Tailwind utility classes are used throughout the components for rapid styling and responsiveness.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Chef Matt - [@chefmatt](https://twitter.com/chefmatt) - chefmatt@example.com

Project Link: [https://github.com/your-username/chef-matt](https://github.com/your-username/chef-matt)
