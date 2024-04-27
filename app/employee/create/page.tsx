import { EmployeeForm } from "@/components/employee-form";
import { FromWrapper } from "@/components/form-wrapper";
import React from "react";

const EmployeeCreatePage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <FromWrapper title="Create a new Employee">
        <EmployeeForm />
      </FromWrapper>
    </div>
  );
};

export default EmployeeCreatePage;
