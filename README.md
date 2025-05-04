# Web Developer Portfolio Template

[Demo](https://www.devportfoliotemplates.com/portfolio-templates/web-developer)

## Getting Started

You have two options to get started with this template:

### Option 1: Using Git Sparse Checkout

If you want to clone only this specific template:

```bash
git clone --no-checkout https://github.com/devportfoliotemplates/devportfoliotemplates.git
cd devportfoliotemplates
git sparse-checkout init --cone
git sparse-checkout set web-developer-portfolio-template
git checkout
```

### Option 2: Direct Download

You can download this template as a ZIP file:

1. Visit [download-directory.github.io](https://download-directory.github.io/)
2. Paste the URL of this portfolio folder: `https://github.com/devportfoliotemplates/devportfoliotemplates/tree/main/web-developer-portfolio-template`
3. Download and extract the ZIP file

### Running the Template

Once you have the template:

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Customization

### Personal Information

1. Update metadata in `app/layout.tsx`:

   - Site title
   - Description
   - Open Graph metadata
   - Favicon

2. Modify content in `app/page.tsx`:

   - Hero section
   - About section
   - Projects
   - Contact information

3. Replace assets:
   - Replace images in the `public` directory
   - Update social media icons
   - Modify logo if needed

### Styling

1. Colors and Theme:

   - Customize colors in `tailwind.config.js`
   - Modify theme variables in `app/globals.css`

2. Typography:

   - Update font families in `tailwind.config.js`
   - Modify text sizes and weights

3. Layout:
   - Adjust spacing and padding in component files
   - Modify responsive breakpoints in `tailwind.config.js`

## Troubleshooting

### Common Issues

1. **Build Errors**

   - Ensure all dependencies are installed
   - Clear `.next` folder and node_modules
   - Run `npm install` again

2. **Styling Issues**

   - Run `npm run build` to ensure TailwindCSS classes are generated
   - Check for conflicting styles in `globals.css`

3. **Image Loading**
   - Verify images are in the correct format (PNG, JPG, WebP)
   - Check image paths are correct
   - Ensure images are in the `public` directory

## Deployment

Follow these steps to deploy your portfolio for free using GitHub Pages.

1. Create a repository 

<YOU_GITHUB_USERNAME>.github.io

In my case: rsalgadoc.github.io

2. On the new repository, go to Settings -> Pages -> Section "Build and deployment" and select "Git Hub Actions"


3 . Configure the Next.js Build Process

change the output mode to export inside next.config.ts:

```javascript
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
  images: { unoptimized: true }
}
 
export default nextConfig;
```

4. Configure Github Actions

- Create two files:

```console
.github/workflows/setup-node/action.yml
```

- Here the file: [action.yml](.github\workflows\setup-node\action.yml)

```console
.github/workflows/publish.yml
```

- Here the file: [publish.yml](.github\workflows\publish.yml)


5. Commit and Push

After committing and pushing your changes to the main branch, GitHub will automatically initiate the deployment to GitHub Pages.


To inspect the process, navigate to the Actions tab, and select the publish-to-github-pages action from the menu on the left hand side. You will see a all your deployments on the screen (they are called workflows).