"use server";

import { cookies } from "next/headers";

export async function loginAction(password: string) {
    const adminPassword = process.env.ADMIN_PASSWORD?.trim();

    if (password === adminPassword) {
        const cookieStore = await cookies();
        cookieStore.set("narsent_session", "authenticated", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });
        return { success: true };
    }
    return { success: false, error: "Invalid password." };
}

export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete("narsent_session");
    return { success: true };
}
