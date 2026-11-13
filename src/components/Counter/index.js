import styles from "./styles.module.css";
import { useState } from "react";

export default ({ startCount }) => {
	const [count, setCount] = useState(startCount);
	return (
		<div className={styles.counter}>
			<div>
				<button className={styles["counter-button"]} onClick={() => setCount(count - 1)}>
					-
				</button>
			</div>
			<div className={styles["counter-display"]}>{count}</div>
			<div>
				<button className={styles["counter-button"]} onClick={() => setCount(count + 1)}>
					+
				</button>
			</div>
		</div>
	);
};
