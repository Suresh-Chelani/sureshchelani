import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import useSound from "use-sound";

const ToggleCircle = () => {
    const [flip, setFlip] = useState(false);
    const [playClick] = useSound('/sounds/click1.wav', { volume: 0.5 });

    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            {/* Front: Circle with Image */}
            <div
                style={{
                    width: '150px',
                    height: '150px',
                    backgroundImage: "url('/images/profileImg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
                onClick={() => { setFlip(!flip), playClick() }}
            >
            </div>

            {/* Back: Circle with SC */}
            <div
                style={{
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(to right, #06b6d4, #9333ea)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
                onClick={() => { setFlip(!flip), playClick() }}
            >
                <span style={{ fontSize: '40px', color: 'white', fontWeight: 'bold' }}>
                    SC
                </span>
            </div>
        </ReactCardFlip>
    );
}

export default ToggleCircle;

