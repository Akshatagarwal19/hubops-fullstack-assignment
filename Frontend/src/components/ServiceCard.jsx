import styles from "../app/services/services.module.css";

export default function ServiceCard({ service }) {
  return (
    <div className={styles.card}>
      <h2>
        {service.icon} {service.title}
      </h2>
      <p>{service.description}</p>
    </div>
  );
}
