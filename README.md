ChinaBazaar – E-Commerce Homepage
This is a frontend-only e-commerce homepage built with Next.js (App Router), React, and Tailwind CSS. The project replicates the homepage of the provided Figma design and includes reusable UI components, responsive layout, and static product data. All content is frontend-based only, as required by the assignment.

#Project Links

 Live Demo (Vercel): [[https://chinabazzar.vercel.app/](https://chinabazzar.vercel.app/)](https://vercel.com/gautamdikshya55-langs-projects/bazzar/jiWwBE4VbDa4dGuy3WZuuaA1kcXc)


GitHub Repository:

Technologies used

Next.js (App Router)
React
TailwindCSS
TypeScript
Lucide-React (icons)
Next/Image (image optimization)
Static JSON data for products

#Setup instructions
Clone the repository:
git clone https://github.com/gautamdikshya55-lang/Chinabazzar.git

#Navigate to the project folder:
cd Chinabazzar

#Install dependencies:
npm install

#Run the development server:
npm run dev

#Build for production:
npm run build

#Start the production server:
npm start

#Core features

Pixel-accurate homepage converted from Figma
Responsive design for desktop, tablet, and mobile
Reusable UI components (ProductCard, ProductStrip, SectionHeader, banners)
Header and category navigation bar
Hero section
Sale banner
Promo grid
Flash Deals section
Special Offers section
Multi-sale banner grid
Static/dummy product data stored locally
Footer with payment logos and app store buttons

#Bonus features
Consistent layout container using section-shell
Next.js image optimization with remotePatterns
Clean folder structure with separation of layout, UI, and home components
Spacing and grid breakpoints optimized for all device sizes

#Deployment notes (Vercel)
Connect the GitHub repository to Vercel.
Vercel will automatically detect the Next.js framework.
No environment variables are required.
Add external image domains in next.config.ts:

images: 
{
  remotePatterns: [
    { protocol: "https", hostname: "images.pexels.com" },
    { protocol: "https", hostname: "upload.wikimedia.org" },
    { protocol: "https", hostname: "i.ibb.co" },
    { protocol: "https", hostname: "play-lh.googleusercontent.com" }
  ]
}



II.Screenshots

Desktop View
<img width="1893" height="858" alt="image" src="https://github.com/user-attachments/assets/dec46593-72a1-4973-8b0a-7a0c2809b541" />



      Mobile View
<img width="593" height="922" alt="image" src="https://github.com/user-attachments/assets/c036f3f3-3463-436d-99af-5fa358ca8624" />


Header and Navigation
<img width="1299" height="387" alt="image" src="https://github.com/user-attachments/assets/16a85207-e60d-4fcd-9486-f34e58352eaa" />


Product Sections
<img width="1397" height="465" alt="image" src="https://github.com/user-attachments/assets/da412eea-0cf1-4bfe-b8ee-4a6c10070b2f" />

<img width="1423" height="326" alt="image" src="https://github.com/user-attachments/assets/f5ddf69e-e533-457e-91be-04ab8138dcda" />
<img width="1425" height="655" alt="image" src="https://github.com/user-attachments/assets/6ffe1a23-08c6-47c6-8155-5b9eaf5d64e2" />
<img width="1429" height="769" alt="image" src="https://github.com/user-attachments/assets/4ef2ecb9-3017-418e-b22b-086ce4aca1bd" />
<img width="1509" height="626" alt="image" src="https://github.com/user-attachments/assets/e726ae65-a4ed-4f17-9fc8-a192c83c24f1" />
<img width="1434" height="903" alt="image" src="https://github.com/user-attachments/assets/e122129d-ee32-451b-a54a-21d0f1acb25c" />




Footer Sections

<img width="1444" height="551" alt="image" src="https://github.com/user-attachments/assets/bab5c1ce-88a3-400d-8291-68faff5d3d41" />

III.Assumptions
Only the homepage was required for this assignment
All interactive actions such as search, wishlist, login, and cart are UI-only
Dummy product data is stored in src/data/homepage.ts
Some Figma images were replaced with suitable Pexels images
No backend or API integration was needed

#Project structure
Chinabazzar/
Frontend/ Next.js application
Chinabazzar/
  src/
    app/
      layout.tsx
      page.tsx
    components/
      layout/
        Header.tsx
        Footer.tsx
      home/
        MainHero.tsx
        PromoGrid.tsx
        SaleBanner.tsx
        LiveSell.tsx
        ProductStrip.tsx
        MultiSaleBanner.tsx
      ui/
        ProductCard.tsx
        SectionHeader.tsx
    data/
      homepage.ts
  next.config.ts
  package.json
  tailwind.config.js
#About
ChinaBazaar Homepage built with Next.js, React, and TailwindCSS as a conversion of the provided Figma design.
