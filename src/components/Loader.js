

import { useProgress, Html } from "@react-three/drei";

const CanvasLoader = () => {
    // this is a hook
    const { progress } = useProgress();


    return (
        <Html as="div" center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <span className="canvas-loader"></span>
            <p style={{ fontSize: '14', color: 'green', fontWeight: 800, marginTop: 40 }}>
                {progress.toFixed(2)}%
            </p>

        </Html>
    )
}


export default CanvasLoader