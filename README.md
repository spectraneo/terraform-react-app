# Terraform React App

A modern React application built with TypeScript and Vite, designed for deployment with Terraform on Azure using GitHub Actions.

## 🚀 Features

- **React 19** with TypeScript for type-safe development
- **Vite** for fast development and optimized builds
- **ESLint** for code quality and consistency
- **Modern toolchain** with SWC for fast compilation
- **Terraform-ready** for infrastructure as code deployment
- **Azure deployment** support
- **GitHub Actions** integration for CI/CD

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Terraform](https://www.terraform.io/) (for infrastructure deployment)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/) (for Azure deployment)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd terraform-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
terraform-react-app/
├── public/               # Static assets
│   └── vite.svg
├── src/                  # Source code
│   ├── assets/          # React assets
│   │   └── react.svg
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # App-specific TypeScript config
├── tsconfig.node.json   # Node-specific TypeScript config
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🔧 Configuration

### TypeScript

The project uses TypeScript with strict type checking. Configuration files:

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js-specific settings

### Vite

Vite is configured with the React SWC plugin for fast compilation. See `vite.config.ts` for configuration details.

### ESLint

ESLint is configured with React-specific rules and TypeScript support. See `eslint.config.js` for linting rules.

## 🏗️ Infrastructure Deployment

This project is designed to work with Terraform for infrastructure as code deployment on Azure.

### Prerequisites for Deployment

1. Azure subscription and appropriate permissions
2. Terraform installed locally
3. Azure CLI configured with your credentials

### Deployment Steps

1. Configure your Terraform variables
2. Initialize Terraform:
   ```bash
   terraform init
   ```
3. Plan the deployment:
   ```bash
   terraform plan
   ```
4. Apply the infrastructure:
   ```bash
   terraform apply
   ```

## 🚀 CI/CD with GitHub Actions

The project is configured for continuous integration and deployment using GitHub Actions. The workflow typically includes:

1. **Build**: Install dependencies and build the React application
2. **Test**: Run linting and type checking
3. **Deploy**: Deploy to Azure using Terraform

Make sure to configure the following secrets in your GitHub repository:
- Azure service principal credentials
- Any other environment-specific variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite with SWC
- **Linting**: ESLint with React and TypeScript rules
- **Infrastructure**: Terraform
- **Cloud Provider**: Azure
- **CI/CD**: GitHub Actions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [GitHub Issues](../../issues) for existing solutions
2. Create a new issue with detailed information about your problem
3. Include steps to reproduce and your environment details

---

**Happy coding!** 🎉
