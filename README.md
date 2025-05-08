# Banana Chat Application

A modern, animated chat application built with Next.js, Material UI, and Tailwind CSS. Features a banana-themed interface with smooth animations and a clean, light-themed design.

## Features

- Modern chat interface with a banana-themed logo
- Animated entrance effects for all elements
- Responsive design that works on both desktop and mobile
- Light theme with a clean, minimal aesthetic
- Material UI components for a polished look
- Smooth animations using Framer Motion

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd chat-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
chat-app/
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles and fonts
│   │   └── page.tsx       # Main application page
│   └── components/
│       ├── AnimatedHeader.tsx  # Header with banana logo and title
│       ├── Chat.tsx           # Chat interface component
│       └── ChatInterface.tsx   # Main page component
├── public/
│   └── banana.svg     # Banana logo
└── package.json       # Project dependencies
```

## Technologies Used

- Next.js 14
- React
- Material UI
- Tailwind CSS
- Framer Motion
- TypeScript

## Development

The application is set up with TypeScript for type safety and Next.js for server-side rendering capabilities. The UI is built using Material UI components with custom styling through Tailwind CSS. Animations are handled by Framer Motion.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
