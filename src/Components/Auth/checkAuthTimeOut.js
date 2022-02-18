import { AuthLogOut } from "../Redux/Slices/AuthSlice";
const checkAuthTimeOut = (expirationDate, fn) => {
  setTimeout(() => {
    fn(AuthLogOut());
  }, expirationDate * 1000);
};
export default checkAuthTimeOut;
