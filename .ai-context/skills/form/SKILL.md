---
name: form
description: Use when building or validating forms with Zod, React Hook Form, shadcn/ui, and next-safe-action.
---

# Trigger
Use when creating, modifying, or reviewing form validation, form state, server submissions, modal forms, or create/update forms.

# Structure

## Validation
- Always use Zod for validation.
- Provide clear, specific, localized messages for every validation case.
- Use `.refine()` / `.superRefine()` for cross-field validation.
- Export inferred types with schemas.
- Keep schemas in `schemas.ts`.

```tsx
export const userSchema = z.object({
  email: z.string()
    .min(1, "L'email est obligatoire")
    .email("Format d'email invalide"),
  password: z.string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export type UserFormValues = z.infer<typeof userSchema>;
```

## Form

- Always use React Hook Form + shadcn `Form`.
- Connect Zod with `zodResolver`.
- Use:
  `FormField → FormItem → FormLabel + FormControl + FormMessage`.

```tsx
const form = useForm<UserFormValues>({
  resolver: zodResolver(userSchema),
  defaultValues: {
    email: "",
    password: "",
    confirmPassword: "",
  },
});
```

## Server Actions

- Prefer server actions for form mutations.
- Use `next-safe-action` with `"use server"`.
- Define actions in `features/<feature>/actions.ts`.
- Validate with the form's Zod schema.
- Keep business logic in the service layer.

```tsx
// features/user/actions.ts
"use server";

import { actionClient } from "@/lib/safe-actions";
import { userSchema } from "./schemas";
import { createUser } from "./services/create-user";

export const createUserAction = actionClient
  .schema(userSchema)
  .action(async ({ parsedInput }) => {
    return await createUser(parsedInput);
  });
```

## Feedback

- Use `sonner` for success/error feedback.
- Use `handleFormValidationErrors(result, form)` to map server validation errors when available.
- Reset the form after successful creation/update.

## Modal Forms

- Use shadcn `Dialog`.
- Reset when closed.
- Disable actions while submitting.
- Show `Loader2` during submission.
- Use `outline` for Cancel and the project's primary variant for Submit.

## Create / Update

- Reuse one form component for create/update when the structure is shared.
- Determine mode from `initialData`.
- Use the appropriate schema and defaults.
- Adapt labels and submit behavior to the mode.

# Steering

- Prefer server actions for mutations unless client-side behavior is genuinely required.
- Keep schemas, actions, services, hooks, and UI separated by responsibility.
- Reuse validation rules between client and server.
- Keep complex form logic in a hook rather than the component.
- Keep server actions thin and delegate business logic to services.

# Pruning

- Do not validate manually instead of using Zod.
- Do not duplicate validation rules.
- Do not put business/database logic in form components or server actions.
- Do not use `"use client"` unnecessarily.
- Do not duplicate create/update forms when they can reasonably share one component.
- Do not replace the project's existing form abstractions without a clear reason.

