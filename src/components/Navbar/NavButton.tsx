
const NavButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex my-1 p-2 justify-center content-center">
            {children}
        </div>
    )
}

export default NavButton