'use server';
import { addMeal } from '@/lib/meals';

export async function shareMeal(formData) {
  const imageFile = formData.get('image'); // could be a File or null

  const mealObj = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: imageFile && imageFile.size > 0 ? imageFile : null,
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  // Basic validation
  if (!mealObj.title || !mealObj.summary || !mealObj.instructions || !mealObj.creator || !mealObj.creator_email) {
    throw new Error('Missing required fields.');
  }

  if (!mealObj.image) {
    throw new Error('Please select an image.');
  }

  await addMeal(mealObj);
}