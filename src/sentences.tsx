export const sentences = [
  "The quick brown fox jumps over the lazy dog",
  "Technology continues to evolve at a rapid pace",
  "Practice makes perfect when learning new skills",
  "The sun rises in the east and sets in the west",
  "Reading books expands your knowledge and vocabulary",
  "Music has the power to inspire and motivate people",
  "Exercise regularly to maintain good health and fitness",
  "Cooking delicious meals brings joy to many families",
  "Learning new languages opens doors to opportunities",
  "Friendship is one of life's most precious gifts",
  "Nature provides us with beauty and tranquility",
  "Art allows people to express their creativity freely",
  "Education is the key to personal growth and success",
  "Traveling broadens your perspective on different cultures",
  "Hard work and dedication lead to achievement",
  "Kindness and compassion make the world better",
  "Innovation drives progress in science and technology",
  "Good communication skills are essential in relationships",
  "Time management helps you accomplish more each day",
  "Positive thinking can improve your overall wellbeing"
];

export const getRandomSentence = () => {
  return sentences[Math.floor(Math.random() * sentences.length)];
};