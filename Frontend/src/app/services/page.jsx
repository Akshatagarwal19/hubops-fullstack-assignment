import ServiceCard from "@/components/ServiceCard";
import styles from "./services.module.css";

export const metadata = {
  title: "Our Services | HubOps",
  description: "Explore HubOps B2B branding and digital consulting services.",
};
async function getServices() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Digital & Branding Consulting for B2B Growth
        </h1>
        <p className={styles.heroSubtitle}>
          We help modern businesses scale through strategy, SEO, and digital
          transformation solutions designed for long-term growth.
        </p>
        <button className={styles.primaryBtn}>Get Started</button>
      </section>
      <h1 className={styles.heading}>Our Services</h1>

      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
}
