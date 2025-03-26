export const APPLICATION_CONFIG = {
  BRAND_NAME: "erasify",
  DEFAULT_CREDIT: 5,
};

export const HERO_CONTENT = {
  title: (
    <>
      Remove Image <br />
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Backgrounds
      </span> <br />
      Instantly with AI
    </>
  ),
  description:
    "Transform your images in seconds! With our advanced AI technology, remove backgrounds effortlessly and achieve studio-quality results. Perfect for personal projects, e-commerce, and professional edits—all without any technical skills.",
  btnText: "Upload you image",
  imgURL: "",
};

export const BANNER_CONTENT = {
  title: "Remove Backgrounds with Precision and High Quality",
  description:
    "Transform your images in seconds! With our advanced AI technology, remove backgrounds effortlessly and achieve studio-quality results. Perfect for personal projects, e-commerce, and professional edits—all without any technical skills.",
  btnText: "Upload you image",
  imgURL: "",
};

export const NAVBAR = [
  {
    name: "Home",
    link: "/",
  },
  // {
  //   name: "Storage",
  //   link: "/storage",
  // },
  {
    name: "Playground",
    link: "/playground",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
];

export const STEPS = [
  {
    title: "Select Image",
    description:
      "Select an image where the subject has well-defined edges and no overlapping elements.",
    icon: "image-plus",
  },
  {
    title: "Remove Background",
    description:
      "Upload your image to our free tool to remove the background instantly.",
    icon: "images",
  },
  {
    title: "Download",
    description:
      "Download your image as a JPG file with a transparent background to save or share effortlessly.",
    icon: "download",
  },
];

export const CUSTOMER_TESTIMONIAL = [
  {
    title: "Priya Sharma",
    semiTitle: "Social Media Manager",
    description:
      "Eraseify has been a game-changer for my content creation. I can remove backgrounds from product photos in seconds without relying on complicated software. It’s fast, accurate, and so easy to use—perfect for my busy schedule!",
    icon: "quote",
  },
  {
    title: "Rajesh Patel",
    semiTitle: "Entrepreneur",
    description:
      "As a small business owner, Eraseify saves me time and money. The tool’s precision and quality are outstanding, allowing me to create professional-looking product images effortlessly. Highly recommended!",
    icon: "quote",
  },
  {
    title: "Emily Wilson",
    semiTitle: "Graphic Designer",
    description:
      "I’ve tried multiple background remover tools, but Eraseify stands out for its simplicity and accuracy. It handles tricky edges like hair perfectly, which is a huge plus for my design projects. A must-have tool for creators!",
    icon: "quote",
  },
];

export const FAQ = [
  {
    title: "What makes Eraseify the best background remover?",
    description:
      "Our free background remover tool delivers professional-quality, fast, and accurate results in just 3 simple steps. Best of all, it’s free to use anytime, anywhere on both your desktop and mobile device - and anyone can use it, no experience necessary.",
    icon: "plus",
  },
  {
    title: "Can I remove the background on my phone?",
    description:
      "Yes, absolutely! If you want to remove backgrounds on the go, launch our free photo background remover tool on your mobile device and let it work its magic within seconds after uploading your image! It’s hassle-free, convenient, and intuitive to use, and anyone can work with it without prior experience.",
    icon: "plus",
  },
  {
    title: "How do I make a background transparent?",
    description:
      "When you use our free background remover to change the background of your image, it will automatically make the background transparent—be it a white background, colored background, or JPEG file.",
    icon: "plus",
  },
  {
    title: "Who can benefit from the background remover tool?",
    description:
      "Everyone from marketers, entrepreneurs, and creators to students and professionals can benefit from the background remover tool. Whether you need a background change for a profile photo or want to create premium-quality image cutouts for your creative project, our beginner-friendly tool is for everyone.",
    icon: "plus",
  },
  {
    title: "Can I change the photo’s background?",
    description:
      "Yes, you can easily change any photo's background by using this tool. Once you have removed the background from a picture, you can add your image to a new project and place it on a background of your choice.",
    icon: "plus",
  },
];

export const FOOTER_LINKS = [
  {
    name: "Privacy & Policy",
    link: "/privacy-policy",
  },
  {
    name: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Cookies",
    link: "/cookies",
  },
];

export const PRICING_PLANS = [
  {
    title: "Basic",
    description: "Best for personal Use",
    price: "100",
    credit: "100",
    icon: "user",
  },

  {
    title: "Advance",
    description: "Best for Business Use,",
    price: "500",
    credit: "500",
    icon: "chart-line",
  },
  {
    title: "Enterprice",
    description: "Best for Enterprice Use,",
    price: "1000",
    credit: "1000",
    icon: "shield-check",
  },
];

export const BACKEND_DOMAIN =
  process.env.NODE_URL === "production"
    ? "erasify-server-production.up.railway.app"
    : "http://localhost:3001";
export const API = {
  login: `${BACKEND_DOMAIN}/api/v1/auth/login`,
  logout: `${BACKEND_DOMAIN}/api/v1/auth/logout`,
  register: `${BACKEND_DOMAIN}/api/v1/auth/register`,
  session: `${BACKEND_DOMAIN}/api/v1/auth/session`,
  refreshToken: `${BACKEND_DOMAIN}/api/v1/auth/refreshToken`,
  uuid: `${BACKEND_DOMAIN}/api/v1/auth/uuid`,
  removeBackground: `${BACKEND_DOMAIN}/api/v1/features/remove-background`,
};


