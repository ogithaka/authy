import { LayoutStyles } from '@/exports/styles';
import { Brand, Navigation } from '@/exports/shared';

export default function Header({ children }: HeaderProps) {
    return (
        <header className={LayoutStyles.Header}>
            <Brand />
            <Navigation>{children}</Navigation>
        </header>
    );
}
