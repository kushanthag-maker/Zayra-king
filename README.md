# Zayra APIs - Modern API Provider Website

A beautiful, fast, and fully responsive API provider website built with React, Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Dark Theme** - Deep dark background with neon cyan, purple, and blue gradients
- 💎 **Glassmorphism** - Transparent cards with blur effects
- ⚡ **Smooth Animations** - Framer Motion scroll reveals and hover effects
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🔍 **API Search** - Real-time search functionality
- 🌟 **Glowing Effects** - Interactive buttons with shadow animations
- 📊 **Stats Section** - Display uptime, speed, and API count
- 🔗 **Social Integration** - GitHub and Telegram links
- 📈 **SEO Optimized** - Metadata and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. **Navigate to project folder**
```bash
cd zayra-apis
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 📦 Project Structure

```
zayra-apis/
├── app/
│   ├── page.jsx              # Homepage
│   ├── layout.jsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── ZayraAPIs.jsx         # Main website component
├── public/                   # Static assets
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── next.config.js            # Next.js configuration
├── .gitignore               # Git ignore file
└── README.md                # This file
```

## 🎨 Customization

### Change Brand Name
Replace all instances of "Zayra APIs" with your brand name in `components/ZayraAPIs.jsx`.

### Change Colors
Update the gradient colors:
```jsx
from-cyan-400 to-purple-500  // Change these
```

Available color combinations:
- Cyberpunk: `cyan → purple → pink`
- Ocean Blue: `blue → cyan → teal`
- Sunset: `orange → pink → purple`

### Add More APIs
Edit the `apis` array in `components/ZayraAPIs.jsx`:
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

### Update Social Links
In the footer section, update:
```jsx
<a href="https://github.com/yourprofile">
<a href="https://t.me/yourhandle">
```

## 🚀 Deployment

### Deploy to Vercel

**Option 1: Using Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option 2: Using GitHub**
1. Push to GitHub
2. Go to vercel.com
3. Connect your repository
4. Deploy automatically

**Option 3: Manual**
```bash
npm run build
npm start
```

## 📱 Responsive Design

- **Mobile** (<640px) - Optimized for touch
- **Tablet** (640px-1024px) - Balanced layout
- **Desktop** (>1024px) - Full experience

## 🛠️ Technologies Used

- **React 18** - UI library
- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📊 Performance

- ⚡ Fast load times
- 📱 Mobile-first approach
- 🎯 Optimized images
- 🔄 Efficient animations

## 🎬 Animations

- Fade-in effects on scroll
- Hover animations on buttons
- Smooth transitions
- Animated background blobs
- Glowing effects

## 📝 Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 🔒 Security

- CSP headers configured
- XSS protection enabled
- CSRF protection ready

## 📖 Additional Guides

- **SETUP_GUIDE.md** - Detailed setup and deployment instructions
- **CUSTOMIZATION.md** - Quick customization reference

## 🤝 Contributing

Feel free to fork and customize this project for your own API provider website.

## 📄 License

Free to use and modify for your projects.

## 🎯 Next Steps

1. ✅ Customize colors and content
2. ✅ Add your API data
3. ✅ Update social links
4. ✅ Test on mobile
5. ✅ Deploy to Vercel
6. ✅ Set up custom domain

## 📧 Support

For questions or issues, refer to the documentation files included in this project.

---

**Made with ❤️ for developers**

Visit the [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.
Visit the [CUSTOMIZATION.md](./CUSTOMIZATION.md) for customization options.
