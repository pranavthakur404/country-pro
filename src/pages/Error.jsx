import { useRouteError } from "react-router-dom";
import styles from "../pages_css/Error.module.css";
function Error() {
  const { message } = useRouteError();

  return (
    <div className={styles.errorContainer}>
      <h1>404 Not Found !</h1>
    </div>
  );
}

export default Error;
