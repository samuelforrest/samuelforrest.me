"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HomeIcon, FolderOpen, Mail, Github, Linkedin, Sun, Moon, Instagram, Book, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "https://samueljforrest.substack.com", icon: Book, label: "Substack Blog" },
  { href: "#projects", icon: FolderOpen, label: "Projects" },
];

const socialLinks = [
  { href: "https://github.com/samuelforrest", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/samueljforrest", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/samueljforrest", icon: Instagram, label: "Instagram" },
  { href: "https://x.com/samueljforrest", icon: Twitter, label: "X" },
  { href: "mailto:sam@samuelforrest.me", icon: Mail, label: "Email" },
];

function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        
        className="size-12 md:size-12 min-w-12 min-h-12 touch-manipulation dock-icon"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="size-12 md:size-12 min-w-12 min-h-12 touch-manipulation dock-icon"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-6 flex origin-bottom h-full max-h-14 safe-area-inset-bottom">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-2xl max-w-fit"
        magnification={50}
        distance={120}
      >
        {navItems.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    // Handle smooth scrolling for anchor links
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }
                  }}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 md:size-12 min-w-12 min-h-12 touch-manipulation dock-icon"
                  )}
                >
                  <item.icon className="size-4 md:size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {socialLinks.map((social) => (
          <DockIcon key={social.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 md:size-12 min-w-12 min-h-12 touch-manipulation dock-icon"
                  )}
                >
                  <social.icon className="size-4 md:size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
