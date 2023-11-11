"use client";
import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "./styles.module.scss";

export default function Tooltip({
  trigger,
  text,
}: {
  trigger: any;
  text: string;
}) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={styles.tooltipContent}
            sideOffset={20}
            side="right"
            align="center"
          >
            {text}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
