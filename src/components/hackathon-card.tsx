import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function ExtracurricularsCard({
  title,
  description,
  location,
  image,
  links,
}: Props) {
  // First link (if present) used as primary action for whole card (still keep individual link badges)
  const primaryHref = links?.[0]?.href;

  const CardWrapper = primaryHref ? (Link as any) : ("div" as any);

  return (
    <li className="list-none mb-4 last:mb-0">
      <CardWrapper
        href={primaryHref}
        className={cn(
          "group relative flex w-full gap-6 overflow-hidden rounded-xl border bg-background/70 p-5",
          "backdrop-blur supports-[backdrop-filter]:bg-background/60",
          "transition duration-300 hover:shadow-md hover:border-foreground/30",
          primaryHref && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        {/* Accent bar */}
        <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/10 opacity-70 transition group-hover:opacity-100" />

        {/* Avatar / Icon */}
        <div className="relative mt-1 shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-primary/10 to-secondary/40 blur-sm opacity-70 group-hover:opacity-100 transition" />
          <Avatar className="relative z-10 h-14 w-14 border shadow-sm">
            <AvatarImage src={image} alt={title} className="object-cover" />
            <AvatarFallback className="text-sm font-medium">
              {title?.[0] ?? "?"}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold leading-snug tracking-tight md:text-base">
              {title}
            </h3>
            {location && (
              <span className="hidden rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground/90 md:inline-block">
                {location}
              </span>
            )}
          </div>
          {location && (
            <span className="mt-0.5 text-[11px] font-medium text-muted-foreground md:hidden">
              {location}
            </span>
          )}
          {description && (
            <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {description}
            </p>
          )}

          {links && links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  className="group/link"
                  aria-label={link.title}
                >
                  <Badge
                    variant="outline"
                    className="flex gap-1.5 rounded-full border-foreground/15 bg-background/50 px-2.5 py-1 text-[10px] font-medium backdrop-blur transition hover:bg-foreground hover:text-background"
                  >
                    <span className="inline-flex h-4 w-4 items-center justify-center text-[11px]">
                      {link.icon}
                    </span>
                    {link.title}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Hover overlay if whole card is a link */}
        {primaryHref && (
          <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/5 opacity-0 transition group-hover:opacity-100" />
        )}
      </CardWrapper>
    </li>
  );
}
