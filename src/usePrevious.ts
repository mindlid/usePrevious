import { useEffect, useRef } from 'react'

// Migrated to typescript from source https://usehooks.com/usePrevious/

/**
 * Get the previous value of a variable
 * @param variable the variable you want to track
 * @returns the previous variable's value
 */
export const usePrevious = <T>(variable: T): T | undefined => {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef<T>()
    // Store current value in ref
    useEffect(() => {
        ref.current = variable
    }, [variable])
    // Return previous value (happens before update in useEffect above)
    return ref.current
}