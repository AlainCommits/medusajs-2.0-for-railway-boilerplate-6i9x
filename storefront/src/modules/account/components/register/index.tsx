"use client";

import React from "react";
import { useFormState } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { LOGIN_VIEW } from "@modules/account/templates/login-template";
import ErrorMessage from "@modules/checkout/components/error-message";
import { SubmitButton } from "@modules/checkout/components/submit-button";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { signup } from "@lib/data/customer";

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void;
};

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signup, null);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gradient-to-br from-background to-secondary">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Willkommen bei Medusa Store
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Erstellen Sie Ihr Medusa Store-Mitgliedsprofil und genießen Sie ein verbessertes Einkaufserlebnis.
      </p>

      <form className="my-8" action={formAction}>
        <div className="flex flex-col space-y-4">
          <LabelInputContainer>
            <Label htmlFor="first_name">Vorname</Label>
            <Input
              id="first_name"
              name="first_name"
              placeholder="Max"
              required
              autoComplete="given-name"
              data-testid="first-name-input"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="last_name">Nachname</Label>
            <Input
              id="last_name"
              name="last_name"
              placeholder="Mustermann"
              required
              autoComplete="family-name"
              data-testid="last-name-input"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">E-Mail-Adresse</Label>
            <Input
              id="email"
              name="email"
              placeholder="max.mustermann@beispiel.de"
              required
              type="email"
              autoComplete="email"
              data-testid="email-input"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+49 123 4567890"
              type="tel"
              autoComplete="tel"
              data-testid="phone-input"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="password">Passwort</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
              autoComplete="new-password"
              data-testid="password-input"
            />
          </LabelInputContainer>
        </div>

        <ErrorMessage error={message} data-testid="register-error" />

        <span className="text-center text-ui-fg-base text-small-regular mt-6 block">
          Durch die Erstellung eines Kontos stimmen Sie den{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Datenschutzrichtlinien
          </LocalizedClientLink>{" "}
          und{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Nutzungsbedingungen
          </LocalizedClientLink>{" "}
          von Medusa Store zu.
        </span>

        <SubmitButton
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-6"
          data-testid="register-button"
        >
          Registrieren
          <BottomGradient />
        </SubmitButton>
      </form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="flex flex-col space-y-4">
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button"
        >
          <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Mit GitHub registrieren
          </span>
          <BottomGradient />
        </button>
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button"
        >
          <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Mit Google registrieren
          </span>
          <BottomGradient />
        </button>
        <button
          className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          type="button"
        >
          <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            Mit OnlyFans registrieren
          </span>
          <BottomGradient />
        </button>
      </div>

      <span className="text-center text-ui-fg-base text-small-regular mt-6 block">
        Bereits Mitglied?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Anmelden
        </button>
        .
      </span>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Register;