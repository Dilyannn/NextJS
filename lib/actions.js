"use server";

import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation";
import { addMeal } from "@/lib/meals";

function isValidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const imageFile = formData.get("image"); // could be a File or null

  const mealObj = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: imageFile && imageFile.size > 0 ? imageFile : null,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isValidText(mealObj.title) ||
    isValidText(mealObj.summary) ||
    isValidText(mealObj.instructions) ||
    isValidText(mealObj.creator) ||
    isValidText(mealObj.creator_email) ||
    !mealObj.creator_email.includes("@") ||
    !mealObj.image || mealObj.image.size === 0
  ) {
    return {
      message: "Invalid input - please check your data.",
    };
  }

  await addMeal(mealObj);
  revalidatePath("/meals");
  redirect("/meals");
}
