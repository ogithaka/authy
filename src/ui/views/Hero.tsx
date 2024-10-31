import Image from 'next/image';

export default function Hero() {
    return (
        <section id='hero'>
            <div>
                <div>
                    <Image
                        src={'/images/landing/hero-1.jpg'}
                        alt='Hero Image 1'
                        width={700}
                        height={500}
                    />
                </div>
                <div>
                    <p>Listeners</p>
                    <h1>340k+</h1>
                </div>
                <div>
                    <p>Streams</p>
                    <h1>500k+</h1>
                </div>
            </div>
            <div>
                <div>
                    <h1>Unlock Your Potential</h1>
                    <p>With our self improovement podcast</p>
                </div>
                <div>
                    <Image
                        src={'/images/landing/hero-2.jpg'}
                        alt='Hero Image 2'
                        width={100}
                        height={100}
                    />
                    <h1>Episode 205 - Mastering Mindfulness</h1>
                </div>
                <div>
                    <p>Listen on</p>
                    <Image
                        src={'/icons/github.svg'}
                        alt='Github Icon'
                        width={40}
                        height={40}
                    ></Image>
                </div>
            </div>
        </section>
    );
}
