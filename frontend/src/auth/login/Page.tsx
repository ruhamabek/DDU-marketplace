import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Assuming you have Card components
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Eye, EyeOff } from "lucide-react";
import authClient from "@/lib/auth-client"; // Assuming you have an authClient setup

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
          navigate("/");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex bg-background">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-3 sm:p-6 relative">
        <div className="absolute top-2 right-2"></div>

        <div className="w-full max-w-sm text-center mb-4 lg:hidden">
          <h1 className="text-xl font-bold">Welcome Back</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Sign in to continue your journey
          </p>
        </div>

        <Card className="w-full max-w-sm shadow-sm rounded-sm dark:border-white/5 dark:bg-white/5">
          <CardHeader className="space-y-1 p-4">
            <h1 className="text-lg font-semibold">Login</h1>
            <p className="text-xs text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </CardHeader>
          <CardContent className="space-y-4 p-4">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="h-9 text-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-xs text-muted-foreground"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-9 text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-9 w-9"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </Button>
              </div>
            </div>
            <Button
              className="w-full h-9 text-sm"
              onClick={handleSignIn}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={async () => {
                  await authClient.signIn.social({
                    provider: "google",
                  });
                }}
                className="w-full h-9 hover:bg-white/5 text-sm text-white bg-white/5"
              >
                <svg
                  className="mr-2 h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
            </div>
            <div className="text-center text-xs pt-1">
              <span className="text-muted-foreground">
                Don&apos;t have an account?{" "}
              </span>
              <Link
                to="/signin"
                className="text-foreground hover:underline font-medium"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="/home.webp"
          alt="Authentication background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative w-full flex items-center justify-center z-10">
          <div className="text-white p-8">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="mt-4">Sign in to continue your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
}
