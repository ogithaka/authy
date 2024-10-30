import { SharedStyles } from '@/exports/styles';
import Link from 'next/link';

export default function NavigationItem({
    url,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            href={url}
            className={
                active
                    ? SharedStyles.NavigationItem
                    : SharedStyles.NavigationItem
            }
        >
            {name}
        </Link>
    );
}
