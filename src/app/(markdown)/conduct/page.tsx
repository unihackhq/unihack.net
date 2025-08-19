import Content from '@/content/code-of-conduct.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UNIHACK - Code of Conduct'
}

export default function Page() {
    return (
        <>
            <h1>Code of Conduct</h1>
            <Content />
        </>
    )
}