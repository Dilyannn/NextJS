"use server";

import { redirect } from "next/dist/server/api-utils/index.js";
import { addMeal } from "@/lib/meals";

function isValidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData) {
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
    !mealObj.image || !mealObj.image.size === 0
  ) {
    throw new Error("Missing required fields.");
  }

  await addMeal(mealObj);
  redirect("/meals");
}
