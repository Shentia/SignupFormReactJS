import { toast } from "react-toastify";

export const notify = (text, type) => {
  if (type === "sucess") {
    toast.success(text);
  } else {
    toast.error(text);
  }
};
