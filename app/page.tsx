import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 mt-4 items-center justify-center w-screen h-screen">
      <h1 className="text-4xl font-bold ">Home</h1>
      <h1 className="text-2xl font-semibold">
        CRUD operations Using Next JS, Prisma, PostgreSQL
      </h1>

      <Button asChild>
        <Link href="/employee">Employee</Link>
      </Button>
    </div>
  );
};

export default Home;
