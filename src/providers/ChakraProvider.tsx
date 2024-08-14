'use client'

import { ChakraProvider as CP } from '@chakra-ui/react'

export function ChakraProviders({ children }: { children: React.ReactNode }) {
    return <CP>{children}</CP>
}