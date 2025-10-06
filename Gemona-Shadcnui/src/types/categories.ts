import type { LucideProps } from "lucide-react";

export type CategorieT = {
    name: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    description: string,
}