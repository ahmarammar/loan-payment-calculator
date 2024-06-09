import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoanCalculatorForm } from "./components/LoanCalculatorForm";
import LoanCalculationsResults from "./components/LoanCalculationsResults";

export default function LoanCalculator() {
  const [calculationsResult, setCalculationsResult] = React.useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
  });
  return (
    <div className="max-w-7xl mx-auto p-10">
      <Card className="p-4">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-semibold">Loan Calculator</CardTitle>
          <CardDescription className="max-w-2xl mx-auto text-sm md:text-md p-4">
            Use our loan calculator to calculate payments over the life of your loan. Enter your information to see how
            much your monthly payments could be. You can adjust length of loan, down payment and interest rate to see
            how those changes raise or lower your payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoanCalculatorForm setCalculationsResult={setCalculationsResult} />
        </CardContent>
        <CardFooter>
          <Card className="mx-auto">
            <CardContent className="p-0">
              <LoanCalculationsResults calculationsResult={calculationsResult} />
            </CardContent>
          </Card>
        </CardFooter>
      </Card>
    </div>
  );
}
