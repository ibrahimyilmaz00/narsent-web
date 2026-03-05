"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    scale?: boolean;
    className?: string;
}

export function Reveal({
    children,
    direction = "up",
    delay = 0,
    scale = false,
    className,
}: RevealProps) {
    const directionMap = {
        up: { x: 0, y: 50 },
        down: { x: 0, y: -50 },
        left: { x: -50, y: 0 },
        right: { x: 50, y: 0 },
    };

    const { x, y } = directionMap[direction];

    return (
        <motion.div
            initial={{
                opacity: 0,
                x,
                y,
                ...(scale ? { scale: 0.95 } : {}),
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                ...(scale ? { scale: 1 } : {}),
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
