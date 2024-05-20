import styles from '../css/bubble.module.css'; // Correct import for CSS module

const BubbleText = (props) => {
    const text = props.text
    return (
        <h2 className="text-4xl font-bold"
        >

            {text.split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
          {child}
        </span>
            ))}
        </h2>
    );
};

export default BubbleText

