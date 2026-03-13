"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, LayoutGrid, Zap, BookOpen, Tag } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const navLinks = [
    {
      name: "Products",
      href: "/#products",
      icon: <LayoutGrid className="h-5 w-5" />,
      subLinks: [
        { name: "Horizon AI", href: "/products/horizon-ai" },
        { name: "Narsent Nexus", href: "/products/nexus" },
        { name: "Cashflow & Liquidity", href: "/solutions/cashflow" },
      ],
    },
    {
      name: "Integrations",
      href: "/integrations",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      name: "Resources",
      href: "/resources",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <Tag className="h-5 w-5" />,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Sidebar Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm border-l border-zinc-800 bg-[#0B0C10] p-6 shadow-2xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold tracking-widest text-white">NARSENT</span>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-zinc-900 pb-4 last:border-0">
                    <div className="flex flex-col space-y-3">
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-[#E5F33D]">{link.icon}</div>
                          <span className="text-lg font-medium text-white group-hover:text-[#E5F33D] transition-colors">
                            {link.name}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-[#E5F33D] transition-transform group-hover:translate-x-1" />
                      </Link>

                      {link.subLinks && (
                        <div className="grid grid-cols-1 gap-2 pl-8">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={onClose}
                              className="text-sm text-zinc-400 hover:text-[#E5F33D] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 space-y-4 pt-6 border-t border-zinc-800">
              <Link
                href="/login"
                onClick={onClose}
                className="flex h-12 items-center justify-center rounded-md border border-zinc-800 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Login
              </Link>
              <Link
                href="/request-demo"
                onClick={onClose}
                className="flex h-12 items-center justify-center rounded-md bg-[#E5F33D] text-sm font-bold text-black transition-all hover:bg-[#d4e136] hover:shadow-[0_0_20px_rgba(229,243,61,0.3)]"
              >
                Request Demo
              </Link>
            </div>
            
            <div className="mt-8 text-center text-[10px] text-zinc-600 uppercase tracking-widest">
              © 2026 Narsent AI Technologies
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
