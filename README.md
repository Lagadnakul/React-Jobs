# React Jobs

<div align="center">
  <img src="logo.png" alt="React Jobs Logo" width="120" />
  <h3>A modern job board for React developers</h3>
  
  [![React Version](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6-blueviolet)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
</div>

## 🌟 Overview

React Jobs is a modern, responsive job board application designed specifically for React developers to find relevant employment opportunities. Built with the latest React 18, Vite 6, and styled with Tailwind CSS, this application provides a seamless and intuitive user experience for both job seekers and employers.

## 🚀 Features

- **Browse Job Listings**: Filter and sort through available React developer positions
- **Job Details**: Get comprehensive information about each position with rich descriptions
- **Add New Jobs**: Employers can post new job opportunities through an intuitive form
- **Edit Jobs**: Update existing job listings with real-time validation
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Modern UI**: Built with Tailwind CSS for a sleek, modern interface
- **Real-time Notifications**: Instant feedback with React Toastify
- **Loading States**: Beautiful loading states with React Spinners

## 🛠️ Technologies

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" />
        <br />React 18
      </td>
      <td align="center">
        <img src="https://vitejs.dev/logo.svg" width="40" />
        <br />Vite 6
      </td>
      <td align="center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="40" />
        <br />Tailwind CSS
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://reactrouter.com/favicon.ico" width="40" />
        <br />React Router 7
      </td>
      <td align="center">
        <img src="https://react-icons.github.io/react-icons/favicon.ico" width="40" />
        <br />React Icons
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/fkhadra/react-toastify/master/logo.png" width="40" />
        <br />React Toastify
      </td>
    </tr>
  </table>
</div>

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/React-Jobs.git
   cd React-Jobs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Start the JSON server (for development):
   ```bash
   npm run server
   ```

## 🚀 Usage

After starting both the development server and JSON server, you can:

- Visit http://localhost:5173 to view the application
- Browse job listings on the main page
- Click on any job to view detailed information
- Use the "Add Job" button to create new listings
- Edit existing jobs through the job detail page

## 📋 API Endpoints

The project uses JSON Server which provides the following endpoints:

- `GET /jobs` - Get all job listings
- `GET /jobs/:id` - Get specific job listing
- `POST /jobs` - Create a new job listing
- `PUT /jobs/:id` - Update an existing job listing
- `DELETE /jobs/:id` - Remove a job listing

## 🧪 Running Tests

```bash
npm test
```

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel

```bash
npm install -g vercel
vercel
```

### Render

The included `render.yaml` file can be used to deploy to [Render](https://render.com).

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Project Structure

```
src/
├── components/      # Reusable UI components
├── layout/          # Layout components
├── pages/           # Page components
├── jobs.json        # Mock database
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Check out our [contribution guidelines](CONTRIBUTING.md).

## 👨‍💻 Author

- **Your Name** - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)