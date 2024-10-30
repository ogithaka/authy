import { Logo } from '@/exports/shared';
import { SharedStyles } from '@/exports/styles';

export default function Brand() {
    return (
        <div className={SharedStyles.Brand}>
            <Logo />
            <p>Authy</p>
        </div>
    );
}
