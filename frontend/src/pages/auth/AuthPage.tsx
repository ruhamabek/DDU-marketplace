import { useParams } from "react-router-dom";
import { AuthCard } from "@daveyplate/better-auth-ui";

export default function AuthPage() {
  const { pathname } = useParams();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <AuthCard pathname={pathname} />
    </div>
  );
}
