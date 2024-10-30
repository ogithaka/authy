import { LayoutStyles } from '@/exports/styles';
import { Brand } from '@/exports/shared';

export default function Header() {
    return (
        <header className={LayoutStyles.Header}>
            <Brand />
        </header>
    );
}
