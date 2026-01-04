import { Search } from 'lucide-react'

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export const SearchBar = ({ 
  placeholder = "Search Project ...", 
  value,
  onChange,
  className = ""
}: SearchBarProps) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-6 py-3 pr-12 rounded-2xl bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-900" />
    </div>
  )
}