import { useDispatch } from "react-redux";
import { AppDispath } from "../store";

export const useAppDispatch = ()=>useDispatch<AppDispath>()