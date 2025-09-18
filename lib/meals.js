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
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    // Guard against null image
    if (!meal.image) {
        throw new Error('Image file missing.');
    }

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}-${Date.now()}.${extension}`;

    // Ensure images directory exists
    const imagesDir = 'public/images';
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    const filePath = `${imagesDir}/${fileName}`;
    const stream = fs.createWriteStream(filePath);
    const bufferedImg = await meal.image.arrayBuffer();

    await new Promise((resolve, reject) => {
        stream.write(Buffer.from(bufferedImg), (error) => {
            if (error) reject(new Error('Failed to save image.'));
            else resolve();
        });
        stream.end();
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
        VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    `).run(meal);
}