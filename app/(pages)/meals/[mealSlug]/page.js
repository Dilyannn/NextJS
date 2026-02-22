import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "../../../../lib/meals";
import styles from "./page.module.css";

export async function generateMetadata(props) {
  const params = await props.params;
  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  const summary = meal.summary
    ? meal.summary.length > 155
      ? meal.summary.slice(0, 152).trimEnd() + "…"
      : meal.summary
    : "Delicious community meal.";

  const ogImage = meal.image || "/logo.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: meal.title,
    description: summary,
    image: [ogImage],
    author: { "@type": "Person", name: meal.creator },
  };

  return {
    title: meal.title,
    description: summary,
    alternates: { canonical: `/meals/${meal.slug}` },
    openGraph: {
      title: meal.title,
      description: summary,
      url: `/meals/${meal.slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: meal.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meal.title,
      description: summary,
      images: [ogImage],
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd),
    },
  };
}

export default async function MealsDetailsPage(props) {
  const params = await props.params;

  const meal = getMeal(params.mealSlug);
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            Created by{" "}
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
