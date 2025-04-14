// logout function and page setup

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { LOGOUT } from "./gql/mutations";

export default function Logout() {
  const [logout, { error }] = useMutation(LOGOUT);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      // Here you can handle the successful logout, e.g., redirecting the user or clearing user info
      router.push("/");
    } catch (e) {
      console.error("Error logging out:", e);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full p-4 text-white bg-red-500 hover:bg-red-600 rounded-md"
    >
      Log Out
    </button>
  );
}
