import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  loanAmount: z.preprocess(
    (val) => Number(val),
    z.number().positive({
      message: "Loan amount must be greater than 0",
    })
  ),
  interestRate: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .positive({
        message: "Interest rate must be greater than 0",
      })
      .max(100, {
        message: "Interest rate cannot be greater than 100%",
      })
  ),
  loanTerm: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .positive({
        message: "Loan term must be greater than 0",
      })
      .max(30, {
        message: "Loan term cannot be greater than 30 years",
      })
  ),
});

export function LoanCalculatorForm({ setCalculationsResult }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanAmount: "",
      interestRate: "",
      loanTerm: "",
    },
  });

  function onSubmit(values) {
    const loanAmount = values.loanAmount;
    const annualInterestRate = values.interestRate;
    const loanTermYears = values.loanTerm;

    const monthlyInterestRate = annualInterestRate / 1200;
    const numberOfPayments = loanTermYears * 12;

    const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyPayment = numerator / denominator;

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    setCalculationsResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
    });
    toast.success("Loan calculations completed successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center gap-8">
        <div className="grid grid-cols-1 sm:place-items-center gap-5 mx-auto w-full">
          <FormField
            control={form.control}
            name="loanAmount"
            render={({ field }) => (
              <FormItem className="sm:w-96">
                <FormLabel>Loan Amount</FormLabel>
                <FormControl>
                  <Input
                    className="text-ellipsis"
                    placeholder="Enter the total amount of the loan"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestRate"
            render={({ field }) => (
              <FormItem className="sm:w-96">
                <FormLabel>Interest Rate (%)</FormLabel>
                <FormControl>
                  <Input
                    className="text-ellipsis"
                    placeholder="Enter annual interest rate of the loan"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="loanTerm"
            render={({ field }) => (
              <FormItem className="sm:w-96">
                <FormLabel>Loan Term (Years)</FormLabel>
                <FormControl>
                  <Input
                    className="text-ellipsis"
                    placeholder="Enter number of years the loan will be repaid over"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="flex gap-2 items-center group">
          <span className="group-hover:translate-x-[-2px] transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevrons-left"
            >
              <path d="m11 17-5-5 5-5" />
              <path d="m18 17-5-5 5-5" />
            </svg>
          </span>
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  );
}
