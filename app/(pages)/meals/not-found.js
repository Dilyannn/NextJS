
import Image from 'next/image';
import emptyPlateImg from '@/assets/empty-plate.png';

export default function NotFound() {
    return (
        <main className="not-found" style={{ textAlign: 'center', padding: '3rem' }}>
            <h1>Meal Not Found</h1>
            <p>
                Oops! We couldn&#39;t find the meal you&#39;re looking for.<br />
                Please check the meal name or try searching again.
            </p>
            <Image
                src={emptyPlateImg}
                alt="Empty plate"
                width={220}
                height={220}
                style={{ marginTop: '2rem' }}
            />
        </main>
    );
}
