import { useMutation, useQueryClient } from "react-query";
import { createTask } from "../api";
import { TaskProps } from "./types";

const useCreateTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<TaskProps, Error, { title: string; description: string }>(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks"); // Инвалидируем кэш
    },
  });

  return mutation;
};

export default useCreateTask;
