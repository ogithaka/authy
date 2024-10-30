import { LayoutStyles } from '@/exports/styles';

export default function Main({ children }: MainProps) {
    return <main className={LayoutStyles.Main}>{children}</main>;
}
