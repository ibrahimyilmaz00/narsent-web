'use server';

import prisma from '@/src/lib/prisma';
import { cookies } from 'next/headers';

const isAdmin = async () => {
    const cookieStore = await cookies();
    return cookieStore.get('narsent_session')?.value === 'authenticated';
};

export async function createLead(data: { name: string; email: string; company: string; title?: string; erp?: string }) {
    return await prisma.lead.create({
        data
    });
}

export async function updateLeadStatus(id: string, status: string) {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    return await prisma.lead.update({
        where: { id },
        data: { status }
    });
}

export async function deleteLead(id: string) {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    return await prisma.lead.delete({
        where: { id }
    });
}

export async function getLeads() {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    return await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' }
    });
}
