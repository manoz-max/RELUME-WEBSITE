import HomeSection from './components/(sections)/home/homesection'
import FeaturesShowcase from './components/(sections)/FeaturesShowcase'
export default function Home() {
  return (
    <>
      <div className="card">
      <HomeSection />
      </div>
      <FeaturesShowcase />
    </>  
  );
}
