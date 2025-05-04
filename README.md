# Startup Platform

A modern web platform for entrepreneurs to pitch their startups, connect with others, and participate in virtual competitions.

## Features

- 🚀 Pitch Startups: Submit and showcase your startup ideas
- 👥 User Profiles: Detailed profiles for entrepreneurs
- 🔍 Search & Discovery: Find startups by category or keywords
- 📊 View Analytics: Track startup post engagement
- ✍️ Rich Content: Markdown support for pitch descriptions
- 🔄 Real-time Updates: Live content updates using Sanity
- 🔐 Authentication: GitHub authentication integration

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: Sanity.io CMS
- **Authentication**: NextAuth.js with GitHub provider
- **Styling**: Custom TailwindCSS configuration with Work Sans font
- **Content**: Markdown support with sanity-plugin-markdown

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```plaintext
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-05-01
SANITY_WRITE_TOKEN=your_write_token
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                   # Next.js app directory
│   ├── (root)/           # Main application routes
│   ├── studio/           # Sanity Studio integration
│   └── api/              # API routes
├── components/           # React components
├── sanity/              # Sanity configuration
│   ├── lib/             # Sanity utilities
│   └── schemaTypes/     # Content schemas
└── lib/                 # Utility functions
```

## Features in Detail

### Authentication
- GitHub OAuth integration
- Protected routes for authenticated users
- User profile management

### Content Management
- Rich text editing with Markdown
- Image upload and management
- Real-time content updates
- Category-based organization

### User Interface
- Responsive design
- Custom animations
- Interactive components
- Loading states and error handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Sanity.io](https://www.sanity.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
