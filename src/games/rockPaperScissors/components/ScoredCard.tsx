import { useEffect, useState } from "react"

interface ScoredCardProps{
    label: string;
    score: number;
    type: string;
}

export default function ScoredCard({ label, score, type }: ScoredCardProps) {

    const [isAnimateScore, setIsAnimateScore] = useState(false);

    useEffect(() => {
        if(score !== 0){
            setIsAnimateScore(true);
            const timeout = setTimeout(()=> setIsAnimateScore(false), 1000);
            return ()=> clearTimeout(timeout);
        }
    }, [score]);

    return (
        <div className={`rps-score-card rps-${type}-score`}>
            <div className="rps-score-label"> {label} </div>
            <div className={`rps-score-value ${isAnimateScore ? "animate" : "" }`}> {score} </div>
        </div>
    )
}