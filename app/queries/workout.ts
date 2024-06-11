import { gql } from "@apollo/client";

const blockFragment = gql`
  fragment BlockFields on Workout {
    blocks {
      id
      order
      setCount
      section
      blockExercises {
        id
        blockId
        exerciseId
        order
        repBase
        repMax
        durationBase
        durationMax
        weight
        swappedForBlockExerciseId
        exercise {
          name
          info
        }
      }
    }
  }
`;

export const GET_WORKOUT_WITH_BLOCKS = gql`
  ${blockFragment}
  query GetWorkoutWithBlocks {
    workout(id: 1) {
      id
      duration
      trainerName
      instructions
      bodyFocus
      ...BlockFields
    }
  }
`;

export const REPLACE_EXERCISE = gql`
  ${blockFragment}
  mutation ReplaceExercise($input: ReplaceExerciseInput!) {
    replaceExercise(input: $input) {
      ...BlockFields
    }
  }
`;
