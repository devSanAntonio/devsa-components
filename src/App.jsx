import { PageIntro } from './components/PageIntro';

export default function App() {
    return (
        <>
            <PageIntro
                eyebrow="Building a project for devSA?"
                title="Thank you for taking the time to build for devSA!"
            >
                <p>
                    The goal of this GitHub repository is to provide our community with access to components that will make it easier to maintain a consistent look and feel across all devSA projects
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        These components are styled with <span className='text-spursTurq'>TailwindCSS</span> and can be utilized in any <span className='text-spursPink'>HTML, React, or Vue</span> project you build for devSA
                    </p>
                    <p>
                        If you have any questions, please reach out to us on our <a href="https://discord.gg/f3gnmjScW3"><span className='text-spursOrange'>devSA Discord Server</span></a>. 
                        Come say hello, ask questions about this repository, brainstorm project ideas, and receive assistance from the community
                    </p>
                </div>

            </PageIntro>
        </>
    );
}
