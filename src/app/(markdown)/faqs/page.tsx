import { getFaqEntries } from "./utils"
import { FaqEntry } from '@/components/faq-entry';

export default async function FaqsPage() {
    const pages = await getFaqEntries();
    return (
        <>
            <h1>Frequently Asked Questions</h1>
            {pages.map(
                ({content: Content, title, key}) => (
                    <FaqEntry title={title} id={key} key={key}>
                        <Content />
                    </FaqEntry>
                )
            )}
        </>
    )
};