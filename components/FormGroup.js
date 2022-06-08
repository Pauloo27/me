import styles from "@styles/Form.module.css";

export default function FormGroup({ children }) {
  return (
    <div className={styles.form_group}>
      {children}
    </div>
  );
}
