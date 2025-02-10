import React from "react";

export interface CategoryCardProps {
  feature: {
    title: string;
    icon: React.ReactNode;
    description: string;
  };
  index: number;
}
