import { Fragment } from 'react';
import Link from 'next/link';
import type { RichTextNode } from '@/types/store';
export default function RichText({ nodes }: {
    nodes: RichTextNode[];
}) {
    return <>{nodes.map((node, index) => {
            const content = node.children ? <RichText nodes={node.children}/> : node.text;
            switch (node.type) {
                case 'text': return <Fragment key={index}>{node.text}</Fragment>;
                case 'paragraph': return node.children?.some(child => ['paragraph', 'heading', 'list', 'table'].includes(child.type)) ? <div key={index}>{content}</div> : <p key={index}>{content}</p>;
                case 'heading': return node.level === 3 ? <h3 key={index}>{content}</h3> : node.level === 4 ? <h4 key={index}>{content}</h4> : <h2 key={index}>{content}</h2>;
                case 'list': return node.ordered ? <ol key={index}>{content}</ol> : <ul key={index}>{content}</ul>;
                case 'list-item': return <li key={index}>{content}</li>;
                case 'strong': return <strong key={index}>{content}</strong>;
                case 'emphasis': return <em key={index}>{content}</em>;
                case 'link': return node.href?.startsWith('/') ? <Link key={index} href={node.href}>{content}</Link> : <a key={index} href={node.href}>{content}</a>;
                // Reference images are local assets with their original proportions.
                // eslint-disable-next-line @next/next/no-img-element
                case 'image': return <img key={index} src={node.src} alt={node.alt || ''} loading="lazy"/>;
                case 'break': return <br key={index}/>;
                case 'quote': return <blockquote key={index}>{content}</blockquote>;
                case 'table': return <div className="content-table" key={index}><table><tbody>{content}</tbody></table></div>;
                case 'row': return <tr key={index}>{content}</tr>;
                case 'cell': return <td key={index}>{content}</td>;
            }
        })}</>;
}
