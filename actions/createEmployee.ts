"use server";

import { db } from "@/lib/db";
import { EmployeeSchema } from "@/schemas";
import { z } from "zod";

//Server action to create Employee

export const createEmployee = async (
  values: z.infer<typeof EmployeeSchema>
) => {
  //Server Side Validation
  const validatedFields = EmployeeSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid Fields",
    };
  }

  const employee = await db.employee.create({
    data: {
      firstname: validatedFields.data?.firstName,
      lastname: validatedFields.data?.lastName,
      email: validatedFields.data?.email,
      phone: validatedFields.data?.phoneNumber,
    },
  });

  console.log(employee);
};
