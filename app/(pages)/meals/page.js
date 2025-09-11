import { Suspense } from 'react';

import MealsHeader from '@/components/meals/Meals-header';
import MealsGrid from '@/components/meals/Meals-grid';
import LoadingMeals from '@/app/(pages)/meals/Loading-meals';
import { getAllMeals } from '@/lib/meals';

import styles from './page.module.css';

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
