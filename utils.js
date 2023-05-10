import { redirect } from "react-router-dom";

const requireAuth = async (request) => {
  const pathname = new URL(request.url).pathname;
  const loggedIn = localStorage.getItem("logged");
  if (!loggedIn) {
    throw redirect(
      `/login?message=you need to log in first.&redirectTo=${pathname}`
    );
  }
};
export default requireAuth;
