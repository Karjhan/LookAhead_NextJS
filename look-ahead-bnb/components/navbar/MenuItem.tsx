
interface MenuItemProps{
    onClick: () => void
    label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div className="px-4 py-3 hover:bg-amber-100 transition font-semibold" onClick={onClick}>
      {label}
    </div>
  )
}

export default MenuItem
