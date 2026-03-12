'use server';

import prisma from '@/src/lib/prisma';
import { cookies } from 'next/headers';

// Helper for admin auth (simple cookie check)
const isAdmin = async () => {
    const cookieStore = await cookies();
    return cookieStore.get('narsent_session')?.value === 'authenticated';
};

export async function createBlog(data: { title: string; slug: string; content: string; category?: string; author?: string; coverImage?: string; status: string }) {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    return await prisma.blog.create({
        data: {
            ...data,
            publishedAt: data.status === 'Published' ? new Date() : null
        }
    });
}

export async function updateBlog(id: string, data: { title?: string; slug?: string; content?: string; category?: string; author?: string; coverImage?: string; status?: string }) {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    return await prisma.blog.update({
        where: { id },
        data: {
            ...data,
            ...(data.status === 'Published' && { publishedAt: new Date() })
        }
    });
}

export async function deleteBlog(id: string) {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    return await prisma.blog.delete({
        where: { id }
    });
}

export async function getBlogs(includeDrafts = false) {
    // If getting drafts, must be admin
    if (includeDrafts && !(await isAdmin())) throw new Error('Unauthorized');

    return await prisma.blog.findMany({
        where: includeDrafts ? {} : { status: 'Published' },
        orderBy: { createdAt: 'desc' }
    });
}

export async function getBlogBySlug(slug: string) {
    return await prisma.blog.findUnique({
        where: { slug }
    });
}

export async function getBlogById(id: string) {
    return await prisma.blog.findUnique({
        where: { id }
    });
}
