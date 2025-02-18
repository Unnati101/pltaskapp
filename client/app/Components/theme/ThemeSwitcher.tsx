import React from 'react'
import { moon } from '@/utils/Icons'
import { useTheme } from 'next-themes'


function ThemeSwitcher() {

    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            console.log(theme)
        }
        else {
            setTheme('dark')
            console.log(theme)
        }
    }

    return (
        <button
            onClick={handleTheme}
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
        >{moon}
        </button>
    )
}

export default ThemeSwitcher