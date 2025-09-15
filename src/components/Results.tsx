interface ResultsProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

export function Results({ score, totalQuestions, onRestart }: ResultsProps) {
    const percentage = Math.round((score / totalQuestions) * 100);

    const getGrade = () => {
        if (percentage >= 90) return { grade: 'Excellent!', emoji: '🎉', color: '#4CAF50' };
        if (percentage >= 80) return { grade: 'Great job!', emoji: '👏', color: '#8BC34A' };
        if (percentage >= 70) return { grade: 'Good work!', emoji: '👍', color: '#FFC107' };
        if (percentage >= 60) return { grade: 'Not bad!', emoji: '👌', color: '#FF9800' };
        return { grade: 'Keep practicing!', emoji: '💪', color: '#FF5722' };
    };

    const gradeInfo = getGrade();

    return (
        <div className="results-container">
            <div className="results-header">
                <h1>Quiz Complete!</h1>
                <div className="score-circle" style={{ borderColor: gradeInfo.color }}>
                    <span className="score-percentage" style={{ color: gradeInfo.color }}>
                        {percentage}%
                    </span>
                </div>
            </div>

            <div className="results-details">
                <h2 style={{ color: gradeInfo.color }}>
                    {gradeInfo.emoji} {gradeInfo.grade}
                </h2>
                <p className="score-text">
                    You got <strong>{score}</strong> out of <strong>{totalQuestions}</strong> questions correct!
                </p>
            </div>

            <div className="results-actions">
                <button className="restart-button" onClick={onRestart}>
                    🔄 Take Quiz Again
                </button>
            </div>
        </div>
    );
}