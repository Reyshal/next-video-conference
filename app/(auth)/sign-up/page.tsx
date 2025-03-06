"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function SignUp() {
  const router = useRouter();

  const [error, setError] = useState<string | null>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data } = await axios.post("/api/users", {
        username: values.username,
        password: values.password,
      });

      form.reset();
      setError(null);

      toast(data.message);
      router.push("/sign-in");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { errors } = error.response!.data;

        errors.forEach(
          (error: { field: "username" | "password"; message: string }) => {
            form.setError(error.field, {
              type: "server",
              message: error.message,
            });
          }
        );
      }
    }
  };

  return (
    <>
      <h1 className="text-2xl font-medium mb-4 text-center">Sign up to YOOK</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 mb-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full hover:cursor-pointer">
            Submit
          </Button>
        </form>
      </Form>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a
          href="/sign-in"
          className="underline md:no-underline md:hover:underline text-blue-500"
        >
          Sign in
        </a>
      </div>
    </>
  );
}
