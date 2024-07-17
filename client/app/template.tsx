"use client"

import NextPageTransition from "@gimwa/next-page-transition"

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextPageTransition
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
        >
            { children }
        </NextPageTransition>
    )
}

export default RootTemplate