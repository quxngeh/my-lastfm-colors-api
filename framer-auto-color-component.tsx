// framer-auto-color-component.tsx
// Drop this into a Framer Code Component to automatically apply colors

import { useEffect, useState } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
    apiUrl: string
    updateInterval: number
    showDebugInfo: boolean
}

export default function AutoColorUpdater(props: Props) {
    const [colors, setColors] = useState(null)
    const [metadata, setMetadata] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchColors = async () => {
        try {
            setLoading(true)
            const response = await fetch(props.apiUrl)
            const data = await response.json()
            
            if (data.success && data.colors) {
                setColors(data.colors)
                setMetadata(data.metadata)
                setError(null)
                
                // Apply colors to CSS variables
                const root = document.documentElement
                Object.entries(data.colors).forEach(([name, color]) => {
                    root.style.setProperty(`--color-${name}`, color as string)
                })
                
                console.log('🎨 Colors updated from Last.fm:', data.metadata)
            } else {
                setError(data.error || 'Failed to fetch colors')
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // Fetch colors immediately
        fetchColors()
        
        // Set up interval for periodic updates
        const interval = setInterval(fetchColors, props.updateInterval * 60 * 1000)
        
        return () => clearInterval(interval)
    }, [props.apiUrl, props.updateInterval])

    if (!props.showDebugInfo) {
        return null // Component is invisible, just applies colors
    }

    return (
        <div style={{
            padding: "20px",
            background: "var(--color-secondary, #f5f5f5)",
            borderRadius: "8px",
            fontFamily: "system-ui",
            fontSize: "14px",
            color: "var(--color-primary, #333)"
        }}>
            <h3 style={{ margin: "0 0 10px 0" }}>🎵 Last.fm Colors</h3>
            
            {loading && <p>Loading colors...</p>}
            
            {error && (
                <p style={{ color: "#e00" }}>Error: {error}</p>
            )}
            
            {metadata && (
                <div>
                    <p><strong>Song:</strong> "{metadata.song}" by {metadata.artist}</p>
                    <p><strong>Updated:</strong> {metadata.generatedAt}</p>
                </div>
            )}
            
            {colors && (
                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    {Object.entries(colors).map(([name, color]) => (
                        <div key={name} style={{ textAlign: "center" }}>
                            <div style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: color as string,
                                borderRadius: "4px",
                                border: "1px solid #ddd"
                            }} />
                            <small style={{ display: "block", marginTop: "4px" }}>
                                {name}
                            </small>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// Framer property controls
addPropertyControls(AutoColorUpdater, {
    apiUrl: {
        type: ControlType.String,
        title: "API URL",
        defaultValue: "https://your-api-url.vercel.app/api/latest-colors",
        placeholder: "Enter your API URL"
    },
    updateInterval: {
        type: ControlType.Number,
        title: "Update Interval (minutes)",
        defaultValue: 60,
        min: 5,
        max: 1440,
        step: 5
    },
    showDebugInfo: {
        type: ControlType.Boolean,
        title: "Show Debug Info",
        defaultValue: false
    }
})
