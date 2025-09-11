import MealsHeader from '@/components/meals/meals-header';
import MealsGrid from '@/components/meals/meals-grid';
import { getAllMeals } from '@/lib/meals';

import styles from './page.module.css';

export default async function MealsPage() {
  const meals = await getAllMeals();

  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
