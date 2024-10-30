'use client';
import { SharedStyles } from '@/exports/styles';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation({ children }: NavigationProps) {
    const [dropdown, setDropdown] = useState<boolean>(false);
    function triggerDropdown() {
        setDropdown(!dropdown);
    }
    return (
        <nav className={SharedStyles.Navigation}>
            <div className={SharedStyles.NavigationLarge}>{children}</div>
            <div className={SharedStyles.NavigationSmall}>
                <div
                    className={SharedStyles.NavigationSmallTrigger}
                    onClick={triggerDropdown}
                >
                    {dropdown ? (
                        <Image
                            src={'/icons/open_menu.svg'}
                            alt='Open Menu Icon'
                            width={24}
                            height={24}
                        />
                    ) : (
                        <Image
                            src={'/icons/close_menu.svg'}
                            alt='Close Menu Icon'
                            width={24}
                            height={24}
                        />
                    )}
                </div>
                {dropdown ? (
                    <div className={SharedStyles.NavigationSmallDropdown}>
                        {children}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
