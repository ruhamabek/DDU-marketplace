import * as React from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Assuming you have Card components
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import authClient from "@/lib/auth-client"; // Assuming you have an authClient setup
import { signUpSchema } from "../../validation/signUp"; // Assuming you have a signUpSchema validation

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const signUp = async () => {
    const validation = signUpSchema.safeParse({
      email,
      password,
      name,
      confirmPassword,
    });

    if (!validation.success) {
      const errorMap: { [key: string]: string } = {};
      validation.error.issues.forEach((issue) => {
        errorMap[issue.path[0].toString()] = issue.message;
      });
      setErrors(errorMap);
      return;
    }

    setErrors({});

    try {
      setLoading(true);
      await authClient.signUp.email({
        email,
        password,
        name,
      });
      navigate("/"); // Redirect to home or other page upon success
    } catch (err) {
      setLoading(false);
      alert("Error: " + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row  -z-10 ">
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="/home.webp" // Add your image path here
          alt="Authentication background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0  " />
        <div className="relative w-full flex items-center justify-center z-10">
          <div className="text-white p-8">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="mt-4">Sign in to continue your journey</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-3 sm:p-6 min-h-screen relative">
        <div className="absolute top-2 right-2"></div>

        <Card className="w-full max-w-sm mx-auto dark:bg-white/5 dark:border-white/5 border rounded-sm">
          <CardHeader className="space-y-1 p-4">
            <h1 className="text-xl font-semibold text-foreground">
              Create an Account
            </h1>
            <p className="text-xs text-muted-foreground">
              Enter your details to create your account
            </p>
          </CardHeader>
          <CardContent className="space-y-3 p-4">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground" htmlFor="name">
                Full Name
              </label>
              <Input
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Enter your full name"
                type="text"
                className={`h-8 outline-none focus:outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                className={`h-8 outline-none focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
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
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`h-8 outline-none focus:outline-none ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password}</p>
              )}
            </div>
            <div className="space-y-1">
              <label
                className="text-xs text-muted-foreground"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className={`h-8 outline-none focus:outline-none ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <Button
              className="w-full h-8 mt-2"
              onClick={signUp}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Create Account"}
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
            <div className="text-center text-xs mt-4">
              <span className="text-muted-foreground">
                Already have an account?{" "}
              </span>
              <Link to="/register" className="text-foreground hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
