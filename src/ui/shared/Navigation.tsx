import { SharedStyles } from '@/exports/styles';

export default function Navigation({ children }: NavigationProps) {
    return <nav className={SharedStyles.Navigation}>{children}</nav>;
}
