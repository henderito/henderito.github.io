// 'use server'

// import { revalidatePath } from "next/cache";
// import { z } from 'zod'


// export interface IContactFormState {
//     name: string;
//     email: string;
//     message: string;
// }

// export async function sendContactForm(prevState: { message: string }, formData: FormData) {
//     const schema = z.object({
//         name: z.string(),
//         email: z.string().email(),
//         message: z.string()
//     })

//     const parse = schema.safeParse({
//         name: formData.get('name'),
//         email: formData.get('email'),
//         contact: formData.get('message)')
//     })

//     if (!parse.success) {
//         return { message: "Data is invalid" }
//     }
    
//     const data = parse.data;
//     revalidatePath('/')

//     return { message: "Form submitted" }
// }