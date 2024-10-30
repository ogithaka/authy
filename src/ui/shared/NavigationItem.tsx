import { SharedStyles } from '@/exports/styles';
import Link from 'next/link';

export default function NavigationItem({ url, name }: NavigationItemProps) {
    return (
        <Link
            href={url}
            className={SharedStyles.NavigationItem}
        >
            {name}
        </Link>
    );
}
