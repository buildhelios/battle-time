import { tipOfTheDaySubject } from "./state-subjects";

export const tipsOfTheDay=[
    "Take regular breaks during work to boost productivity.",
    "Stay hydrated throughout the day for better focus.",
    "Set daily goals to stay organized and motivated.",
    "Practice mindfulness to reduce stress and increase clarity.",
    "Start your day with a healthy breakfast for sustained energy.",
    "Limit screen time before bed to improve sleep quality.",
    "Prioritize tasks by importance and deadline.",
    "Incorporate physical activity into your daily routine.",
    "Stay positive by practicing gratitude each day.",
    "Learn something new every day to keep your mind sharp.",
    "Communicate openly and clearly with colleagues and friends.",
    "Keep a clean and organized workspace for better focus.",
    "Practice deep breathing exercises to manage stress.",
    "Read regularly to expand your knowledge and vocabulary.",
    "Plan your meals ahead of time to ensure a balanced diet.",
    "Network regularly to build and maintain professional relationships.",
    "Get at least 7-8 hours of sleep each night for optimal health.",
    "Break large tasks into smaller, manageable steps.",
    "Listen to uplifting music to boost your mood.",
    "Stay curious and open to new ideas and experiences."
];

export const newTipOfTheDay=()=>{
    tipOfTheDaySubject.next(tipsOfTheDay[Math.round((tipsOfTheDay.length-1)*Math.random())])
}
