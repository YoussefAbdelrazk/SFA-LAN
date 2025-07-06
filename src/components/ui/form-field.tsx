import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, error, children, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  isValid?: boolean;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, isValid, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div
              className={cn(
                "text-gray-400 transition-colors duration-200",
                error && "text-red-400",
                isValid && !error && "text-green-500",
              )}
            >
              {icon}
            </div>
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "block w-full px-3 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-200 placeholder-gray-500",
            icon && "pl-10",
            // Default state
            !error && !isValid && "border-gray-300 focus:ring-[#3E1492] focus:border-[#3E1492]",
            // Error state
            error && "border-red-300 focus:ring-red-500 focus:border-red-500",
            // Valid state
            isValid && !error && "border-green-300 focus:ring-green-500 focus:border-green-500",
            className,
          )}
          {...props}
        />

        {/* Validation Icon */}
        {(error || isValid) && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {error ? (
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : isValid ? (
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : null}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  isValid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, isValid, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          ref={ref}
          className={cn(
            "block w-full px-3 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-200 resize-none placeholder-gray-500",
            // Default state
            !error && !isValid && "border-gray-300 focus:ring-[#3E1492] focus:border-[#3E1492]",
            // Error state
            error && "border-red-300 focus:ring-red-500 focus:border-red-500",
            // Valid state
            isValid && !error && "border-green-300 focus:ring-green-500 focus:border-green-500",
            className,
          )}
          {...props}
        />

        {/* Validation Icon */}
        {(error || isValid) && (
          <div className="absolute top-3 right-3 pointer-events-none">
            {error ? (
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : isValid ? (
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : null}
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
