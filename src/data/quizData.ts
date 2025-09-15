export interface QuizQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        question: "What is React primarily used for?",
        options: [
            "Backend development",
            "Building user interfaces",
            "Database management",
            "Server configuration"
        ],
        correctAnswer: 1,
        explanation: "React is a JavaScript library for building user interfaces, especially for web applications."
    },
    {
        id: 2,
        question: "Which hook is used for managing component state in React?",
        options: [
            "useEffect",
            "useContext",
            "useState",
            "useReducer"
        ],
        correctAnswer: 2,
        explanation: "useState is the primary hook for managing local state in functional React components."
    },
    {
        id: 3,
        question: "What does 'IaC' stand for in cloud computing?",
        options: [
            "Internet as Code",
            "Infrastructure as Code",
            "Integration as Code",
            "Intelligence as Code"
        ],
        correctAnswer: 1,
        explanation: "Infrastructure as Code (IaC) allows you to manage infrastructure through code rather than manual processes."
    },
    {
        id: 4,
        question: "Which cloud provider owns Azure?",
        options: [
            "Google",
            "Amazon",
            "Microsoft",
            "IBM"
        ],
        correctAnswer: 2,
        explanation: "Microsoft Azure is Microsoft's cloud computing platform and infrastructure."
    },
    {
        id: 5,
        question: "What is TypeScript?",
        options: [
            "A JavaScript runtime",
            "A superset of JavaScript with static typing",
            "A CSS preprocessor",
            "A database query language"
        ],
        correctAnswer: 1,
        explanation: "TypeScript is a superset of JavaScript that adds static type definitions to help catch errors during development."
    },
    {
        id: 6,
        question: "What is the primary purpose of GitHub Actions?",
        options: [
            "Code editing",
            "Version control",
            "CI/CD automation",
            "Issue tracking"
        ],
        correctAnswer: 2,
        explanation: "GitHub Actions is a CI/CD platform that allows you to automate build, test, and deployment workflows."
    },
    {
        id: 7,
        question: "Which command is used to create a new React app with Vite?",
        options: [
            "create-react-app",
            "npm create vite@latest",
            "npx react-new",
            "yarn create react"
        ],
        correctAnswer: 1,
        explanation: "Vite provides a modern and fast development experience for React applications."
    },
    {
        id: 8,
        question: "What is Terraform used for?",
        options: [
            "Code compilation",
            "Infrastructure provisioning",
            "Package management",
            "Code testing"
        ],
        correctAnswer: 1,
        explanation: "Terraform is an Infrastructure as Code tool that allows you to provision and manage cloud infrastructure."
    }
];