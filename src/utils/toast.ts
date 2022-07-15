import { toast } from "react-toastify";
import { ToastInput } from "../redux/interfaces/UiInterfaces";

export const notify = ({ message, type }: ToastInput) =>
  toast[type](message, { position: toast.POSITION.TOP_CENTER });
