"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";
import posthog from "posthog-js";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { VersionSelect } from "@/components/version-selector";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="relative mr-6 flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="dark:invert h-4 w-4" />
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      <VersionSelect />

      <nav className="hidden items-center space-x-6 text-sm font-medium md:flex ml-2 ">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            aria-label={item.title}
            onClick={() => item.event && posthog.capture(item.event)}
            target={item.external ? "_blank" : undefined}
            className={cn(
              "flex items-center justify-center transition-colors hover:text-foreground/80",
              pathname?.startsWith(item.href!)
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            <span className="shrink-0">{item.title}</span>
            {item.label && (
              <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
            {item.external && <ExternalLinkIcon className="ml-2 size-4" />}
          </Link>
        ))}
      </nav>
    </div>
  );
}
