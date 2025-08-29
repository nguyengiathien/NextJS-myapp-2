'use server'

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function revalidateProductPath(formData) {
    const path = formData.get('path');
    if(path){
        revalidateTag(path);
        console.log(`Cleared cache for page: ${path}`);
        redirect(path);
    }
}