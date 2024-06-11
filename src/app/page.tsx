import Image from 'next/image';
import heroImage from '@/assets/hero.png';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <Image
        className="max-w-sm md:max-w-xl"
        src={heroImage}
        alt="Imagem"
        width={600}
      />
    </main>
  );
}
