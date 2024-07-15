import React from "react";
import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    // throw new Error("This action should not be called.");
    await deleteContact(params.contactId);
    return redirect("/");
}

