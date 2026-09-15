# 🎨 Zayra APIs - Customization Guide

Quick reference for common customizations.

## 🎯 Changing Brand Name

Search and replace all instances of "Zayra APIs":

```jsx
// In ZayraAPIs.jsx
<span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
  Your Brand Name
</span>
```

## 🌈 Changing Color Theme

### Primary Colors (Cyan → Different)
```jsx
// Change: from-cyan-400
to-purple-500

// To: from-pink-400
to-blue-500

// Or: from-emerald-400
to-cyan-500
```

### Quick Color Combinations
```
Cyberpunk:     cyan → purple → pink
Ocean Blue:    blue → cyan → teal
Sunset:        orange → pink → purple
Forest:        emerald → teal → cyan
Night Sky:     indigo → purple → pink
```

## ➕ Adding More APIs

```jsx
const apis = [
  // ... existing APIs
  {
    id: 10,
    name: 'Video Converter',
    description: 'Convert videos between formats with quality optimization.',
    method: 'POST',
    endpoints: 16,
    speed: 'Fast',
  },
];
```

## 🔧 Changing Stats

```jsx
const stats = [
  { label: '100+ APIs', value: '100+' },
  { label: '99.99% Uptime', value: '99.99%' },
  { label: '< 50ms Response', value: '50ms' },
];
```

## 📝 Changing Navbar Links

```jsx
{['Home', 'APIs', 'Docs', 'Contact', 'Pricing'].map((link, idx) => (
  <motion.a
    key={link}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    href={`#${link.toLowerCase()}`}
    className="hover:text-cyan-400 transition-colors text-gray-300"
  >
    {link}
  </motion.a>
))}
```

## 🔗 Updating Social Links

```jsx
// In Footer Section
<a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
  <Github className="w-5 h-5" />
</a>
<a href="https://t.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer">
  <MessageCircle className="w-5 h-5" />
</a>
```

## 🎬 Changing Hero Section Copy

```jsx
<h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
  Your Catchy Headline
</h1>
<p className="text-lg text-gray-300 mb-8 leading-relaxed">
  Your custom description about your APIs...
</p>
```

## 🚀 Changing CTA Button Actions

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = 'https://your-dashboard-link.com'}
  className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold..."
>
  Explore APIs
</motion.button>
```

## 🎨 Changing Gradient Backgrounds

```jsx
// Hero Section Background
<div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
  // Change to:
  // from-slate-950 via-indigo-950 to-slate-900
  // or: from-gray-950 via-cyan-950 to-gray-900
</div>
```

## 📱 Responsive Breakpoints

```jsx
// Hidden on mobile, shown on desktop
<div className="hidden md:block">Content</div>

// Hidden on desktop, shown on mobile
<div className="md:hidden">Content</div>

// Responsive text sizes
<h1 className="text-4xl sm:text-5xl md:text-6xl">Responsive Heading</h1>
```

## 🔔 Changing Method Tags Color

```jsx
// Default: Green
<span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
  {api.method}
</span>

// Change to:
// bg-blue-500/20 text-blue-400 (Blue)
// bg-purple-500/20 text-purple-400 (Purple)
// bg-amber-500/20 text-amber-400 (Orange)
```

## ✨ Changing Button Styles

### Filled Button
```jsx
className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold shadow-lg shadow-cyan-500/50"
```

### Outlined Button
```jsx
className="px-8 py-4 rounded-lg border-2 border-purple-500/50 text-purple-400 font-semibold hover:bg-purple-500/10"
```

### Ghost Button
```jsx
className="px-8 py-4 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all"
```

## 🎪 Changing Card Glassmorphism

```jsx
// Slightly transparent
backdrop-blur-xl bg-white/5 border border-white/10

// More transparent
backdrop-blur-md bg-white/3 border border-white/5

// Less transparent (more solid)
backdrop-blur-2xl bg-white/15 border border-white/20
```

## 🔄 Changing Animation Speed

```jsx
// Framer Motion animations
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }} // Change 0.8 to 0.5 (faster) or 1.5 (slower)

// CSS animations
animation-duration: 7s; // Change blob animation speed
```

## 💾 Changing API Card Layout

### 2 Column Grid (Default)
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### 3 Column Grid (All screens)
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
```

### 4 Column Grid (Desktop)
```jsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
```

## 📊 Changing Stats Display

### 4 Stats Instead of 3
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 backdrop-blur-xl...">
  {stats.map((stat, idx) => (
    // ... stats
  ))}
</div>
```

## 🌙 Dark Mode Toggle (Optional)

Add this to enable light/dark mode:

```jsx
const [isDark, setIsDark] = useState(true);

return (
  <div className={isDark ? 'dark bg-slate-950' : 'light bg-white'}>
    {/* Content */}
  </div>
);
```

## 📧 Adding Newsletter Signup

```jsx
<div className="flex gap-2">
  <input 
    type="email" 
    placeholder="Enter your email"
    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
  />
  <button className="px-6 py-3 bg-cyan-500 rounded-lg font-semibold">
    Subscribe
  </button>
</div>
```

## 🔒 Removing/Adding Sections

### Remove Search Bar
```jsx
// Comment out or delete:
{/* <motion.div className="mb-12 relative"> */}
```

### Add Pricing Section
```jsx
<section className="py-20">
  <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
  {/* Add pricing cards */}
</section>
```

### Add Testimonials Section
```jsx
<section className="py-20">
  <h2 className="text-4xl font-bold text-center mb-12">What Developers Say</h2>
  {/* Add testimonial cards */}
</section>
```

## 🚀 Performance Optimizations

### Add Image Optimization
```jsx
import Image from 'next/image';

<Image
  src="/api-image.png"
  alt="API"
  width={300}
  height={200}
  loading="lazy"
/>
```

### Add Font Optimization
```jsx
// In layout.jsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

---

**Pro Tips:**
- Test changes on mobile devices
- Use browser DevTools to preview responsive design
- Keep gradients consistent across sections
- Test animation performance on slower devices
