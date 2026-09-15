# 🚀 Zayra APIs - Setup & Deployment Guide

Beautiful, modern API provider website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- ✅ Dark theme with neon gradients (cyan, purple, blue)
- ✅ Glassmorphism design with transparent cards
- ✅ Smooth scroll animations with Framer Motion
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ API search functionality
- ✅ Interactive hover effects and glowing buttons
- ✅ Social links integration
- ✅ Optimized for Vercel deployment

## 📋 Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Git (for version control)

## 🛠️ Local Setup

### 1. Create Next.js Project

```bash
npx create-next-app@latest zayra-apis --typescript
cd zayra-apis
```

### 2. Install Dependencies

```bash
npm install framer-motion lucide-react tailwindcss postcss autoprefixer
# or
yarn add framer-motion lucide-react tailwindcss postcss autoprefixer
```

### 3. Copy Files

Copy the following files to your project:

**File Structure:**
```
zayra-apis/
├── app/
│   ├── page.jsx (main page)
│   ├── layout.jsx
│   └── globals.css
├── components/
│   └── ZayraAPIs.jsx (main component)
├── public/
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── next.config.js
```

### 4. Setup Tailwind CSS

The `tailwind.config.js` and `postcss.config.js` files are included. Just copy them to your root directory.

### 5. Global CSS

Make sure your `app/globals.css` includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 6. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your website!

## 📦 Project Structure

```
components/
  └── ZayraAPIs.jsx         # Main website component
app/
  ├── page.jsx              # Homepage
  ├── layout.jsx            # Root layout
  └── globals.css           # Global styles
public/                      # Static assets
tailwind.config.js          # Tailwind configuration
postcss.config.js           # PostCSS configuration
next.config.js              # Next.js configuration
package.json                # Dependencies
```

## 🎨 Customization

### Change Colors

Edit the gradient colors in `ZayraAPIs.jsx`:

```jsx
// From cyan/purple to your colors
bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400
```

Available Tailwind colors:
- `cyan-*` (cyan)
- `purple-*` (purple)
- `blue-*` (blue)
- `pink-*` (pink)
- `indigo-*` (indigo)

### Add More APIs

Edit the `apis` array in `ZayraAPIs.jsx`:

```jsx
const apis = [
  {
    id: 10,
    name: 'Your API Name',
    description: 'Your API description',
    method: 'GET', // or POST
    endpoints: 20,
    speed: 'Ultra-fast',
  },
  // ... more APIs
];
```

### Update Stats

Edit the `stats` array:

```jsx
const stats = [
  { label: '50+ APIs', value: '50+' },
  { label: '99.99% Uptime', value: '99.99%' },
  { label: '< 50ms Response', value: '50ms' },
];
```

### Change Logo Text

Replace all instances of "Zayra APIs" with your brand name.

### Update Social Links

In the footer section, update the links:

```jsx
<a href="https://github.com/yourprofile" target="_blank">
  <Github className="w-5 h-5" />
</a>
<a href="https://t.me/yourhandle" target="_blank">
  <MessageCircle className="w-5 h-5" />
</a>
```

## 🚀 Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Using GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/zayra-apis.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

### Option 3: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Test production build:
```bash
npm start
```

3. Deploy the `.next` folder to your hosting provider

## 🔧 Environment Variables

Create a `.env.local` file if you need environment variables:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/yourhandle
```

## 📱 Responsive Design

The website is fully responsive:
- **Mobile**: < 640px (optimized for touch)
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎬 Animations

Uses Framer Motion for:
- Fade-in effects on scroll
- Hover animations on buttons
- Smooth transitions
- Animated background blobs

## 🔍 Performance Tips

1. **Image Optimization**: Use Next.js `Image` component
2. **Font Optimization**: Use `next/font` for custom fonts
3. **Code Splitting**: Automatic with Next.js
4. **Lazy Loading**: Components load on scroll
5. **Caching**: Vercel handles CDN caching

## 📊 SEO Optimization

The component is SEO-friendly:
- Semantic HTML
- Meta tags in `page.jsx`
- Proper heading hierarchy
- Alt text support

Add additional meta tags in `page.jsx`:

```jsx
export const metadata = {
  title: 'Zayra APIs - Modern API Solutions',
  description: 'Lightning-fast APIs with 99% uptime...',
  keywords: 'API, REST, Developer Tools',
  openGraph: {
    type: 'website',
    url: 'https://zayra-apis.com',
    title: 'Zayra APIs',
    description: 'Modern API Solutions',
    images: [
      {
        url: 'https://zayra-apis.com/og-image.png',
      },
    ],
  },
};
```

## 🐛 Troubleshooting

### Tailwind not working
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Framer Motion animations not smooth
- Check performance in DevTools
- Reduce blur effects if on slow device

### Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 License

Free to use and modify for your own projects.

## 🤝 Support

For issues or questions:
1. Check the Tailwind CSS docs: https://tailwindcss.com
2. Check Framer Motion docs: https://www.framer.com/motion
3. Check Next.js docs: https://nextjs.org

## 🎯 Next Steps

1. ✅ Customize colors and content
2. ✅ Add your API data
3. ✅ Update social links
4. ✅ Test on mobile
5. ✅ Deploy to Vercel
6. ✅ Set up custom domain

---

**Made with ❤️ for developers**
