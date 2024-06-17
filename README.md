# EasyTax

Welcome to EasyTax, a personal income tax calculator designed to help individuals easily estimate their personal income taxes. Whether you are a salaried employee or self-employed, our tool provides a quick and accurate calculation based on the latest tax rates.

## Features

- Easy to use interface
- Accurate and up-to-date tax calculations
- Supports multiple tax brackets
- Detailed breakdown of your tax obligations

## How to Use

Simply enter your income details and let our calculator do the rest. You will receive an instant estimate of your taxes owed.

Try our Tax Calculator today and take the guesswork out of tax season!

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for server-rendered or statically-exported React applications.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Shadcn-UI](https://shadcn-ui.com/) - A UI component library for building modern web applications.
- [Recharts](https://recharts.org/) - A composable charting library built on React components.

## Getting Started

Follow these steps to get a local copy up and running for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repo:

   ```bash
   https://github.com/benli-bl17/easy-tax.git
   cd easytax
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Folder Structure

Here is a brief overview of the project structure, highlighting the usage of the Next.js App Router:

```
.
├── app             # Next.js App Router directory
│   ├── layout.js   # Layout component
│   ├── page.js     # Main page component
│   └── ...         # Other routes and components
├── components      # Reusable UI components
├── data            # Static data files
├── lib             # Utility functions and modules
├── public          # Public assets
├── styles          # Global styles and CSS modules
├── utils           # Additional utility functions and constants
├── .gitignore      # Git ignore file
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.
