export type Workout = {
  id: number;
  trainerName?: string;
  duration: number;
  instructions: string;
  bodyFocus: Muscles[];
  blockExercises: BlockExercise[];
  blocks: Block[];
};

export type Block = {
  id: number;
  name: string;
  setCount: number;
  blockExercises: BlockExercise[];
  section?: "warmup" | "cooldown";
  order: number;
};

export type BlockExercise = {
  id: number;
  exercise: Exercise;
  exerciseId?: number;
  block: Block;
  blockId?: number;
  repBase?: number;
  repMax?: number;
  durationBase?: number;
  durationMax?: number;
  weight?: number;
  workouts?: Workout[];
  order: number;
  swappedForBlockExerciseId?: number;
};

export type Exercise = {
  id: number;
  name: string;
  muscleGroups: Muscles[];
  blockExercises?: BlockExercise[];
  info?: string;
};

const mg = [
  { id: 0, name: "Full Body" },
  { id: 1, name: "Chest" },
  { id: 2, name: "Back" },
  { id: 3, name: "Shoulders" },
  { id: 4, name: "Biceps" },
  { id: 5, name: "Triceps" },
  { id: 6, name: "Forearms" },
  { id: 7, name: "Abs" },
  { id: 8, name: "Obliques" },
  { id: 9, name: "Quads" },
  { id: 10, name: "Hamstrings" },
  { id: 11, name: "Glutes" },
  { id: 12, name: "Calves" },
  { id: 13, name: "Neck" },
  { id: 14, name: "Upper Back" },
  { id: 15, name: "Lower Back" },
  { id: 16, name: "Traps" },
  { id: 17, name: "Adductors" },
  { id: 18, name: "Abductors" },
  { id: 19, name: "Serratus" },
  { id: 20, name: "Hip Flexors" },
] as const;

export type Muscles = (typeof mg)[number]["name"];
