import { z } from "zod";

type UserCardProps = {
  name?: string;
  role?: string;
  description?: string;
};

export function UserCard({
  name = "John Doe",
  role = "Frontend Developer",
  description = "AI generated user profile",
}: UserCardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
          {name.charAt(0)}
        </div>

        {/* Name + Role */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-indigo-600">{role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Badge */}
      <div className="mt-4 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
        AI Generated
      </div>
    </div>
  );
}

export const userCardSchema = z.object({
  name: z.string().optional(),
  role: z.string().optional(),
  description: z.string().optional(),
});
