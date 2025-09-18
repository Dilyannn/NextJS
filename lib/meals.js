import fs from 'fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getAllMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error('Failed to fetch meals!');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);  
}

export async function addMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}-${Date.now()}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImg = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImg), (error) => {
        if (error) throw new Error('Failed to save image.');
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals (title, summary, instructions, image, creator, creator_email, image, slug)
        VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @image, @slug)
    `).run(meal);
}