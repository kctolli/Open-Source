"use client";
import React from "react";
import ReBuild from "@kctolli/rebuild-component";

export default function Home() {
    const buildUrl = "https://api.netlify.com/build_hooks/65deba11bb7acd956a44b088";
    const statusUrl = "https://api.netlify.com/api/v1/badges/b979f67f-7023-468d-9442-1a6e76af2807/deploy-status";

    return <ReBuild statusUrl={statusUrl} buildUrl={buildUrl} />;
}
