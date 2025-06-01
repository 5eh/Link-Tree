"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, GithubIcon } from "lucide-react";
import {
  FaGlobe,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaMedium,
  FaFileAlt,
  FaMicrophone,
  FaTools,
  FaTelegram,
  FaGlassMartiniAlt,
} from "react-icons/fa";
import Footer from "./footer";
import { GiTempleDoor } from "react-icons/gi";
import { BiBitcoin } from "react-icons/bi";
import { FaGlasses } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";

function Button({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium font-unbounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
      "border border-white/30 bg-transparent hover:bg-white/10 text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

interface LinkItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  category: string;
  description?: string;
}

const links: LinkItem[] = [
  {
    name: "Arthur Labs",
    url: "https://arthurlabs.net/",
    icon: <FaGlobe className="h-6 w-6" />,
    category: "Services",
    description: "Main Arthur Labs website",
  },
  {
    name: "Builder",
    url: "https://builder.arthurlabs.net/",
    icon: <FaTools className="h-6 w-6" />,
    category: "Services",
    description: "Website Development Services.",
  },
  {
    name: "Susan",
    url: "https://susan.arthurlabs.net/",
    icon: <FaGlassMartiniAlt className="h-6 w-6" />,
    category: "Services",
    description: "Autonomous Application Development Agency.",
  },
  {
    name: "Web3 Bazaar Production",
    url: "https://genesis-market.com/",
    icon: <GiTempleDoor className="h-6 w-6" />,
    category: "Services",
    description: "A Demo of our marketplace production",
  },
  {
    name: "Podcast",
    url: "https://podcast.arthurlabs.net/",
    icon: <FaMicrophone className="h-6 w-6" />,
    category: "Social Media",
    description: "Arthur Labs Whitepaper overviews",
  },
  {
    name: "Medium",
    url: "https://arthurlabs.medium.com",
    icon: <FaMedium className="h-6 w-6" />,
    category: "Social Media",
    description: "Articles and insights",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61576766483992",
    icon: <FaFacebook className="h-6 w-6" />,
    category: "Social Media",
    description: "Connect on Facebook",
  },
  {
    name: "Twitter",
    url: "https://x.com/ArthurLabsDAO",
    icon: <FaTwitter className="h-6 w-6" />,
    category: "Social Media",
    description: "Follow on Twitter",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/arthur-labs-llc",
    icon: <FaLinkedin className="h-6 w-6" />,
    category: "Social Media",
    description: "Professional network",
  },
  {
    name: "Telegram",
    url: "https://t.me/+B9W-Jl0AQ2o0OWI5",
    icon: <FaTelegram className="h-6 w-6" />,
    category: "Social Media",
    description: "Small community for direct DMs",
  },
  {
    name: "Whitepaper",
    url: "https://whitepaper.arthurlabs.net/",
    icon: <FaFileAlt className="h-6 w-6" />,
    category: "Resources",
    description: "Technical documentation",
  },
  {
    name: "Watson LR",
    url: "https://watson.arthurlabs.net/",
    icon: <FaGlasses className="h-6 w-6" />,
    category: "Resources",
    description: "Founders Portfolio",
  },
  {
    name: "Personal Github",
    url: "https://github.com/5eh",
    icon: <GithubIcon className="h-6 w-6" />,
    category: "Resources",
    description: "GitHub Repository",
  },
  {
    name: "Company Github",
    url: "https://github.com/Arthur-Labs-DAO",
    icon: <GithubIcon className="h-6 w-6" />,
    category: "Resources",
    description: "GitHub Repository",
  },
  {
    name: "Blogs & Docs",
    url: "https://docs.arthurlabs.net/",
    icon: <LuBrain className="h-6 w-6" />,
    category: "Resources",
    description: "Blogs and analysis for Arthur Labs",
  },
  {
    name: "Fund The World",
    url: "https://fundtheworld.arthurlabs.net/",
    icon: <BiBitcoin className="h-6 w-6" />,
    category: "Resources",
    description: "A Bitcoin adoption tool for organization distribution",
  },
];

const categories = Array.from(new Set(links.map((link) => link.category)));

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function AnimatedTitle({ title = "Arthur Labs" }: { title?: string }) {
  const words = title.split(" ");

  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-unbounded">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
              className="inline-block text-transparent bg-clip-text
                        bg-gradient-to-r from-white to-white/80
                        tracking-normal mx-[0.5px] font-unbounded"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export function BackgroundPaths({ title = "Arthur Labs" }: { title?: string }) {
  return (
    <div
      className="w-full min-h-screen bg-black text-white overflow-auto font-unbounded"
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div
        className="relative z-20 w-full font-unbounded"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <AnimatedTitle title={title} />

              <div className="mb-8">
                <Button
                  className="group h-auto gap-4 py-3 text-left px-6 backdrop-blur-3xl bg-black/40 hover:bg-black/70"
                  variant="outline"
                >
                  <div className="space-y-1">
                    <h3 className="font-unbounded">We do a lot of things 😎</h3>
                    <p className="whitespace-break-spaces font-unbounded font-normal text-white/70">
                      Check our portfolio for our creative works.
                    </p>
                  </div>
                  <ChevronDown
                    className="opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </div>

            {/* Links by category */}
            <div className="space-y-12">
              {categories.map((category) => (
                <div
                  key={category}
                  className="space-y-6 font-unbounded"
                >
                  <h2 className="text-3xl font-bold text-center mb-8 font-unbounded text-white">
                    {category}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {links
                      .filter((link) => link.category === category)
                      .map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block hover:scale-[1.02] active:scale-[0.98] transition-transform"
                        >
                          <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl  border-white/30 p-6 h-full transition-all duration-300 group-hover:border-cyan-400/30 border-2 group-hover:bg-black/70 group-hover:shadow-lg font-unbounded">
                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                              <div className="p-4 rounded-full backdrop-blur-3xl bg-black/40 border-white/40 group-hover:border-cyan-400/30 border-2 group-hover:bg-black/70 transition-all duration-300 font-unbounded">
                                <div className="text-white group-hover:text-white/80">
                                  {link.icon}
                                </div>
                              </div>

                              <div>
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors font-unbounded">
                                  {link.name}
                                </h3>
                                {link.description && (
                                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors font-unbounded">
                                    {link.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
