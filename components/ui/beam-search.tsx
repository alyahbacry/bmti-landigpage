
"use client";

import * as React from "react";
import {
  BorderBeam,
  type BorderBeamColorVariant,
} from "border-beam";
import { Search, X } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BeamSearchProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  alwaysOn?: boolean;
  colorVariant?: BorderBeamColorVariant;
  theme?: "auto" | "light" | "dark";
  trailing?: React.ReactNode;
  className?: string;
}

export function BeamSearch({
  value,
  defaultValue = "",
  onChange,
  onSubmit,
  placeholder = "Search...",
  alwaysOn = false,
  colorVariant = "colorful",
  theme = "light",
  trailing,
  className,
}: BeamSearchProps) {
  const [inner, setInner] = React.useState(defaultValue);
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const current = value ?? inner;

  const update = (next: string) => {
    if (value === undefined) setInner(next);
    onChange?.(next);
  };

  return (
    <BorderBeam
      size="line"
      colorVariant={colorVariant}
      theme={theme}
      active={alwaysOn || focused}
      className={cn("w-full", className)}
    >
      <label
        className={cn(
          "flex h-12 w-full items-center gap-3 rounded-xl border border-black/10 bg-white px-3.5 transition-colors",
          focused && "border-black/20",
        )}
      >
        <Search className="size-4 shrink-0 text-neutral-400" />

        <input
          ref={inputRef}
          type="search"
          value={current}
          placeholder={placeholder}
          onChange={(event) => update(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(event) => {
            if (event.key === "Enter") onSubmit?.(current);
            if (event.key === "Escape") update("");
          }}
          className="min-w-0 flex-1 bg-transparent text-[15px] text-neutral-900 outline-none placeholder:text-neutral-400 [&::-webkit-search-cancel-button]:hidden"
        />

        {current ? (
          <button
            type="button"
            aria-label="Clear"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              update("");
              inputRef.current?.focus();
            }}
            className="flex size-6 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-black/5 hover:text-neutral-700"
          >
            <X className="size-3.5" />
          </button>
        ) : (
          trailing
        )}
      </label>
    </BorderBeam>
  );
}

export default BeamSearch;
