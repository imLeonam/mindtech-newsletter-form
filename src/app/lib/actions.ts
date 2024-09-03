"use server";

import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const NewsletterFormSchema = z.object({
  email: z
    .string({
      message: "Esta campo é obrigatório!",
    })
    .email({ message: "Email inválido!" }),
});

export type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

async function checkIfEmailExists(data: string) {
  const exists = await prisma.newsletterSubscriptions.findUnique({
    where: { email: data },
  });
  return exists !== null;
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function createNewsletterRegister(
  prevState: State,
  formData: FormData
): Promise<State | any> {
  const validatedFields = NewsletterFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Há campos faltando. Erro ao tentar se inscrever na Newsletter.",
    };
  }

  const emailExists = await checkIfEmailExists(validatedFields.data.email);
  if (emailExists) {
    return {
      errors: {
        email: ["Este e-mail já está inscrito na nossa newsletter."],
      },
      message: "Erro ao tentar se inscrever na Newsletter.",
    };
  }

  try {
    await prisma.newsletterSubscriptions.create({
      data: {
        email: validatedFields.data.email,
      },
    });
  } catch (e) {
    return { message: "DataBase Error: Falha ao salvar email na Newsletter" };
  }

  revalidatePath("/newsletter/subscribe/success");
  redirect("/newsletter/subscribe/success");
}

export async function deleteNewsletterRegister(id: string) {
  const subscriber = await prisma.newsletterSubscriptions.findUnique({
    where: { id: id },
  });

  if (!subscriber)
    return {
      errors: [
        "E-mail não encontrado. Erro ao tentar desinscrever da Newsletter.",
      ],
      message: "Erro ao tentar desinscrever da Newsletter.",
    };

  try {
    await prisma.newsletterSubscriptions.delete({ where: { id: id } });
    return { success: true };
  } catch (e) {
    return { message: "DataBase Error: Falha ao remover email da Newsletter" };
  }
}
