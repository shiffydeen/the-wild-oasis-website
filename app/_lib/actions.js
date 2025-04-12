"use server";

import { signIn, signOut } from "@/auth";

export async function updateGuest(formData) {
   const session = await auth();
   if (!session) throw new Error("You must be logged in");
   const nationalID = formData.get('nationalID');
   const [nationality, countryFlag] = formData.get('nationality').split("%");
}

export async function signInAction() {
    await signIn('google', {redirectTo: "/account"});
}

export async function signOutAction() {
    await signOut({redirectTo: "/"});
}

