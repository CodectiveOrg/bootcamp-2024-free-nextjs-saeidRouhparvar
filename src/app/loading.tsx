import React from "react";

type SpinnerProps = {
  size?: number;
  color?: string;
  className?: string;
};

const Loading: React.FC<SpinnerProps> = ({
  size = 32,
  color = "#000",
  className,
}) => {
  const styles = {
    spinner_1KD7: {
      animation: "spinner_6QnB 1.2s infinite",
      fill: color,
    },
    spinner_MJg4: {
      animationDelay: ".1s",
    },
    spinner_sj9X: {
      animationDelay: ".2s",
    },
    spinner_WwCl: {
      animationDelay: ".3s",
    },
    spinner_vy2J: {
      animationDelay: ".4s",
    },
    spinner_os1F: {
      animationDelay: ".5s",
    },
    spinner_l1Tw: {
      animationDelay: ".6s",
    },
    spinner_WNEg: {
      animationDelay: ".7s",
    },
    spinner_kugV: {
      animationDelay: ".8s",
    },
    spinner_4zOl: {
      animationDelay: ".9s",
    },
    spinner_7he2: {
      animationDelay: "1s",
    },
    spinner_SeO7: {
      animationDelay: "1.1s",
    },
    "@keyframes spinner_6QnB": {
      "0%,50%": {
        animationTimingFunction: "cubic-bezier(0.27,.42,.37,.99)",
        r: "0",
      },
      "25%": {
        animationTimingFunction: "cubic-bezier(0.53,0,.61,.73)",
        r: "2px",
      },
    },
  };
  return (
    <div className={"spinner"}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <style>{`
        .spinner_1KD7{animation:spinner_6QnB 1.2s infinite; fill: ${color}}
        .spinner_MJg4{animation-delay:.1s}
        .spinner_sj9X{animation-delay:.2s}
        .spinner_WwCl{animation-delay:.3s}
        .spinner_vy2J{animation-delay:.4s}
        .spinner_os1F{animation-delay:.5s}
        .spinner_l1Tw{animation-delay:.6s}
        .spinner_WNEg{animation-delay:.7s}
        .spinner_kugV{animation-delay:.8s}
        .spinner_4zOl{animation-delay:.9s}
        .spinner_7he2{animation-delay:1s}
        .spinner_SeO7{animation-delay:1.1s}
        @keyframes spinner_6QnB{
            0%,50%{animation-timing-function:cubic-bezier(0.27,.42,.37,.99);r:0}
            25%{animation-timing-function:cubic-bezier(0.53,0,.61,.73);r:2px}
        }
      `}</style>
        <circle
          style={styles.spinner_1KD7}
          className="spinner_1KD7"
          cx="12"
          cy="3"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_MJg4 }}
          className="spinner_1KD7 spinner_MJg4"
          cx="16.50"
          cy="4.21"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_SeO7 }}
          className="spinner_1KD7 spinner_SeO7"
          cx="7.50"
          cy="4.21"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_sj9X }}
          className="spinner_1KD7 spinner_sj9X"
          cx="19.79"
          cy="7.50"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_7he2 }}
          className="spinner_1KD7 spinner_7he2"
          cx="4.21"
          cy="7.50"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_WwCl }}
          className="spinner_1KD7 spinner_WwCl"
          cx="21.00"
          cy="12.00"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_4zOl }}
          className="spinner_1KD7 spinner_4zOl"
          cx="3.00"
          cy="12.00"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_vy2J }}
          className="spinner_1KD7 spinner_vy2J"
          cx="19.79"
          cy="16.50"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_kugV }}
          className="spinner_1KD7 spinner_kugV"
          cx="4.21"
          cy="16.50"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_os1F }}
          className="spinner_1KD7 spinner_os1F"
          cx="16.50"
          cy="19.79"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_WNEg }}
          className="spinner_1KD7 spinner_WNEg"
          cx="7.50"
          cy="19.79"
          r="0"
        />
        <circle
          style={{ ...styles.spinner_1KD7, ...styles.spinner_l1Tw }}
          className="spinner_1KD7 spinner_l1Tw"
          cx="12"
          cy="21"
          r="0"
        />
      </svg>
    </div>
  );
};

export default Loading;
