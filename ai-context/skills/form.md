# Form Rules

## Validation (Zod)

- Always use **Zod** for form validation
- Provide clear, specific error messages for every validation case (empty, invalid format, min/max, etc.)
- Error messages must be in the app's language (French, English, etc.)
- Use `.refine()` or `.superRefine()` for cross-field validation
- Export inferred types alongside schemas: `export type FormValues = z.infer<typeof schema>`

```tsx
export const userSchema = z.object({
  email: z.string().min(1, "L'email est obligatoire").email("Format d'email invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});
```

## Form Library

- Always use **react-hook-form** + **shadcn Form** components
- Use `zodResolver` to connect Zod schema to react-hook-form
- Wrap all fields in `<Form>` provider
- Each field uses: `FormField` > `FormItem` > `FormLabel` + `FormControl` + `FormMessage`

```tsx
const form = useForm<FormValues>({
  resolver: zodResolver(userSchema),
  defaultValues: { email: "", password: "", confirmPassword: "" },
});

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input {...field} placeholder="exemple@email.com" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

## Server-Side Forms (next-safe-action)

- Use **next-safe-action** for server-side form submissions
- Define actions in `features/<feature>/actions.ts` with `"use server"` directive
- Use `actionClient.schema(zodSchema).action(...)` pattern
- Actions wrap service layer calls (from `features/<feature>/services/`)

```tsx
// features/user/actions.ts
"use server";

import { actionClient } from "@/lib/safe-actions";
import { userSchema } from "./schemas";
import { createUser } from "./services";

export const createUserAction = actionClient
  .schema(userSchema)
  .action(async ({ parsedInput }) => {
    return await createUser(parsedInput);
  });
```

## Feedback (Toast)

- Use **toast** from `sonner` for success and error messages
- Success: `toast.success("Opération réussie")`
- Error: `toast.error("Une erreur est survenue")`
- For form validation errors from server: use `handleFormValidationErrors(result, form)` to map errors to fields + show toast for server errors

```tsx
const onSubmit = async (data: FormValues) => {
  try {
    await createUser(data);
    toast.success("Utilisateur créé avec succès");
    form.reset();
    onSuccess?.();
  } catch (error) {
    toast.error("Erreur lors de la création");
  }
};
```

## Modal Forms

- Use shadcn `Dialog` for modal forms
- Props: `open`, `onOpenChange`, `onSuccess?`
- Reset form when modal closes: `useEffect(() => { if (!open) form.reset(); }, [open, form])`
- Footer buttons: Cancel (`variant="outline"`) + Submit (`variant="primary-gradient"`)
- Submit button shows `Loader2` spinner when `form.formState.isSubmitting`
- Disable both buttons during submission

```tsx
<Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>Créer un utilisateur</DialogTitle>
    </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* FormFields */}
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
            Annuler
          </Button>
          <Button type="submit" variant="primary-gradient" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Créer
          </Button>
        </div>
      </form>
    </Form>
  </DialogContent>
</Dialog>
```

## Create/Update Pattern

- Use the same form component for both create and update
- Resolve schema dynamically based on whether `initialData` is present
- Disable email/identifier fields in update mode
- Change button text: "Créer" vs "Mettre à jour"

```tsx
const isUpdate = !!initialData;
const schema = isUpdate ? updateSchema : createSchema;

const form = useForm<FormValues>({
  resolver: zodResolver(schema),
  defaultValues: initialData ?? { /* empty defaults */ },
});
```

## Form Sections

- Separate form sections with `<Separator />`
- Section headers: icon box + title using the standard pattern
- Side-by-side fields: `grid grid-cols-1 md:grid-cols-2 gap-4`
