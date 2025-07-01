import CategoriesSection from "@/components/landing/categories-section";
import FeaturesSection from "@/components/landing/features-section";

export default async function Dashboard() {

  return (
    <main>
      <div className="space-y-16">
        <FeaturesSection />
        <CategoriesSection />
      </div>
    </main>
  );
}