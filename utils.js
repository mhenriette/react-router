import { redirect } from "react-router-dom";

const requireAuth = async () => {
  const loggedIn = false;
  if (!loggedIn) {
    throw redirect("/login?message=you need to log in first");
  }
  return null;
};
export default requireAuth;
