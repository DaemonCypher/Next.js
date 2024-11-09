"use client";

import {useState} from "react";
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./bigContent.js'), {
    ssr: false,
    loading: () => <p>loading...</p>
});

export function ClientComponent() {
    const [show, setShow] = useState(false);

    return (
        <>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <DynamicComponent />}
        </>

    );
}
