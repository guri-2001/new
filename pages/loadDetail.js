import Link from 'next/link'
import React from 'react'

const LoadDetail = () => {
    return (
        <div style={{ backgroundColor: "rgb(241 245 249)", height: "100vh" }}>
            <div>
                <Link href={'/allloads'}>BACK TO LOADS</Link>
            </div>
        </div>
    )
}

export default LoadDetail